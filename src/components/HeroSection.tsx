/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Sparkles, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onExploreGallery: () => void;
  onExploreVillage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreGallery, onExploreVillage }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Nền giấy điệp ngà họa tiết hạt xà cừ */}
      <div className="absolute inset-0 paper-diep-bg pointer-events-none -z-10" />

      {/* Hoa văn góc trang trí mộc bản truyền thống */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t-2 border-l-2 border-[#A9362B]/35 pointer-events-none hidden md:block" />
      <div className="absolute top-24 right-6 w-16 h-16 border-t-2 border-r-2 border-[#A9362B]/35 pointer-events-none hidden md:block" />
      <div className="absolute bottom-12 left-6 w-16 h-16 border-b-2 border-l-2 border-[#A9362B]/35 pointer-events-none hidden md:block" />
      <div className="absolute bottom-12 right-6 w-16 h-16 border-b-2 border-r-2 border-[#A9362B]/35 pointer-events-none hidden md:block" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* CỘT NỘI DUNG (7 CỘT) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Metadata chữ thanh lịch */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-600 dark:text-stone-400">
            <span>Bảo tàng số tương tác</span>
            <span aria-hidden="true">·</span>
            <span>Di sản phi vật thể Quốc gia</span>
            <span aria-hidden="true">·</span>
            <span>Song Hồ, Bắc Ninh</span>
          </div>

          {/* Tiêu đề chính */}
          <div className="space-y-2">
            <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold tracking-tight text-stone-900 dark:text-stone-100 font-serif-heritage leading-[1.12]">
              [SẮC ĐIỆP <br />
              <span className="text-[#A9362B] dark:text-[#E05344]">LÀNG HỒ]</span>
            </h1>
            <p className="text-[clamp(1.4rem,3vw,1.9rem)] font-serif-heritage italic text-[#D5A33B] dark:text-[#E5B246]">
              Chạm vào hồn tranh Việt
            </p>
          </div>

          {/* Đoạn giới thiệu chính xác theo yêu cầu */}
          <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-[1.75] max-w-[65ch]">
            Khám phá thế giới tranh dân gian Đông Hồ – nơi những nét khắc mộc mạc, sắc màu tự nhiên và câu chuyện đời sống Việt Nam được lưu giữ qua từng bản in.
          </p>

          {/* Trích dẫn câu thơ bất hủ của thi sĩ Hoàng Cầm */}
          <div className="py-3 px-4 border-l-2 border-[#A9362B] bg-[#A9362B]/5 dark:bg-[#A9362B]/10 rounded-r-md">
            <p className="text-sm italic font-serif-heritage text-stone-800 dark:text-stone-200">
              "Tranh Đông Hồ gà lợn nét tươi trong <br />
              Màu dân tộc sáng bừng trên giấy điệp"
            </p>
            <span className="block text-xs text-stone-500 dark:text-stone-400 mt-1">
              — Thi sĩ Hoàng Cầm (Bên kia sông Đuống, 1948)
            </span>
          </div>

          {/* HAI NÚT HÀNH ĐỘNG THEO YÊU CẦU */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreGallery}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-[#A9362B] hover:bg-[#8D2D24] dark:bg-[#C2372B] dark:hover:bg-[#A82A20] rounded-lg shadow-md transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#D5A33B]" />
              <span>Khám phá bộ sưu tập</span>
            </button>

            <button
              onClick={onExploreVillage}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-stone-800 dark:text-stone-200 bg-white/80 dark:bg-[#30251F] hover:bg-white dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg shadow-sm transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 text-[#355A50]" />
              <span>Hành trình làng tranh</span>
            </button>
          </div>

          {/* Dữ liệu di sản bảo tàng */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-stone-300/80 dark:border-stone-800">
            <div>
              <div className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100 tabular-nums">500+</div>
              <div className="text-xs text-stone-600 dark:text-stone-400">Năm lịch sử mộc bản</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-serif-heritage text-[#A9362B] dark:text-[#E05344] tabular-nums">100%</div>
              <div className="text-xs text-stone-600 dark:text-stone-400">Màu sắc thiên nhiên</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-serif-heritage text-[#355A50] dark:text-[#457266] tabular-nums">UNESCO</div>
              <div className="text-xs text-stone-600 dark:text-stone-400">Hồ sơ bảo vệ khẩn cấp</div>
            </div>
          </div>
        </div>

        {/* CỘT HÌNH ẢNH TRƯNG BÀY TRUNG TÂM (5 CỘT) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md">
            {/* Khung tranh mộc bản cổ */}
            <div className="p-3.5 sm:p-4 bg-[#FAF6EE] dark:bg-[#2A231F] rounded-xl border border-[#3D2E24]/20 dark:border-[#E8DEC9]/15 shadow-xl">
              <div className="relative overflow-hidden rounded-lg bg-[#FAF7F0] dark:bg-[#1E1B19] aspect-[4/3] flex items-center justify-center">
                <img
                  src="/paintings/ga_dai_cat.jpg"
                  alt="Tác phẩm mộc bản Gà Đại Cát nguyên bản làng tranh Đông Hồ"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/paintings/dam_cuoi_chuot.jpg';
                  }}
                />
                <div className="absolute bottom-2.5 right-2.5 px-3 py-1 bg-black/75 backdrop-blur-sm rounded-md text-xs sm:text-sm text-white font-medium">
                  Hiện vật: Gà Đại Cát (Đông Hồ)
                </div>
              </div>
              <div className="mt-3 px-1 flex items-center justify-between text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                <span className="font-serif-heritage italic">Bản in mộc bản trên giấy điệp xà cừ</span>
                <span className="font-semibold text-stone-700 dark:text-stone-300">Bắc Ninh, Việt Nam</span>
              </div>
            </div>

            {/* Chi tiết phụ trang trí */}
            <div className="absolute -bottom-4 -left-4 px-3.5 py-1.5 bg-[#FFF9F0] dark:bg-[#30251F] border border-stone-300 dark:border-stone-700 rounded-md shadow-md text-xs font-serif-heritage text-[#A9362B] dark:text-[#E05344] hidden sm:block">
              Nét khắc gỗ truyền thống
            </div>
          </div>
        </div>
      </div>

      {/* CHỈ BÁO CUỘN TRANG */}
      <div 
        onClick={onExploreVillage}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors cursor-pointer"
        title="Cuộn trang để khám phá"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Khám phá nội dung phía dưới</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#A9362B]" />
      </div>
    </section>
  );
};
