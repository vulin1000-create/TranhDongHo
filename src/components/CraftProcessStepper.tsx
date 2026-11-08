/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { craftSteps } from '../data/dongHoData.ts';
import { WoodblockCanvasSimulator } from './WoodblockCanvasSimulator.tsx';
import { PenTool, Layers, Palette, Printer, Sun, ChevronRight, ChevronLeft, CheckCircle2, RotateCcw, Image as ImageIcon } from 'lucide-react';

export const CraftProcessStepper: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = craftSteps[activeStepIndex];

  // Trạng thái cho bộ in mộc bản giả lập
  const [simLayers, setSimLayers] = useState({
    paper: true,
    yellow: false,
    red: false,
    green: false,
    black: false,
  });

  const toggleLayer = (layer: 'yellow' | 'red' | 'green' | 'black') => {
    setSimLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const resetLayers = () => {
    setSimLayers({
      paper: true,
      yellow: false,
      red: false,
      green: false,
      black: false,
    });
  };

  const printAllLayers = () => {
    setSimLayers({
      paper: true,
      yellow: true,
      red: true,
      green: true,
      black: true,
    });
  };

  const stepIcons = [Layers, PenTool, Palette, Printer, Sun];

  return (
    <section id="craft-process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] dark:bg-[#211E1B] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Printer className="w-4 h-4" />
            <span>Khu vực 3 · Kỹ nghệ & Quy trình chế tác mộc bản</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Từ bàn tay nghệ nhân đến tác phẩm dân gian
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Khám phá 5 công đoạn thủ công công phu được gìn giữ nguyên vẹn qua nhiều thế hệ: từ việc quét lớp vỏ điệp lóng lánh đến đường đục ve trên thớ gỗ thị và quy tắc in màu dằn tay độc nhất vô nhị.
          </p>
        </div>

        {/* THANH TIẾN TRÌNH 5 CÔNG ĐOẠN */}
        <div className="relative">
          <div className="grid grid-cols-5 gap-1 sm:gap-4">
            {craftSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isCurrent = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center text-center p-1.5 sm:p-4 rounded-lg sm:rounded-xl transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white dark:bg-[#30251F] woodcut-border shadow-md scale-[1.02]'
                      : 'hover:bg-white/60 dark:hover:bg-[#30251F]/60 opacity-80'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-colors shrink-0 ${
                      isCurrent
                        ? 'bg-[#A9362B] text-white shadow'
                        : isPassed
                        ? 'bg-[#355A50] text-white'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[8px] sm:text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Bước 0{step.step}
                  </span>
                  <span className="text-[10px] sm:text-sm font-serif-heritage font-bold text-stone-900 dark:text-stone-100 line-clamp-1 mt-0.5">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* NỘI DUNG CHI TIẾT CỦA CÔNG ĐOẠN HIỆN TẠI */}
        <div className="bg-white dark:bg-[#30251F] rounded-xl woodcut-border p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* THÔNG TIN CHI TIẾT CÔNG ĐOẠN (7 CỘT) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A9362B] dark:text-[#E05344] uppercase tracking-wider mb-1">
                  <span>Công đoạn {currentStep.step} / 05</span>
                  <span aria-hidden="true">·</span>
                  <span>Kỹ nghệ mộc bản truyền thống</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                  {currentStep.title}
                </h3>
                <p className="text-sm font-serif-heritage italic text-[#D5A33B] dark:text-[#E5B246] mt-1">
                  {currentStep.subtitle}
                </p>
              </div>

              <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Quy trình thao tác & giải thích chuyên sâu:
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {currentStep.detailedProcess}
                </p>
              </div>

              {/* DỤNG CỤ VÀ NGUYÊN LIỆU */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-lg border border-stone-200 dark:border-stone-800">
                  <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide mb-2">
                    Dụng cụ chế tác chuyên dụng:
                  </div>
                  <ul className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                    {currentStep.tools.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A9362B]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-stone-50 dark:bg-stone-900/60 rounded-lg border border-stone-200 dark:border-stone-800">
                  <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide mb-2">
                    Nguyên liệu tự nhiên truyền thống:
                  </div>
                  <ul className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                    {currentStep.materials.map((m) => (
                      <li key={m} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#355A50]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BÍ QUYẾT NGHỆ NHÂN */}
              <div className="p-3.5 border-l-3 border-[#355A50] bg-[#355A50]/10 rounded-r text-xs text-stone-800 dark:text-stone-200 italic">
                <strong>Kinh nghiệm dân gian:</strong> {currentStep.folkInsight}
              </div>

              {/* NÚT ĐIỀU HƯỚNG BƯỚC */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
                <button
                  onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                  disabled={activeStepIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border border-stone-300 dark:border-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Công đoạn trước</span>
                </button>

                <span className="text-xs text-stone-500 dark:text-stone-400 tabular-nums font-semibold">
                  {activeStepIndex + 1} / {craftSteps.length}
                </span>

                <button
                  onClick={() => setActiveStepIndex(Math.min(craftSteps.length - 1, activeStepIndex + 1))}
                  disabled={activeStepIndex === craftSteps.length - 1}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Công đoạn kế tiếp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* HÌNH ẢNH THỰC TẾ & BỘ IN THỬ NGHIỆM (5 CỘT) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Ảnh thực tế minh họa từng công đoạn */}
              <div className="rounded-xl overflow-hidden woodcut-border bg-stone-900 group text-left">
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src={currentStep.imagePath}
                    alt={currentStep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/paintings/che_tac_dong_ho.jpg';
                    }}
                  />
                </div>
                <div className="p-3 bg-stone-100 dark:bg-stone-800/90 text-[11px] text-stone-600 dark:text-stone-300 space-y-1">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#A9362B]" />
                    <span>{currentStep.imageCaption}</span>
                  </div>
                  <div className="text-[10px] text-stone-500 dark:text-stone-400 italic">
                    Nguồn tư liệu: {currentStep.imageCredit}
                  </div>
                </div>
              </div>

              {/* BỘ GIẢ LẬP IN MỘC BẢN TUẦN TỰ (Interactive Woodblock Layer Simulator) */}
              <div className="p-4 bg-[#F4EBDD] dark:bg-[#1E1B19] rounded-xl border border-stone-300 dark:border-stone-700 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A9362B]" />
                    <span>Trải nghiệm in dằn mộc bản tuần tự</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={printAllLayers}
                      className="text-[11px] font-semibold text-[#355A50] hover:underline"
                    >
                      In toàn bộ
                    </button>
                    <button
                      onClick={resetLayers}
                      className="p-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
                      title="Làm lại từ tờ giấy điệp trắng"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Quy tắc mộc bản truyền thống: <em>In các ván màu trước, ván nét than đen in sau cùng để định hình đường nét tác phẩm.</em>
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#A9362B] dark:text-[#E05344]">
                    * Thứ tự in có thể khác nhau tùy xưởng
                  </p>
                </div>

                {/* Canvas in mộc bản tách lớp từ ảnh quét thật */}
                <WoodblockCanvasSimulator layers={simLayers} />

                {/* Các nút ván màu */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pt-1">
                  <button
                    onClick={() => toggleLayer('yellow')}
                    className={`px-2 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                      simLayers.yellow
                        ? 'bg-[#D5A33B] text-white border-[#D5A33B] shadow-sm'
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    Ván Vàng hòe {simLayers.yellow ? '✓' : '+'}
                  </button>

                  <button
                    onClick={() => toggleLayer('red')}
                    className={`px-2 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                      simLayers.red
                        ? 'bg-[#A9362B] text-white border-[#A9362B] shadow-sm'
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    Ván Đỏ son {simLayers.red ? '✓' : '+'}
                  </button>

                  <button
                    onClick={() => toggleLayer('green')}
                    className={`px-2 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                      simLayers.green
                        ? 'bg-[#355A50] text-white border-[#355A50] shadow-sm'
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    Ván Xanh chàm {simLayers.green ? '✓' : '+'}
                  </button>

                  <button
                    onClick={() => toggleLayer('black')}
                    className={`px-2 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                      simLayers.black
                        ? 'bg-[#211E1B] text-white border-[#211E1B] shadow-sm'
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    Ván Nét đen {simLayers.black ? '✓' : '+'}
                  </button>
                </div>

                {/* Chú thích nguồn quy trình in & tập quán xưởng */}
                <div className="pt-2 border-t border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed space-y-1">
                  <div>
                    <strong>Quy tắc mộc bản truyền thống:</strong> Cục Di sản Văn hóa & Bảo tàng Mỹ thuật Việt Nam ghi nhận quy tắc cốt lõi: <em>"In màu trước, in nét sau cùng"</em>.
                  </div>
                  <div className="text-[#A9362B] dark:text-[#E05344] font-medium">
                    * Thứ tự in có thể khác nhau tùy xưởng: Trình tự giữa các ván màu (vàng, đỏ, xanh) linh hoạt theo từng tác phẩm và thói quen xưởng khắc, chưa có tài liệu xác minh thứ tự màu cố định duy nhất cho mọi xưởng Đông Hồ.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
