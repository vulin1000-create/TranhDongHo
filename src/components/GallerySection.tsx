/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { masterpieces, Artwork } from '../data/dongHoData.ts';
import { ArtworkWoodblockCanvas } from './ArtworkWoodblockCanvas.tsx';
import { Sparkles, Eye, X, ZoomIn, Search, ChevronLeft, ChevronRight, Layers, HeartHandshake, Compass, Info, ShieldCheck } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalArtwork, setActiveModalArtwork] = useState<Artwork | null>(null);
  const [modalViewMode, setModalViewMode] = useState<'photo' | 'vector'>('photo');

  // Hàm chuẩn hóa chuỗi tiếng Việt không dấu để tìm kiếm thuận tiện
  const normalizeVN = (str: string) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d").trim();

  // Lọc tác phẩm theo danh mục và tìm kiếm theo tên (hỗ trợ cả có dấu và không dấu)
  const filteredArtworks = masterpieces.filter(art => {
    const matchCategory = selectedCategory === 'all' || art.category === selectedCategory;
    if (!searchQuery.trim()) return matchCategory;

    const query = searchQuery.toLowerCase().trim();
    const queryNorm = normalizeVN(searchQuery);

    const matchSearch =
      art.title.toLowerCase().includes(query) ||
      normalizeVN(art.title).includes(queryNorm) ||
      art.hanNom.toLowerCase().includes(query) ||
      normalizeVN(art.hanNom).includes(queryNorm) ||
      art.summary.toLowerCase().includes(query) ||
      normalizeVN(art.summary).includes(queryNorm);

    return matchCategory && matchSearch;
  });

  // Hỗ trợ phím Escape và phím mũi tên Next/Prev khi mở Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalArtwork) return;

      if (e.key === 'Escape') {
        setActiveModalArtwork(null);
      } else if (e.key === 'ArrowRight') {
        handleNextArtwork();
      } else if (e.key === 'ArrowLeft') {
        handlePrevArtwork();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalArtwork, filteredArtworks]);

  const handleNextArtwork = () => {
    if (!activeModalArtwork) return;
    const currentIndex = filteredArtworks.findIndex(a => a.id === activeModalArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredArtworks.length;
    setActiveModalArtwork(filteredArtworks[nextIndex]);
    setModalViewMode('photo');
  };

  const handlePrevArtwork = () => {
    if (!activeModalArtwork) return;
    const currentIndex = filteredArtworks.findIndex(a => a.id === activeModalArtwork.id);
    const prevIndex = (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setActiveModalArtwork(filteredArtworks[prevIndex]);
    setModalViewMode('photo');
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] dark:bg-[#211E1B] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TIÊU ĐỀ KHU VỰC TRỌNG TÂM */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Sparkles className="w-4 h-4" />
            <span>Khu vực 4 · Phòng triển lãm trung tâm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            The Art Collection – Bộ Sưu Tập Tranh Dân Gian
          </h2>
          <p className="text-base font-serif-heritage italic text-[#D5A33B] dark:text-[#E5B246] max-w-[65ch] mx-auto leading-relaxed">
            "Mỗi bức tranh là một câu chuyện, mỗi đường nét là một lát cắt của đời sống và văn hóa Việt Nam."
          </p>
        </div>

        {/* THANH TÌM KIẾM & BỘ LỌC CHỦ ĐỀ */}
        <div className="space-y-4">
          {/* Thanh tìm kiếm theo tên tranh */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm tác phẩm (ví dụ: Đám Cưới Chuột, Đàn Lợn Âm Dương, Gà Đại Cát...)"
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full border border-stone-300 dark:border-stone-700 bg-white/90 dark:bg-[#30251F] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A9362B] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Bộ lọc 5 nhóm chủ đề */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: `Tất cả tác phẩm (${masterpieces.length})` },
              { id: 'sinh-hoat', label: '1. Sinh hoạt & Đời sống' },
              { id: 'chuc-tung', label: '2. Ước vọng & Chúc tụng' },
              { id: 'dong-vat', label: '3. Động vật & Thiên nhiên' },
              { id: 'cham-biem', label: '4. Châm biếm & Xã hội' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#A9362B] text-white shadow-md'
                      : 'bg-white/80 dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* LƯỚI TRIỂN LÃM EDITORIAL MASONRY GRID */}
        {filteredArtworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredArtworks.map((art) => (
              <article
                key={art.id}
                onClick={() => {
                  setActiveModalArtwork(art);
                  setModalViewMode('photo');
                }}
                className="group cursor-pointer bg-white dark:bg-[#2A231F] rounded-xl border border-stone-300/80 dark:border-stone-700/80 p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between motion-reduce:transform-none"
              >
                <div className="space-y-4">
                  {/* Khung tranh triển lãm với lớp passe-partout giấy ngà */}
                  <div className="p-3.5 sm:p-5 bg-[#FAF6EE] dark:bg-[#1E1B19] rounded-lg border border-[#3D2E24]/20 dark:border-[#E8DEC9]/15 shadow-[0_2px_8px_rgba(48,37,31,0.04)] group-hover:shadow-[0_4px_16px_rgba(48,37,31,0.08)] transition-shadow duration-300 flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center overflow-hidden rounded">
                      <img
                        src={art.realImagePath}
                        alt={`Tác phẩm tranh dân gian Đông Hồ: ${art.title}`}
                        className="w-full h-auto max-h-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/paintings/dam_cuoi_chuot.jpg';
                        }}
                      />
                    </div>
                  </div>

                  {/* Thẻ chú thích kiểu bảo tàng */}
                  <div className="space-y-2 text-left pt-1">
                    {/* Hàng 1: Nhóm chủ đề & Chữ Hán/Nôm */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#A9362B]/10 dark:bg-[#A9362B]/20 text-[#A9362B] dark:text-[#E05344] font-medium tracking-wide">
                        {art.categoryLabel}
                      </span>
                      <span className="font-serif-heritage text-sm font-semibold text-stone-600 dark:text-stone-300">
                        {art.hanNom}
                      </span>
                    </div>

                    {/* Hàng 2: Tên tác phẩm */}
                    <h3 className="text-lg sm:text-xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100 group-hover:text-[#A9362B] dark:group-hover:text-[#E05344] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    {/* Hàng 3: Một câu giới thiệu ngắn (tối thiểu 14px, leading 1.6-1.8) */}
                    <p className="text-sm text-stone-700 dark:text-stone-300 line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Chân thẻ: Nguồn ảnh & Nút mở chi tiết (chữ rõ ràng >= 14px) */}
                <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  <span className="truncate max-w-[190px] text-stone-600 dark:text-stone-400 text-xs">
                    {art.provenance.license}
                  </span>
                  <span className="text-xs font-semibold text-[#A9362B] dark:text-[#E05344] group-hover:underline flex items-center gap-1 shrink-0">
                    <span>Xem hiện vật</span>
                    <span>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
            <p className="text-base text-stone-600 dark:text-stone-300">
              Không tìm thấy tác phẩm phù hợp với từ khóa "<strong>{searchQuery}</strong>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs font-semibold text-[#A9362B] hover:underline"
            >
              Xem lại toàn bộ bộ sưu tập
            </button>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MODAL / LIGHTBOX TOÀN MÀN HÌNH CHI TIẾT TÁC PHẨM */}
      {/* ========================================================= */}
      {activeModalArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#FFF9F0] dark:bg-[#211E1B] rounded-2xl shadow-2xl border border-stone-300 dark:border-stone-700 max-h-[94vh] flex flex-col overflow-hidden text-stone-900 dark:text-stone-100">
            {/* Header Modal */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-white dark:bg-[#30251F]">
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A9362B] dark:text-[#E05344] truncate">
                  <span>{activeModalArtwork.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalArtwork.hanNom}</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100 truncate">
                  {activeModalArtwork.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Nút chuyển tác phẩm trước / sau */}
                <button
                  onClick={handlePrevArtwork}
                  className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title="Tác phẩm trước (Phím mũi tên trái ←)"
                  aria-label="Tác phẩm trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextArtwork}
                  className="p-2 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title="Tác phẩm kế tiếp (Phím mũi tên phải →)"
                  aria-label="Tác phẩm kế tiếp"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Nút đóng */}
                <button
                  onClick={() => setActiveModalArtwork(null)}
                  className="p-2 rounded-full text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ml-2"
                  title="Đóng (Phím Escape)"
                  aria-label="Đóng cửa sổ chi tiết"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Nội dung cuộn Modal */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* TRANH TRUNG TÂM (5 CỘT) */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Nút chuyển đổi giữa Ảnh tranh thật và Bản khắc mộc phân tích bằng Canvas */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs pb-1">
                    <span className="font-semibold text-stone-700 dark:text-stone-300 text-[11px] sm:text-xs">
                      Chế độ hiển thị:
                    </span>
                    <div className="flex rounded-md p-0.5 bg-stone-200 dark:bg-stone-800 text-[11px]">
                      <button
                        onClick={() => setModalViewMode('photo')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                          modalViewMode === 'photo'
                            ? 'bg-white dark:bg-[#30251F] text-stone-900 dark:text-stone-100 shadow-sm font-semibold'
                            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                        }`}
                      >
                        Ảnh tranh thật
                      </button>
                      <button
                        onClick={() => setModalViewMode('vector')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                          modalViewMode === 'vector'
                            ? 'bg-[#A9362B] text-white shadow-sm font-semibold'
                            : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                        }`}
                      >
                        Bản khắc mộc
                      </button>
                    </div>
                  </div>

                  {/* Vùng hiển thị tranh */}
                  <div className="p-2 sm:p-4 bg-white dark:bg-[#30251F] rounded-xl woodcut-border flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
                    {modalViewMode === 'photo' ? (
                      <div className="relative w-full flex flex-col items-center justify-center">
                        <img
                          src={activeModalArtwork.realImagePath}
                          alt={activeModalArtwork.title}
                          className="w-full h-auto max-h-[460px] object-contain rounded shadow-xs"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/paintings/dam_cuoi_chuot.jpg';
                          }}
                        />
                        <div className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 italic text-center">
                          Ảnh chụp hiện vật tranh in trên giấy dó quét điệp nguyên bản
                        </div>
                      </div>
                    ) : (
                      <ArtworkWoodblockCanvas
                        imagePath={activeModalArtwork.realImagePath}
                        title={activeModalArtwork.title}
                      />
                    )}
                  </div>

                  {/* THÔNG TIN GHI CÔNG BẢN QUYỀN & TƯ LIỆU THỰC TẾ (PROVENANCE) */}
                  <div className="p-3.5 bg-[#F4EBDD] dark:bg-[#1E1B19] rounded-lg border border-stone-300 dark:border-stone-700 text-xs space-y-1.5 text-left">
                    <div className="flex items-center gap-1.5 font-semibold text-[#A9362B] dark:text-[#E05344]">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Thông tin tư liệu & Ghi công bản quyền:</span>
                    </div>
                    <div>
                      <strong>Tác giả / Nghệ nhân:</strong> {activeModalArtwork.provenance.artist}
                    </div>
                    <div>
                      <strong>Giấy phép sử dụng:</strong> {activeModalArtwork.provenance.license}
                    </div>
                    <div>
                      <strong>Nguồn hiện vật:</strong> {activeModalArtwork.provenance.credit}
                    </div>
                    {activeModalArtwork.provenance.sourceUrl && (
                      <div className="pt-0.5">
                        <a
                          href={activeModalArtwork.provenance.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#355A50] hover:underline"
                        >
                          Xem hồ sơ tư liệu gốc tại Wikimedia Commons ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* THUYẾT MINH NGHỆ THUẬT & Ý NGHĨA VĂN HÓA (7 CỘT) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  {/* Nội dung thể hiện */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide">
                      <Layers className="w-4 h-4 text-[#A9362B]" />
                      <span>Nội dung thể hiện trong tác phẩm</span>
                    </div>
                    <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      {activeModalArtwork.visualDescription}
                    </p>
                  </div>

                  {/* Ý nghĩa văn hóa & Ước vọng nhân sinh */}
                  <div className="p-4 bg-white dark:bg-[#30251F] rounded-lg border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#A9362B] dark:text-[#E05344] uppercase tracking-wide">
                      <HeartHandshake className="w-4 h-4" />
                      <span>Ý nghĩa văn hóa & Đời sống người Việt</span>
                    </div>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {activeModalArtwork.culturalMeaning}
                    </p>
                  </div>

                  {/* Đặc điểm nghệ thuật & Triết lý dân gian */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3.5 bg-[#F4EBDD] dark:bg-[#1E1B19] rounded border border-stone-300 dark:border-stone-700 space-y-1">
                      <div className="text-xs font-semibold text-[#D5A33B] uppercase tracking-wider">
                        Đặc điểm nghệ thuật mộc bản
                      </div>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {activeModalArtwork.artisticFeatures}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#F4EBDD] dark:bg-[#1E1B19] rounded border border-stone-300 dark:border-stone-700 space-y-1">
                      <div className="text-xs font-semibold text-[#355A50] uppercase tracking-wider">
                        Triết lý & Bài học giáo dục
                      </div>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {activeModalArtwork.educationalLesson}
                      </p>
                    </div>
                  </div>

                  {/* CÁC CHI TIẾT ĐẶC BIỆT CẦN QUAN SÁT */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wide">
                      <Compass className="w-4 h-4 text-[#A9362B]" />
                      <span>Các chi tiết tinh tế cần quan sát kỹ:</span>
                    </div>

                    <div className="space-y-2">
                      {activeModalArtwork.hiddenDetails.map((item, idx) => (
                        <div key={idx} className="p-3 bg-white dark:bg-[#30251F] rounded border border-stone-200 dark:border-stone-800 text-xs space-y-0.5">
                          <span className="font-semibold text-stone-900 dark:text-stone-100">
                            {idx + 1}. {item.title}:
                          </span>
                          <span className="text-stone-600 dark:text-stone-400 block leading-relaxed">
                            {item.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Modal với phím tắt điều hướng */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2 bg-white dark:bg-[#30251F] text-xs text-stone-500">
              <div className="hidden sm:flex items-center gap-3 text-[11px]">
                <span>Phím tắt:</span>
                <kbd className="px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 border rounded">←</kbd>
                <span>Trước</span>
                <kbd className="px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 border rounded">→</kbd>
                <span>Sau</span>
                <kbd className="px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 border rounded">Esc</kbd>
                <span>Đóng</span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 ml-auto w-full sm:w-auto justify-end">
                <button
                  onClick={handlePrevArtwork}
                  className="px-2.5 sm:px-3 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  ← Trước
                </button>
                <button
                  onClick={handleNextArtwork}
                  className="px-2.5 sm:px-3 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  Kế tiếp →
                </button>
                <button
                  onClick={() => setActiveModalArtwork(null)}
                  className="px-3 sm:px-4 py-1.5 text-xs font-semibold text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded transition-colors"
                >
                  Đóng lại
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
