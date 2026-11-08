/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TraditionalAudioPlayer } from './AudioPlayer.tsx';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleDarkMode, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Làng tranh', id: 'history' },
    { label: 'Nghệ thuật', id: 'craft-process' },
    { label: 'Bộ sưu tập', id: 'gallery' },
    { label: 'Bảng màu', id: 'color-palette' },
    { label: 'Ngôn ngữ', id: 'artistic-language' },
    { label: 'Đời sống', id: 'modern-life' },
    { label: 'Trò chơi', id: 'interactive-game' },
    { label: 'Bảo tồn', id: 'conservation' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4EBDD]/95 dark:bg-[#211E1B]/95 backdrop-blur-md border-b border-stone-300/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-[15px] sm:text-base md:text-lg font-bold font-serif-heritage tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:text-[#A9362B] dark:hover:text-[#E05344] transition-colors cursor-pointer text-left"
          aria-label="[SẮC ĐIỆP LÀNG HỒ] – Về trang chủ"
        >
          [SẮC ĐIỆP <span className="text-[#A9362B] dark:text-[#E05344]">LÀNG HỒ]</span>
        </button>

        {/* Zone 2: Single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-[#A9362B] dark:hover:text-[#E05344] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Audio + Theme Switcher + CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Nhạc ngũ cung dân gian */}
          <TraditionalAudioPlayer />

          {/* Chế độ Sáng / Tối */}
          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200/80 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            title={isDarkMode ? "Chuyển sang nền Giấy Ngà sáng" : "Chuyển sang nền Mực Nâu tối"}
            aria-label="Chuyển chế độ giao diện"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#D5A33B]" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Nút Khám phá */}
          <button
            onClick={() => handleLinkClick('gallery')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D5A33B]" />
            <span>Phòng tranh</span>
          </button>

          {/* Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-[#F4EBDD] dark:bg-[#211E1B] border-b border-stone-300 dark:border-stone-800 space-y-1 text-left">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 rounded"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('gallery')}
            className="w-full text-center mt-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#A9362B] rounded-lg shadow"
          >
            Vào phòng tranh
          </button>
        </div>
      )}
    </header>
  );
};
