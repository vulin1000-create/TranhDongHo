/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { HistoryTimeline } from './components/HistoryTimeline.tsx';
import { CraftProcessStepper } from './components/CraftProcessStepper.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ColorPaletteGallery } from './components/ColorPaletteGallery.tsx';
import { ArtisticLanguageSection } from './components/ArtisticLanguageSection.tsx';
import { ModernLifeSection } from './components/ModernLifeSection.tsx';
import { HeritageGame } from './components/HeritageGame.tsx';
import { ConservationSection } from './components/ConservationSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col paper-diep-bg text-stone-900 dark:text-stone-100 transition-colors duration-300">
      {/* THANH ĐIỀU HƯỚNG CỐ ĐỊNH */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigate={handleNavigate}
      />

      {/* 10 KHU VỰC TRIỂN LÃM BẢO TÀNG SỐ */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <HeroSection
          onExploreGallery={() => handleNavigate('gallery')}
          onExploreVillage={() => handleNavigate('history')}
        />

        {/* 2. KHÔNG GIAN LÀNG TRANH ĐÔNG HỒ */}
        <HistoryTimeline />

        {/* 3. NGHỆ THUẬT LÀM TRANH ĐÔNG HỒ */}
        <CraftProcessStepper />

        {/* 4. BỘ SƯU TẬP TRANH ĐÔNG HỒ – KHU VỰC TRỌNG TÂM */}
        <GallerySection />

        {/* 5. MÀU SẮC VÀ CHẤT LIỆU */}
        <ColorPaletteGallery />

        {/* 6. NGÔN NGỮ NGHỆ THUẬT VÀ Ý NGHĨA TRANH */}
        <ArtisticLanguageSection />

        {/* 7. TRANH ĐÔNG HỒ TRONG ĐỜI SỐNG HIỆN ĐẠI */}
        <ModernLifeSection />

        {/* 8. KHU VỰC TRẢI NGHIỆM TƯƠNG TÁC (GHÉP TRANH & GIẢI MÃ ĐỐ VUI) */}
        <HeritageGame />

        {/* 9. GÌN GIỮ DI SẢN */}
        <ConservationSection />
      </main>

      {/* 10. FOOTER */}
      <Footer
        onScrollToTop={handleScrollToTop}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
