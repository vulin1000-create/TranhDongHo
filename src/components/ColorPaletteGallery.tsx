/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { colorPigments, ColorPigment } from '../data/dongHoData.ts';
import { Palette, Sparkles, Leaf, Info, FileText } from 'lucide-react';

export const ColorPaletteGallery: React.FC = () => {
  const [selectedColorId, setSelectedColorId] = useState<string>(colorPigments[0].id);
  const selectedColor: ColorPigment = colorPigments.find(c => c.id === selectedColorId) || colorPigments[0];

  return (
    <section id="color-palette" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0] dark:bg-[#1E1B19] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 5 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Palette className="w-4 h-4" />
            <span>Khu vực 5 · Chất liệu giấy điệp & Ngũ sắc thảo mộc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Sắc màu từ thiên nhiên
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-[65ch] mx-auto">
            Màu vẽ Đông Hồ không dùng phẩm hóa học công nghiệp mà chưng cất 100% từ cỏ cây, hoa quả, khoáng thạch đất mẹ và vỏ sò điệp biển khơi — mộc mạc, bền bỉ qua năm tháng.
          </p>
        </div>

        {/* PHẦN GIỚI THIỆU CHẤT LIỆU GIẤY DÓ & GIẤY ĐIỆP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="p-6 bg-white dark:bg-[#2A231F] rounded-xl woodcut-border text-left space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#A9362B] dark:text-[#E05344]">
              <FileText className="w-4 h-4" />
              <span>Chất liệu Giấy Dó truyền thống</span>
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Giấy dó được làm thủ công từ vỏ cây dó sống trên vùng đồi núi cao, do các làng nghề Phong Khê, Đống Cao (Bắc Ninh) và Yên Thái (Hà Nội) cung cấp. Giấy có đặc tính nhẹ xốp, dai bền, không bị ố vàng, không mối mọt và có độ hút ẩm tự nhiên cực tốt, giúp màu ngấm sâu vào từng thớ sợi xen-lu-lô.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#2A231F] rounded-xl woodcut-border text-left space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#D5A33B]">
              <Sparkles className="w-4 h-4" />
              <span>Giấy Điệp xà cừ óng ánh</span>
            </div>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              Vỏ con sò điệp biển vùng Quảng Ninh, Hải Phòng được nghiền mịn thành bột phấn trắng, hòa cùng hồ nếp quấy chín. Dùng chổi lá thông quét một chiều lên bề mặt giấy dó. Những vệt chổi thông mảnh mai để lại các tinh thể xà cừ li ti, khi có ánh sáng chiếu vào sẽ lấp lánh như dát bạc.
            </p>
          </div>
        </div>

        {/* 5 Ô MÀU NGHỆ THUẬT LỚN (Color Swatches) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {colorPigments.map((color) => {
            const isSelected = color.id === selectedColorId;
            return (
              <button
                key={color.id}
                onClick={() => setSelectedColorId(color.id)}
                className={`group relative p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'ring-3 ring-[#A9362B] shadow-xl scale-[1.03] bg-white dark:bg-[#30251F]'
                    : 'bg-white/90 dark:bg-[#2A231F] hover:bg-white dark:hover:bg-[#30251F] border border-stone-300 dark:border-stone-700 hover:border-stone-400'
                }`}
              >
                {/* Khối màu trực quan lớn */}
                <div
                  className="w-full aspect-[4/3] rounded-lg shadow-inner mb-3 relative overflow-hidden border border-black/10"
                  style={{ backgroundColor: color.hex }}
                >
                  {color.id === 'giay-nga' && (
                    <div className="absolute inset-0 diep-shimmer opacity-90" />
                  )}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-white shadow-md" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="text-sm font-bold font-serif-heritage text-stone-900 dark:text-stone-100 group-hover:text-[#A9362B] transition-colors">
                    {color.name}
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-400 line-clamp-1">
                    {color.source}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CHI TIẾT MÀU ĐƯỢC CHỌN */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* KHỐI MÀU LỚN & VÂN TRANH (4 CỘT) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div
                className="w-full max-w-[260px] aspect-square rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden border-4 border-stone-200 dark:border-stone-700"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {selectedColor.id === 'giay-nga' && (
                  <div className="absolute inset-0 diep-shimmer opacity-95" />
                )}
                <div className="relative z-10 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs font-serif-heritage">
                  {selectedColor.hex}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                  {selectedColor.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Nguồn tự nhiên: {selectedColor.source}
                </p>
              </div>
            </div>

            {/* BẢNG PHÂN TÍCH NGUỒN GỐC & Ý NGHĨA (8 CỘT) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A9362B] dark:text-[#E05344] uppercase tracking-wide">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>Nguồn gốc khai thác</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedColor.sourceDetail}
                  </p>
                </div>

                <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D5A33B] dark:text-[#E5B246] uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ý nghĩa biểu tượng văn hóa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedColor.symbolism}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                  Phương pháp bào chế truyền thống:
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedColor.preparation}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                  Vị trí thể hiện tiêu biểu trong tranh:
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedColor.artworkUsage}
                </p>
              </div>

              <div className="p-3 bg-stone-100 dark:bg-stone-800/70 rounded-lg border border-stone-200 dark:border-stone-700 flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Ghi chú nghiên cứu:</strong> {selectedColor.historicalNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
