/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Loader2, Sparkles, SlidersHorizontal, Info, Check, Image as ImageIcon } from 'lucide-react';

export interface WoodblockLayers {
  paper: boolean;
  yellow: boolean;
  red: boolean;
  green: boolean;
  black: boolean;
}

interface WoodblockCanvasSimulatorProps {
  layers: WoodblockLayers;
  onResetLayers?: () => void;
}

// Chuyển đổi RGB sang HSL chuẩn xác
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / d + 2) * 60;
        break;
      case b:
        h = ((r - g) / d + 4) * 60;
        break;
    }
  }
  return { h, s, l };
}

export const WoodblockCanvasSimulator: React.FC<WoodblockCanvasSimulatorProps> = ({
  layers
}) => {
  // Ba tác phẩm thử nghiệm mộc bản thật từ kho tư liệu ảnh
  const [selectedArtwork, setSelectedArtwork] = useState<'ga_dai_cat' | 'lon_am_duong' | 'dam_cuoi_chuot'>('ga_dai_cat');
  const [luminanceThreshold, setLuminanceThreshold] = useState<number>(82);
  const [showThresholdControl, setShowThresholdControl] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  // Chế độ xem: 'positive' (bản in trên giấy thuận chiều) hoặc 'negative' (ván khắc mộc bản âm bản đảo ngược scaleX(-1))
  const [viewMode, setViewMode] = useState<'positive' | 'negative'>('positive');

  // Lưu trữ các DataURL của từng lớp ván in đã tách
  const [layerUrls, setLayerUrls] = useState<{
    paper: string;
    yellow: string;
    red: string;
    green: string;
    black: string;
  }>({
    paper: '',
    yellow: '',
    red: '',
    green: '',
    black: ''
  });

  const artworkSources = {
    ga_dai_cat: {
      title: 'Gà Đại Cát',
      path: '/paintings/ga_dai_cat.jpg',
      aspect: 'aspect-[3/4]',
      desc: 'Tranh chúc Tết biểu trưng Ngũ Đức, bản in mộc bản trên giấy điệp.'
    },
    lon_am_duong: {
      title: 'Đàn Lợn Âm Dương',
      path: '/paintings/lon_am_duong.jpg',
      aspect: 'aspect-[4/3]',
      desc: 'Tranh sinh hoạt nông nghiệp với vòng xoáy thái cực âm dương no ấm.'
    },
    dam_cuoi_chuot: {
      title: 'Đám Cưới Chuột',
      path: '/paintings/dam_cuoi_chuot.jpg',
      aspect: 'aspect-[4/3]',
      desc: 'Kiệt tác trào phúng dân gian với đa tầng nhân vật và màu sắc phong phú.'
    }
  };

  // Thuật toán tách ván màu từ bản quét tranh thật bằng HTML5 Canvas trong trình duyệt
  useEffect(() => {
    let isCancelled = false;
    setIsProcessing(true);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = artworkSources[selectedArtwork].path;

    img.onload = () => {
      if (isCancelled) return;

      // Độ phân giải xử lý tiêu chuẩn 540px đảm bảo độ sắc nét cao và tốc độ tức thì
      const targetWidth = 540;
      const targetHeight = Math.round((img.naturalHeight / img.naturalWidth) * targetWidth);

      // Tạo canvas nguồn
      const srcCanvas = document.createElement('canvas');
      srcCanvas.width = targetWidth;
      srcCanvas.height = targetHeight;
      const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });
      if (!srcCtx) return;

      srcCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
      const srcImageData = srcCtx.getImageData(0, 0, targetWidth, targetHeight);
      const { data } = srcImageData;
      const totalPixels = targetWidth * targetHeight;

      // Chuẩn bị 5 bộ đệm ImageData cho từng ván in
      const paperBuffer = new Uint8ClampedArray(data.length);
      const yellowBuffer = new Uint8ClampedArray(data.length);
      const redBuffer = new Uint8ClampedArray(data.length);
      const greenBuffer = new Uint8ClampedArray(data.length);
      const blackBuffer = new Uint8ClampedArray(data.length);

      // Mã màu chuẩn của dự án:
      // - Đen than tre: #211E1B (33, 30, 27)
      // - Đỏ son: #A9362B (169, 54, 43)
      // - Vàng hòe: #D5A33B (213, 163, 59)
      // - Xanh chàm: #355A50 (53, 90, 80)
      // - Giấy điệp ngà: #F4EBDD (244, 235, 221)

      for (let i = 0; i < totalPixels * 4; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a < 20) continue;

        // Tính toán độ sáng (Luminance) và HSL
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const { h, s, l } = rgbToHsl(r, g, b);

        // 1. Phân loại Ván Nét Than Đen (Black Key-line)
        // Mực than lá tre: tối hẳn (lum < 42) hoặc độ sáng thấp (< ngưỡng điều chỉnh) kết hợp độ bão hòa thấp (mực không có sắc rực)
        const isBlack = lum < 42 || (lum < luminanceThreshold && s < 0.24);

        // 2. Phân loại Ván Đỏ Son (Red Woodblock)
        // Sắc đỏ son thảo mộc/khoáng thạch: hue 0-24 độ hoặc 338-360 độ, độ bão hòa rõ, không phải than đen
        const isRed = !isBlack && (h <= 24 || h >= 338) && s >= 0.18 && lum >= 55 && lum <= 200;

        // 3. Phân loại Ván Vàng Hòe (Yellow Woodblock)
        // Sắc vàng hoa hòe / dành dành: hue 25-68 độ.
        // Nền giấy điệp cũng ấm nhưng sáng hơn (lum > 215) hoặc bão hòa thấp hơn (s < 0.22).
        const isYellow = !isBlack && !isRed && (h >= 25 && h <= 68) && s >= 0.22 && lum >= 80 && lum <= 215;

        // 4. Phân loại Ván Xanh Chàm / Gỉ Đồng (Green/Teal Woodblock)
        // Lá chàm hoặc rỉ đồng: hue 80-195 độ
        const isGreen = !isBlack && !isRed && !isYellow && (h >= 80 && h <= 195) && s >= 0.12 && lum >= 40 && lum <= 195;

        // Ghi vào Lớp 0: Nền Giấy Điệp
        // Giữ nguyên ảnh gốc của bản quét nhưng làm mờ các lớp màu in về màu giấy ngà
        if (isBlack || isRed || isYellow || isGreen) {
          paperBuffer[i] = Math.round(r * 0.12 + 244 * 0.88);
          paperBuffer[i + 1] = Math.round(g * 0.12 + 235 * 0.88);
          paperBuffer[i + 2] = Math.round(b * 0.12 + 221 * 0.88);
          paperBuffer[i + 3] = 255;
        } else {
          // Giữ nguyên thớ giấy dó và ánh bột điệp tự nhiên của ảnh chụp hiện vật
          paperBuffer[i] = r;
          paperBuffer[i + 1] = g;
          paperBuffer[i + 2] = b;
          paperBuffer[i + 3] = a;
        }

        // Ghi vào Lớp 1: Ván Vàng Hoè (làm phẳng về mã màu #D5A33B của dự án)
        if (isYellow) {
          const alpha = Math.min(255, Math.max(140, Math.round(s * 255 * 1.3)));
          yellowBuffer[i] = 213;
          yellowBuffer[i + 1] = 163;
          yellowBuffer[i + 2] = 59;
          yellowBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 2: Ván Đỏ Son (làm phẳng về mã màu #A9362B của dự án)
        if (isRed) {
          const alpha = Math.min(255, Math.max(150, Math.round(s * 255 * 1.3)));
          redBuffer[i] = 169;
          redBuffer[i + 1] = 54;
          redBuffer[i + 2] = 43;
          redBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 3: Ván Xanh Chàm (làm phẳng về mã màu #355A50 của dự án)
        if (isGreen) {
          const alpha = Math.min(255, Math.max(150, Math.round(s * 255 * 1.3)));
          greenBuffer[i] = 53;
          greenBuffer[i + 1] = 90;
          greenBuffer[i + 2] = 80;
          greenBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 4: Ván Nét Than Đen (làm phẳng về mã màu #211E1B của dự án)
        if (isBlack) {
          const alpha = Math.min(255, Math.max(160, Math.round((1 - lum / (luminanceThreshold + 20)) * 255)));
          blackBuffer[i] = 33;
          blackBuffer[i + 1] = 30;
          blackBuffer[i + 2] = 27;
          blackBuffer[i + 3] = alpha;
        }
      }

      // Hàm chuyển ImageData sang DataURL
      const toUrl = (buffer: Uint8ClampedArray) => {
        const c = document.createElement('canvas');
        c.width = targetWidth;
        c.height = targetHeight;
        const ctx = c.getContext('2d');
        if (!ctx) return '';
        const imgData = ctx.createImageData(targetWidth, targetHeight);
        imgData.data.set(buffer);
        ctx.putImageData(imgData, 0, 0);
        return c.toDataURL('image/png');
      };

      setLayerUrls({
        paper: toUrl(paperBuffer),
        yellow: toUrl(yellowBuffer),
        red: toUrl(redBuffer),
        green: toUrl(greenBuffer),
        black: toUrl(blackBuffer)
      });

      setIsProcessing(false);
    };

    return () => {
      isCancelled = true;
    };
  }, [selectedArtwork, luminanceThreshold]);

  return (
    <div className="space-y-3">
      {/* HÀNG ĐIỀU KHIỂN: CHỌN TRANH, CHỌN CHẾ ĐỘ BẢN ÂM/DƯƠNG & NGƯỠNG LUMINANCE */}
      <div className="space-y-2 pb-1 border-b border-stone-200 dark:border-stone-800 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center gap-1 font-semibold text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs">
            <ImageIcon className="w-3.5 h-3.5 text-[#A9362B] shrink-0" />
            <span>Bản quét hiện vật:</span>
          </div>

          {/* CHUYỂN ĐỔI CHẾ ĐỘ: BẢN IN TRÊN GIẤY (DƯƠNG) VS VÁN KHẮC GỖ (ÂM BẢN LẬT NGANG scaleX(-1)) */}
          <div className="flex items-center bg-stone-200/80 dark:bg-stone-800 p-0.5 rounded-md border border-stone-300 dark:border-stone-700 text-[10px] sm:text-[11px]">
            <button
              onClick={() => setViewMode('positive')}
              className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                viewMode === 'positive'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
              title="Bản in trên giấy dó thuận chiều"
            >
              Bản in giấy (Dương)
            </button>
            <button
              onClick={() => setViewMode('negative')}
              className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                viewMode === 'negative'
                  ? 'bg-[#A9362B] text-white shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
              title="Ván khắc mộc bản gỗ âm bản (đảo ngược trái-phải để in)"
            >
              Ván khắc gỗ (Âm bản)
            </button>
          </div>
        </div>

        {/* CÁC NÚT CHỌN TRANH & NÚT CÀI ĐẶT NGƯỠNG */}
        <div className="flex items-center justify-between gap-1 flex-wrap">
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={() => setSelectedArtwork('ga_dai_cat')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                selectedArtwork === 'ga_dai_cat'
                  ? 'bg-[#A9362B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
              }`}
            >
              1. Gà Đại Cát
            </button>
            <button
              onClick={() => setSelectedArtwork('lon_am_duong')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                selectedArtwork === 'lon_am_duong'
                  ? 'bg-[#A9362B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
              }`}
            >
              2. Đàn Lợn Âm Dương
            </button>
            <button
              onClick={() => setSelectedArtwork('dam_cuoi_chuot')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                selectedArtwork === 'dam_cuoi_chuot'
                  ? 'bg-[#A9362B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
              }`}
            >
              3. Đám Cưới Chuột
            </button>
          </div>

          <button
            onClick={() => setShowThresholdControl(!showThresholdControl)}
            className="p-1 rounded text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 border border-transparent hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            title="Điều chỉnh ngưỡng tách nét đen"
            aria-label="Cài đặt ngưỡng tách nét đen"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* THANH TRƯỢT ĐIỀU CHỈNH NGƯỠNG LUMINANCE KHI MỞ */}
      {showThresholdControl && (
        <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-stone-300 dark:border-stone-700 space-y-1.5 text-xs animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-stone-700 dark:text-stone-300 text-[11px]">
              Ngưỡng sáng tách ván nét đen (Luminance): {luminanceThreshold}
            </span>
            <span className="text-[10px] text-stone-500">Mặc định: 82</span>
          </div>
          <input
            type="range"
            min={55}
            max={115}
            value={luminanceThreshold}
            onChange={(e) => setLuminanceThreshold(Number(e.target.value))}
            className="w-full accent-[#A9362B] cursor-pointer"
          />
          <div className="text-[10px] text-stone-500 italic">
            Tăng ngưỡng để nét đen dày hơn; giảm ngưỡng để chỉ lấy các đường khắc gỗ sâu nhất.
          </div>
        </div>
      )}

      {/* KHUNG HIỂN THỊ CÁC LỚP VÁN IN / MỘC BẢN CHỒNG LÊN NHAU */}
      <div className={`relative w-full ${artworkSources[selectedArtwork].aspect} max-h-[390px] rounded-lg overflow-hidden border-2 border-stone-800/30 dark:border-stone-300/30 shadow-md ${viewMode === 'negative' ? 'bg-[#5c4033]/20 dark:bg-stone-950' : 'bg-[#F4EBDD]'} flex items-center justify-center transition-all duration-300`}>
        {isProcessing && (
          <div className="absolute inset-0 bg-[#F4EBDD]/90 dark:bg-stone-900/90 z-20 flex flex-col items-center justify-center gap-2 text-stone-700 dark:text-stone-300 text-xs">
            <Loader2 className="w-6 h-6 animate-spin text-[#A9362B]" />
            <span>Đang xử lý tách lớp mộc bản từ ảnh quét thật...</span>
          </div>
        )}

        {/* LỚP NỘI DUNG ẢNH: SỬ DỤNG transform: scaleX(-1) KHI Ở CHẾ ĐỘ VÁN KHẮC ÂM BẢN (KHÔNG LẬT CHỮ/UI KHÁC) */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-500"
          style={{ transform: viewMode === 'negative' ? 'scaleX(-1)' : 'none' }}
        >
          {/* LỚP 0: NỀN GIẤY DÓ QUÉT ĐIỆP */}
          {layerUrls.paper && (
            <img
              src={layerUrls.paper}
              alt="Nền giấy điệp"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                layers.paper ? 'opacity-100' : 'opacity-20'
              }`}
            />
          )}

          {/* LỚP 1: VÁN IN VÀNG HÒE */}
          {layerUrls.yellow && (
            <img
              src={layerUrls.yellow}
              alt="Ván in vàng hòe"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.yellow ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

          {/* LỚP 2: VÁN IN ĐỎ SON */}
          {layerUrls.red && (
            <img
              src={layerUrls.red}
              alt="Ván in đỏ son"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.red ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

          {/* LỚP 3: VÁN IN XANH CHÀM */}
          {layerUrls.green && (
            <img
              src={layerUrls.green}
              alt="Ván in xanh chàm"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.green ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

          {/* LỚP 4: VÁN NÉT THAN ĐEN (ĐỊNH HÌNH ĐƯỜNG NÉT) */}
          {layerUrls.black && (
            <img
              src={layerUrls.black}
              alt="Ván nét than đen định hình"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.black ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        {/* HUY HIỆU TRẠNG THÁI BẢN ÂM/BẢN DƯƠNG (KHÔNG BỊ LẬT, NẰM TRÊN LAYER RIÊNG) */}
        {viewMode === 'negative' && (
          <div className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded bg-stone-900/90 backdrop-blur-xs text-white text-xs font-medium shadow-sm flex items-center gap-1.5 border border-stone-700 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5A33B]" />
            <span>Ván khắc âm bản (Chữ & hình khắc đảo ngược)</span>
          </div>
        )}

        {/* CHÚ THÍCH KHI CHƯA IN LỚP NÀO */}
        {!layers.yellow && !layers.red && !layers.green && !layers.black && !isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none z-10">
            <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300 bg-white/90 dark:bg-stone-900/90 px-3.5 py-2 rounded-full shadow-sm border border-stone-300 dark:border-stone-700 max-w-[90%]">
              {viewMode === 'negative'
                ? "Ván khắc mộc âm bản đã gá sẵn. Bấm các nút ván màu bên dưới để quét mực in!"
                : (layers.paper ? "Tờ giấy dó phết bột điệp đã sẵn sàng. Nhấn các nút ván màu bên dưới để dằn in từng lớp!" : "Chưa đặt giấy dó lên thớt in.")}
            </span>
          </div>
        )}

        {/* DÒNG GHI CHÚ BẮT BUỘC THEO QUY ĐỊNH (KHÔNG BỊ LẬT) */}
        <div className="absolute bottom-1.5 right-2 px-2 py-0.5 rounded bg-black/65 backdrop-blur-sm text-[9px] text-stone-200 pointer-events-none z-10">
          Mô phỏng từ bản quét, không phải ván in thật
        </div>
      </div>
    </div>
  );
};
