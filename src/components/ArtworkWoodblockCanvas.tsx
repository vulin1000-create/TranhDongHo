/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ArtworkWoodblockCanvas.tsx
 * Mô phỏng phân tách các lớp ván in mộc bản (Nét than, Đỏ son, Vàng hòe, Xanh chàm)
 * trực tiếp từ ảnh bản quét hiện vật thật bằng HTML5 Canvas trong trình duyệt.
 * Tuyệt đối không dùng SVG/CSS vẽ tay tự tạo.
 */

import React, { useEffect, useState, useRef } from 'react';
import { Loader2, RotateCcw, SlidersHorizontal, Layers, Eye, Info, Check, ImageOff } from 'lucide-react';

interface ArtworkWoodblockCanvasProps {
  imagePath: string;
  title: string;
  className?: string;
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

export const ArtworkWoodblockCanvas: React.FC<ArtworkWoodblockCanvasProps> = ({
  imagePath,
  title,
  className = "w-full h-auto"
}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);

  // Trạng thái bật/tắt từng ván in
  const [layers, setLayers] = useState({
    paper: true,
    yellow: true,
    red: true,
    green: true,
    black: true,
  });

  // Chế độ xem: 'positive' (bản in thuận trên giấy) hoặc 'negative' (ván khắc mộc âm bản scaleX(-1))
  const [viewMode, setViewMode] = useState<'positive' | 'negative'>('positive');
  const [luminanceThreshold, setLuminanceThreshold] = useState<number>(82);
  const [showThresholdControl, setShowThresholdControl] = useState<boolean>(false);

  // DataURL của từng lớp ván in sau khi tách bằng Canvas
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

  const toggleLayer = (key: 'yellow' | 'red' | 'green' | 'black') => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrintAll = () => {
    setLayers({ paper: true, yellow: true, red: true, green: true, black: true });
  };

  const handleResetLayers = () => {
    setLayers({ paper: true, yellow: false, red: false, green: false, black: false });
  };

  useEffect(() => {
    let isCancelled = false;
    setIsProcessing(true);
    setLoadError(false);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imagePath;

    img.onerror = () => {
      if (!isCancelled) {
        setIsProcessing(false);
        setLoadError(true);
      }
    };

    img.onload = () => {
      if (isCancelled) return;

      const naturalW = img.naturalWidth || 540;
      const naturalH = img.naturalHeight || 405;
      setAspectRatio(naturalW / naturalH);

      // Độ phân giải xử lý tiêu chuẩn 540px
      const targetWidth = 540;
      const targetHeight = Math.max(100, Math.round((naturalH / naturalW) * targetWidth));

      const srcCanvas = document.createElement('canvas');
      srcCanvas.width = targetWidth;
      srcCanvas.height = targetHeight;
      const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });
      if (!srcCtx) {
        setLoadError(true);
        setIsProcessing(false);
        return;
      }

      srcCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
      let srcImageData: ImageData;
      try {
        srcImageData = srcCtx.getImageData(0, 0, targetWidth, targetHeight);
      } catch (err) {
        setLoadError(true);
        setIsProcessing(false);
        return;
      }

      const { data } = srcImageData;
      const totalPixels = targetWidth * targetHeight;

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
      // - Nền giấy điệp ngà: #F4EBDD (244, 235, 221)

      for (let i = 0; i < totalPixels * 4; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a < 20) continue;

        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const { h, s, l } = rgbToHsl(r, g, b);

        // 1. Phân loại Ván Nét Than Đen
        const isBlack = lum < 42 || (lum < luminanceThreshold && s < 0.24);

        // 2. Phân loại Ván Đỏ Son
        const isRed = !isBlack && (h <= 24 || h >= 338) && s >= 0.18 && lum >= 55 && lum <= 200;

        // 3. Phân loại Ván Vàng Hoè
        const isYellow = !isBlack && !isRed && (h >= 25 && h <= 68) && s >= 0.22 && lum >= 80 && lum <= 215;

        // 4. Phân loại Ván Xanh Chàm
        const isGreen = !isBlack && !isRed && !isYellow && (h >= 80 && h <= 195) && s >= 0.12 && lum >= 40 && lum <= 195;

        // Ghi vào Lớp 0: Nền Giấy Điệp
        if (isBlack || isRed || isYellow || isGreen) {
          paperBuffer[i] = Math.round(r * 0.12 + 244 * 0.88);
          paperBuffer[i + 1] = Math.round(g * 0.12 + 235 * 0.88);
          paperBuffer[i + 2] = Math.round(b * 0.12 + 221 * 0.88);
          paperBuffer[i + 3] = 255;
        } else {
          paperBuffer[i] = r;
          paperBuffer[i + 1] = g;
          paperBuffer[i + 2] = b;
          paperBuffer[i + 3] = a;
        }

        // Ghi vào Lớp 1: Ván Vàng Hoè (#D5A33B)
        if (isYellow) {
          const alpha = Math.min(255, Math.max(140, Math.round(s * 255 * 1.3)));
          yellowBuffer[i] = 213;
          yellowBuffer[i + 1] = 163;
          yellowBuffer[i + 2] = 59;
          yellowBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 2: Ván Đỏ Son (#A9362B)
        if (isRed) {
          const alpha = Math.min(255, Math.max(150, Math.round(s * 255 * 1.3)));
          redBuffer[i] = 169;
          redBuffer[i + 1] = 54;
          redBuffer[i + 2] = 43;
          redBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 3: Ván Xanh Chàm (#355A50)
        if (isGreen) {
          const alpha = Math.min(255, Math.max(150, Math.round(s * 255 * 1.3)));
          greenBuffer[i] = 53;
          greenBuffer[i + 1] = 90;
          greenBuffer[i + 2] = 80;
          greenBuffer[i + 3] = alpha;
        }

        // Ghi vào Lớp 4: Ván Nét Than Đen (#211E1B)
        if (isBlack) {
          const alpha = Math.min(255, Math.max(160, Math.round((1 - lum / (luminanceThreshold + 20)) * 255)));
          blackBuffer[i] = 33;
          blackBuffer[i + 1] = 30;
          blackBuffer[i + 2] = 27;
          blackBuffer[i + 3] = alpha;
        }
      }

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
  }, [imagePath, luminanceThreshold]);

  // Nếu tải ảnh thất bại hoặc không có ảnh bản quét hợp lệ: Hiển thị placeholder theo yêu cầu
  if (loadError) {
    return (
      <div className="p-8 text-center bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-300 dark:border-stone-800 space-y-3 min-h-[300px] flex flex-col items-center justify-center">
        <ImageOff className="w-10 h-10 text-stone-400 mx-auto" />
        <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
          Đang cập nhật tư liệu ảnh hiện vật mộc bản cổ
        </div>
        <p className="text-xs text-stone-500 max-w-sm">
          Chưa có ảnh chụp phiến gỗ thị hoặc bản quét tương thích cho tác phẩm này. Ban quản lý bảo tàng số đang sưu tầm từ các nghệ nhân.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* THANH ĐIỀU HƯỚNG BẬT/TẮT VÁN KHẮC & CHUYỂN BẢN ÂM/DƯƠNG */}
      <div className="space-y-2 pb-1 border-b border-stone-200 dark:border-stone-800 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center gap-1 font-semibold text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs">
            <Layers className="w-3.5 h-3.5 text-[#A9362B] shrink-0" />
            <span>Phân tích ván in:</span>
          </div>

          {/* CHUYỂN ĐỔI CHẾ ĐỘ: BẢN IN GIẤY (DƯƠNG) VS VÁN GỖ (ÂM BẢN scaleX(-1)) */}
          <div className="flex items-center bg-stone-200/80 dark:bg-stone-800 p-0.5 rounded-md border border-stone-300 dark:border-stone-700 text-[10px] sm:text-[11px]">
            <button
              onClick={() => setViewMode('positive')}
              className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                viewMode === 'positive'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
              title="Bản in trên giấy Dó thuận chiều"
            >
              Bản in (Dương)
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
              Ván khắc (Âm bản)
            </button>
          </div>
        </div>

        {/* NÚT THAO TÁC CÁC VÁN IN */}
        <div className="flex items-center justify-between gap-1 flex-wrap">
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={() => toggleLayer('yellow')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                layers.yellow
                  ? 'bg-[#D5A33B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700'
              }`}
            >
              Vàng {layers.yellow ? '✓' : '+'}
            </button>
            <button
              onClick={() => toggleLayer('red')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                layers.red
                  ? 'bg-[#A9362B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700'
              }`}
            >
              Đỏ {layers.red ? '✓' : '+'}
            </button>
            <button
              onClick={() => toggleLayer('green')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                layers.green
                  ? 'bg-[#355A50] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700'
              }`}
            >
              Xanh {layers.green ? '✓' : '+'}
            </button>
            <button
              onClick={() => toggleLayer('black')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer ${
                layers.black
                  ? 'bg-[#211E1B] text-white shadow-xs'
                  : 'bg-white/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700'
              }`}
            >
              Nét than {layers.black ? '✓' : '+'}
            </button>
          </div>

          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={handlePrintAll}
              className="text-[10px] font-semibold text-[#355A50] hover:underline"
            >
              Hiện hết
            </button>
            <button
              onClick={handleResetLayers}
              className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
              title="Đặt lại"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
            <button
              onClick={() => setShowThresholdControl(!showThresholdControl)}
              className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 border border-transparent hover:border-stone-300 rounded"
              title="Ngưỡng nét đen"
            >
              <SlidersHorizontal className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* THANH ĐIỀU CHỈNH NGƯỠNG LUMINANCE */}
      {showThresholdControl && (
        <div className="p-2 bg-white dark:bg-stone-900 rounded-lg border border-stone-300 dark:border-stone-700 space-y-1 text-xs animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-stone-700 dark:text-stone-300 text-[10px]">
              Ngưỡng tách nét than (Luminance): {luminanceThreshold}
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
        </div>
      )}

      {/* KHUNG HIỂN THỊ CÁC LỚP VÁN IN CHỒNG LÊN NHAU */}
      <div
        className={`relative w-full rounded-lg overflow-hidden border-2 border-stone-800/30 dark:border-stone-300/30 shadow-md ${
          viewMode === 'negative' ? 'bg-[#5c4033]/20 dark:bg-stone-950' : 'bg-[#F4EBDD]'
        } flex items-center justify-center min-h-[260px] sm:min-h-[340px] max-h-[460px]`}
        style={{ aspectRatio: `${aspectRatio}` }}
      >
        {isProcessing && (
          <div className="absolute inset-0 bg-[#F4EBDD]/90 dark:bg-stone-900/90 z-20 flex flex-col items-center justify-center gap-2 text-stone-700 dark:text-stone-300 text-xs">
            <Loader2 className="w-6 h-6 animate-spin text-[#A9362B]" />
            <span>Đang bóc tách các ván mộc bản từ bản quét thật...</span>
          </div>
        )}

        {/* LỚP ẢNH TÁCH MỘC BẢN: transform: scaleX(-1) KHI Ở CHẾ ĐỘ ÂM BẢN (KHÔNG LẬT CHỮ KHÁC) */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-500"
          style={{ transform: viewMode === 'negative' ? 'scaleX(-1)' : 'none' }}
        >
          {layerUrls.paper && (
            <img
              src={layerUrls.paper}
              alt="Nền giấy điệp"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                layers.paper ? 'opacity-100' : 'opacity-20'
              }`}
            />
          )}

          {layerUrls.yellow && (
            <img
              src={layerUrls.yellow}
              alt="Ván in vàng hòe"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.yellow ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

          {layerUrls.red && (
            <img
              src={layerUrls.red}
              alt="Ván in đỏ son"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.red ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

          {layerUrls.green && (
            <img
              src={layerUrls.green}
              alt="Ván in xanh chàm"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 pointer-events-none ${
                layers.green ? 'opacity-95' : 'opacity-0'
              }`}
            />
          )}

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

        {/* HUY HIỆU BẢN ÂM (NẰM TRÊN LAYER RIÊNG, KHÔNG BỊ LẬT CHỮ) */}
        {viewMode === 'negative' && (
          <div className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded bg-stone-900/90 backdrop-blur-xs text-white text-xs font-medium shadow-sm flex items-center gap-1.5 border border-stone-700 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5A33B]" />
            <span>Ván khắc âm bản (Chữ & hình khắc đảo ngược)</span>
          </div>
        )}

        {/* GHI CHÚ BẮT BUỘC THEO QUY ĐỊNH BẢO TÀNG (KHÔNG BỊ LẬT) */}
        <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm text-xs text-stone-200 pointer-events-none z-10">
          Mô phỏng từ bản quét, không phải ván in thật
        </div>
      </div>
    </div>
  );
};
