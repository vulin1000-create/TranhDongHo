/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { timelineEvents } from '../data/dongHoData.ts';
import { MapPin, Calendar, Compass, ShieldCheck, Waves, Users } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(0);
  const activeEvent = timelineEvents[selectedEventIndex];

  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-300 dark:border-stone-800 bg-[#FFF9F0] dark:bg-[#1E1B19] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Compass className="w-4 h-4" />
            <span>Khu vực 2 · Không gian làng tranh mộc bản</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Nơi những bản khắc kể chuyện văn hóa Việt
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Hành trình hơn 5 thế kỷ của làng tranh mộc bản bên dòng sông Đuống — nơi tinh hoa văn hóa thuần nông, phong tục Tết cổ truyền và tâm hồn người Việt được lưu giữ qua từng thế hệ.
          </p>
        </div>

        {/* THÔNG TIN VỊ TRÍ ĐỊA LÝ & BẢN ĐỒ VỊ TRÍ LÀNG TRANH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Cột 1: Thông tin địa lý & Đời sống làng nghề (7 Cột) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white dark:bg-[#2A231F] rounded-xl woodcut-border space-y-4 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#A9362B] dark:text-[#E05344]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Vị trí địa lý & Bối cảnh hình thành</span>
              </div>
              <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                Làng tranh Đông Hồ (tên Nôm cổ truyền là <strong>làng Mái</strong>) tọa lạc tại <strong>phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh</strong> (chính thức nâng cấp từ xã lên phường vào năm 2023). Làng nằm trải dài êm đềm ven bờ nam con <strong>sông Đuống</strong> ("sông Đuống trôi đi một dòng lấp lánh"), cách trung tâm thủ đô Hà Nội chừng 30km về hướng đông.
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <strong>Đời sống cư dân gắn với nghề:</strong> Xưa kia, toàn thể 17 dòng họ trong làng đều tham gia làm tranh. Mùa hè gặt hái xong là cả làng chuẩn bị giã điệp, nấu hồ nếp, đục ván gỗ. Đến tháng Chạp rét ngọt, chợ tranh Đông Hồ họp tấp nập vào các phiên 6, 11, 16, 21, 26 âm lịch, thuyền bè bốn phương nườm nượp đổ về chở tranh đi khắp các tỉnh miền Bắc và miền Trung đón Tết.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5 text-[#355A50] dark:text-[#457266] font-semibold">
                <Waves className="w-3.5 h-3.5" />
                <span>Bến sông Đuống lịch sử</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#D5A33B] font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>17 dòng họ mộc bản cổ truyền</span>
              </span>
            </div>
          </div>

          {/* Cột 2: Bản đồ trực quan & Điểm mốc văn hóa (5 Cột) */}
          <div className="lg:col-span-5 p-6 bg-[#F4EBDD] dark:bg-[#30251F] rounded-xl border border-stone-300 dark:border-stone-700 space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
                  Tọa độ di sản văn hóa Kinh Bắc
                </span>
                <span className="px-2 py-0.5 rounded bg-[#A9362B] text-white text-[10px] font-bold">
                  21.05°N, 106.07°E
                </span>
              </div>

              {/* Minh họa bản đồ sông Đuống và các di tích phụ cận */}
              <div className="p-3 bg-white dark:bg-[#1E1B19] rounded-lg border border-stone-200 dark:border-stone-800 space-y-2 text-xs">
                <div className="font-semibold text-[#A9362B]">Các di tích danh thắng kề cận:</div>
                <ul className="space-y-1 text-stone-600 dark:text-stone-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9362B]" />
                    <span><strong>Lăng Kinh Dương Vương:</strong> Thủy tổ nước Việt (cách 3km).</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#355A50]" />
                    <span><strong>Chùa Bút Tháp:</strong> Cổ tự lưu giữ tượng Phật Bà nghìn mắt nghìn tay.</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D5A33B]" />
                    <span><strong>Chùa Dâu:</strong> Ngôi chùa cổ nhất Việt Nam, khởi nguồn Phật giáo.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-white/80 dark:bg-stone-900/80 rounded-md border border-stone-300 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#355A50] shrink-0 mt-0.5" />
              <span>
                <strong>Hồ sơ UNESCO:</strong> Năm 2020, Bộ VHTTDL Việt Nam hoàn tất hồ sơ trình UNESCO ghi danh <em>"Nghề làm tranh dân gian Đông Hồ"</em> là Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp.
              </span>
            </div>
          </div>
        </div>

        {/* BỨC ẢNH TƯ LIỆU SÔNG ĐUỐNG VÀ LÀNG NGHỀ */}
        <div className="relative rounded-xl overflow-hidden woodcut-border group">
          <div className="aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-stone-900">
            <img
              src="/paintings/dong_ho_village_river.jpg"
              alt="Khung cảnh làng tranh Đông Hồ thanh bình bên dòng sông Đuống"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              onError={(e) => {
                // Fallback to village photography if needed
                (e.currentTarget as HTMLImageElement).src = '/paintings/che_tac_dong_ho.jpg';
              }}
            />
          </div>
          <div className="p-4 bg-white/95 dark:bg-[#25221F]/95 backdrop-blur-sm border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 dark:text-stone-400 gap-2">
            <span className="font-serif-heritage italic">
              Không gian phơi giấy điệp và mộc bản bên bờ nam sông Đuống — Làng Mái xưa, phường Song Hồ nay
            </span>
            <span className="shrink-0 font-semibold text-stone-800 dark:text-stone-200">
              Song Hồ, Thuận Thành, Bắc Ninh
            </span>
          </div>
        </div>

        {/* DÒNG THỜI GIAN KỂ CHUYỆN (TIMELINE STORYTELLING) */}
        <div className="space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 text-center">
            Chọn mốc lịch sử để xem bước chuyển mình của làng tranh
          </div>

          {/* Thanh mốc thời gian */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {timelineEvents.map((evt, idx) => {
              const isActive = idx === selectedEventIndex;
              return (
                <button
                  key={evt.year}
                  onClick={() => setSelectedEventIndex(idx)}
                  className={`p-3.5 text-left rounded-lg transition-all border ${
                    isActive
                      ? 'bg-[#A9362B] text-white border-[#A9362B] shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-[#2A231F] text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-400'
                  }`}
                >
                  <div className={`text-xs font-bold ${isActive ? 'text-white/80' : 'text-[#A9362B] dark:text-[#E05344]'}`}>
                    {evt.year}
                  </div>
                  <div className="text-xs font-serif-heritage font-bold mt-1 line-clamp-1">
                    {evt.period}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Chi tiết mốc thời gian được chọn */}
          <div className="p-6 sm:p-8 bg-white dark:bg-[#2A231F] rounded-xl woodcut-border text-left space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1 font-semibold text-[#A9362B] dark:text-[#E05344]">
                <Calendar className="w-3.5 h-3.5" />
                {activeEvent.year}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-stone-700 dark:text-stone-300">{activeEvent.period}</span>
              {activeEvent.locationNote && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="italic">{activeEvent.locationNote}</span>
                </>
              )}
            </div>

            <h3 className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
              {activeEvent.title}
            </h3>

            <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-4xl">
              {activeEvent.description}
            </p>

            <div className="p-4 bg-[#F4EBDD] dark:bg-[#1E1B19] border-l-4 border-[#D5A33B] rounded-r-lg max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D5A33B]">
                Ý nghĩa lịch sử nổi bật
              </div>
              <div className="text-sm font-medium text-stone-800 dark:text-stone-200 mt-1">
                {activeEvent.highlight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
