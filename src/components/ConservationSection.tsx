/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { artisansList, visitingInfo } from '../data/dongHoData.ts';
import { Landmark, Users, MapPin, ExternalLink, CheckCircle, Heart, GraduationCap, Share2 } from 'lucide-react';

export const ConservationSection: React.FC = () => {
  const studentActions = [
    {
      title: "Tìm hiểu và tham quan di sản",
      desc: "Trực tiếp đến thăm làng tranh Đông Hồ tại Song Hồ (Bắc Ninh) hoặc Bảo tàng Mỹ thuật Việt Nam để quan sát tận mắt các bản khắc gỗ cổ hàng trăm năm."
    },
    {
      title: "Ứng dụng trong học tập mỹ thuật",
      desc: "Thực hành vẽ và in tranh theo phong cách mộc bản, sử dụng các đề tài dân gian trong các bài thuyết trình văn hóa, lịch sử tại trường học."
    },
    {
      title: "Lan tỏa trên không gian số",
      desc: "Chia sẻ hình ảnh, câu chuyện và ý nghĩa nhân văn của tranh Đông Hồ đến bạn bè trong nước và quốc tế qua mạng xã hội với góc nhìn tôn trọng, tự hào."
    },
    {
      title: "Ủng hộ sản phẩm thủ công truyền thống",
      desc: "Lựa chọn tranh Đông Hồ thật in trên giấy điệp làm quà tặng năm mới, quà lưu niệm ngoại giao thay vì các sản phẩm in ấn công nghiệp đại trà."
    }
  ];

  return (
    <section id="conservation" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] dark:bg-[#211E1B] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 9 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Landmark className="w-4 h-4" />
            <span>Khu vực 9 · Gìn giữ di sản văn hóa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Giữ hồn tranh – Gìn giữ bản sắc Việt
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Bảo tồn một bức tranh dân gian không chỉ là giữ một mảnh giấy có màu vẽ, mà là gìn giữ phần hồn cốt, ước vọng và ký ức lịch sử của cả một dân tộc.
          </p>
        </div>

        {/* 3 TRỤ CỘT BẢO TỒN: NGHỆ NHÂN - CỘNG ĐỒNG - GIÁO DỤC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#A9362B]/10 text-[#A9362B] dark:text-[#E05344] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
              Vai trò của Nghệ nhân
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Những "báu vật nhân văn sống" của làng Song Hồ là người trực tiếp nắm giữ bí quyết đục ván gỗ thị, công thức luyện than lá tre, pha điệp và nhịp dằn tay in mộc bản. Không có sự kiên trì bám nghề của các nghệ nhân, dòng tranh đã thất truyền.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#355A50]/10 text-[#355A50] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
              Vai trò của Cộng đồng
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Tranh dân gian chỉ có thể sống khi có người mua, người chơi và người thưởng lãm. Sự trân trọng của cộng đồng, sự đồng hành của du khách và sự chung tay của xã hội chính là nguồn sinh khí nuôi dưỡng làng nghề trường tồn.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#D5A33B]/10 text-[#D5A33B] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
              Vai trò của Giáo dục
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Nhà trường và các bảo tàng số là cầu nối đưa tinh hoa di sản đến với thế hệ trẻ. Khi các em học sinh hiểu được ý nghĩa ẩn sau nét khắc và cảm nhận được vẻ đẹp giấy điệp, tình yêu văn hóa dân tộc sẽ tự nhiên nảy mầm và lan tỏa.
            </p>
          </div>
        </div>

        {/* CÁC NGHỆ NHÂN TIÊU BIỂU */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
            <Users className="w-4 h-4 text-[#A9362B]" />
            <span>Các nghệ nhân và gia đình làm tranh tiêu biểu tại làng Song Hồ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artisansList.map((artisan, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#A9362B] dark:text-[#E05344]">
                    {artisan.title}
                  </div>
                  <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                    {artisan.name}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {artisan.contribution}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 text-xs italic text-stone-500 dark:text-stone-400 font-serif-heritage">
                  "{artisan.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HÀNH ĐỘNG HỌC SINH & THẾ HỆ TRẺ CÓ THỂ THỰC HIỆN */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-4 text-left">
          <div className="flex items-center gap-2 text-sm font-bold text-[#A9362B] dark:text-[#E05344]">
            <Share2 className="w-4 h-4" />
            <span>Những hành động thiết thực học sinh và người trẻ có thể thực hiện để lan tỏa di sản:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {studentActions.map((act, i) => (
              <div key={i} className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700 space-y-1">
                <div className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#355A50] shrink-0" />
                  <span>{act.title}</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-6">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* THÔNG TIN THAM QUAN THỰC TẾ */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-4 text-left">
          <div className="flex items-center gap-2 text-sm font-bold text-[#A9362B] dark:text-[#E05344]">
            <MapPin className="w-4 h-4" />
            <span>Thông tin tham quan Trung tâm Bảo tồn Tranh Dân gian Đông Hồ</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 space-y-2">
              <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                {visitingInfo.centerName}
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                <strong>Địa chỉ:</strong> {visitingInfo.address}
              </p>
              <div className="p-3 bg-[#F4EBDD] dark:bg-[#211E1B] rounded border border-stone-300 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300 leading-relaxed mt-2">
                <strong>Lộ trình thuận tiện:</strong> {visitingInfo.travelTips}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                Trải nghiệm tại chỗ dành cho học sinh & du khách:
              </div>
              <ul className="space-y-1.5">
                {visitingInfo.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9362B] shrink-0 mt-1.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
