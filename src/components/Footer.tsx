/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  return (
    <footer className="bg-[#E8DEC9] dark:bg-[#151312] border-t border-stone-300 dark:border-stone-800 text-stone-800 dark:text-stone-300 transition-colors pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* LOGO BẢO TÀNG VÀ THÔNG ĐIỆP CHỦ ĐẠO */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-8 border-b border-stone-300 dark:border-stone-800">
          <div className="text-2xl sm:text-3xl font-extrabold font-serif-heritage text-[#A9362B] dark:text-[#E05344] tracking-tight">
            [SẮC ĐIỆP LÀNG HỒ]
          </div>
          <div className="text-lg sm:text-xl font-serif-heritage italic text-[#D5A33B] dark:text-[#E5B246]">
            "Chạm vào hồn tranh Việt"
          </div>
          <p className="text-sm font-serif-heritage italic text-stone-700 dark:text-stone-300 max-w-xl mx-auto pt-1">
            "Giữ gìn một bức tranh là giữ gìn một phần hồn cốt văn hóa Việt Nam."
          </p>
        </div>

        {/* CẤU TRÚC ĐIỀU HƯỚNG VÀ TƯ LIỆU GHI CÔNG */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm leading-relaxed text-left">
          {/* Cột 1: Giới thiệu bảo tàng */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-base font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
              Về Không Gian Di Sản [SẮC ĐIỆP LÀNG HỒ]
            </div>
            <p className="text-stone-700 dark:text-stone-300 max-w-md">
              Không gian triển lãm số lưu giữ và tôn vinh dòng tranh mộc bản truyền thống của làng Mái (phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh). Dự án phục vụ mục đích giáo dục di sản phi lợi nhuận cho học sinh, giáo viên và cộng đồng người yêu mỹ thuật dân gian Việt Nam.
            </p>
            <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-[#355A50]" />
              <span>100% hình ảnh tranh Đông Hồ thật có chứng thực nguồn gốc lưu trữ.</span>
            </div>
          </div>

          {/* Cột 2: Điều hướng nhanh các khu vực */}
          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-xs">
              Khu vực bảo tàng
            </div>
            <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  01. Cổng vào bảo tàng
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  02. Không gian làng tranh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('craft-process')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  03. Nghệ thuật làm tranh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  04. Bộ sưu tập tác phẩm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('color-palette')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  05. Sắc màu thiên nhiên
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artistic-language')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  06. Ngôn ngữ nghệ thuật
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('modern-life')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  07. Di sản thời đại
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('interactive-game')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  08. Ghép tranh & Đố vui
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('conservation')} className="hover:text-[#A9362B] transition-colors cursor-pointer">
                  09. Gìn giữ di sản
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Nguồn tư liệu & Ghi công bản quyền */}
          <div className="space-y-2">
            <div className="font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider text-xs">
              Nguồn tư liệu thẩm định
            </div>
            <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
              <li>
                <a
                  href="https://dsvh.gov.vn/tranh-dan-gian-dong-ho-3151"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A9362B] flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Cục Di sản Văn hóa Việt Nam</span>
                </a>
              </li>
              <li>
                <a
                  href="https://disan.vicast.org.vn/pages/di-san/0/124/Lang-nghe-truyen-thong-tranh-Dong-Ho.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A9362B] flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Cơ sở dữ liệu VICAS</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vnfam.vn"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A9362B] flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Bảo tàng Mỹ thuật Việt Nam</span>
                </a>
              </li>
              <li>
                <span className="text-xs text-stone-500">
                  Ảnh hiện vật: Wikimedia Commons (Public domain & CC-BY-SA 4.0 / CC0).
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* THANH BẢN QUYỀN VÀ NÚT QUAY LẠI ĐẦU TRANG */}
        <div className="pt-8 border-t border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 dark:text-stone-400">
          <div className="flex items-center gap-1.5">
            <span>[SẮC ĐIỆP LÀNG HỒ] © 2026 – Chạm vào hồn tranh Việt</span>
            <Heart className="w-3.5 h-3.5 text-[#A9362B] fill-[#A9362B]" />
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors shadow-sm cursor-pointer"
            title="Cuộn lại đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A9362B]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
