/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Home, Sparkles, Shirt, Gift, Flame, GraduationCap, Palette, Users, BookOpen } from 'lucide-react';

export const ModernLifeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'design' | 'workshop'>('education');

  return (
    <section id="modern-life" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF9F0] dark:bg-[#1E1B19] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 7 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Flame className="w-4 h-4" />
            <span>Khu vực 7 · Hơi thở thời đại & Di sản sống</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Di sản trong dòng chảy thời đại
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Từ truyền thống chơi tranh ngày Tết cổ truyền đến các tiết học di sản học đường, workshop trải nghiệm và nguồn cảm hứng bất tận trong thiết kế đồ họa, thời trang đương đại.
          </p>
        </div>

        {/* CÁC TAB CHỦ ĐỀ HIỆN ĐẠI */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-[#A9362B] text-white shadow-md'
                : 'bg-white/80 dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Tranh Đông Hồ trong giáo dục & trường học</span>
          </button>

          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'design'
                ? 'bg-[#A9362B] text-white shadow-md'
                : 'bg-white/80 dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
            }`}
          >
            <Shirt className="w-3.5 h-3.5" />
            <span>Ứng dụng thiết kế sáng tạo & thời trang</span>
          </button>

          <button
            onClick={() => setActiveTab('workshop')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'workshop'
                ? 'bg-[#A9362B] text-white shadow-md'
                : 'bg-white/80 dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Triển lãm & Workshop làm tranh thực tế</span>
          </button>
        </div>

        {/* NỘI DUNG TỪNG TAB */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#A9362B]/10 flex items-center justify-center text-[#A9362B] dark:text-[#E05344]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Chương trình Mỹ thuật học đường
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Tranh Đông Hồ được đưa vào chương trình sách giáo khoa Mỹ thuật tiểu học và THCS, giúp các em học sinh làm quen với kỹ thuật khắc gỗ, màu thảo mộc tự nhiên và rèn luyện tư duy thẩm mỹ dân tộc.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D5A33B]/10 flex items-center justify-center text-[#D5A33B]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Bài học đạo đức & Nhân văn
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Thông qua các câu chuyện trong tranh Đám cưới chuột, Thầy đồ cóc, Vinh hoa phú quý, giáo viên truyền tải bài học nhẹ nhàng về lòng hiếu thảo, tính trung thực, đạo nghĩa thầy trò và cách ứng xử hòa hoãn trong cuộc sống.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#355A50]/10 flex items-center justify-center text-[#355A50]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Bảo tàng số & Chuyển đổi số
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Ứng dụng công nghệ số hóa di sản giúp học sinh ở mọi vùng miền có thể tương tác trực quan với các mộc bản cổ, tìm hiểu quy trình in tranh và tham gia các trò chơi giáo dục bổ ích.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#A9362B]/10 flex items-center justify-center text-[#A9362B] dark:text-[#E05344]">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Thời trang áo dài & Lụa tơ tằm
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Nhiều nhà thiết kế nổi tiếng đưa họa tiết Gà Đại Cát, Đám Cưới Chuột, Đàn Lợn Âm Dương lên tà áo dài lụa tơ tằm, khăn lụa dệt tay Vạn Phúc, túi vải thân thiện môi trường, tôn vinh nét duyên dáng Việt Nam tại các tuần lễ thời trang quốc tế.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D5A33B]/10 flex items-center justify-center text-[#D5A33B]">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Thiết kế đồ họa & Bao bì Tết
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Ngôn ngữ mảng màu phẳng và đường viền khắc gỗ của Đông Hồ được ứng dụng sáng tạo trên hộp bánh mứt Tết, lịch xuân, bao lì xì và quà lưu niệm ngoại giao, tạo nên bản sắc văn hóa nổi bật.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#355A50]/10 flex items-center justify-center text-[#355A50]">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                Nghệ thuật thị giác & Game
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Họa sĩ minh họa trẻ lấy cảm hứng từ nhân vật Đông Hồ để vẽ tranh truyện, hoạt hình, game giáo dục, kết nối tự nhiên di sản cha ông với thế hệ Gen Z và Alpha.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'workshop' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#A9362B] dark:text-[#E05344]">
                <Users className="w-4 h-4" />
                <span>Hoạt động Workshop trải nghiệm in tranh</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Các bảo tàng mỹ thuật và trung tâm văn hóa thường xuyên tổ chức các buổi workshop cuối tuần: Du khách và các em học sinh được tự tay cầm chổi lá thông quét bột điệp lên giấy dó, tự cầm ván khắc dằn mâm màu son và mang bức tranh tự in về làm kỷ niệm.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#355A50]">
                <Home className="w-4 h-4" />
                <span>Trưng bày triển lãm chuyên đề trong & ngoài nước</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Nhiều triển lãm chuyên đề như "Hồn dân tộc sáng bừng trên giấy điệp", "Sắc xuân Kinh Bắc" được tổ chức tại Bảo tàng Mỹ thuật Việt Nam, Trung tâm Văn hóa Việt Nam tại Pháp, Nhật Bản, Hoa Kỳ, giới thiệu nét độc đáo của tranh mộc bản dân tộc đến bạn bè năm châu.
              </p>
            </div>
          </div>
        )}

        {/* THÔNG ĐIỆP BẢO TỒN VÀ PHÁT TRIỂN */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#30251F] rounded-xl woodcut-border space-y-3 max-w-4xl mx-auto text-left">
          <h3 className="text-lg font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Nguyên tắc bảo tồn di sản trong nhịp sống hiện đại
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            Việc đưa tranh Đông Hồ vào đời sống hiện đại luôn phải đặt trên nền tảng <strong>tôn trọng nguyên bản</strong>, bảo toàn tính chân xác của các mộc bản cổ và giá trị nhân văn của tác phẩm, tránh việc thương mại hóa thái quá hoặc làm biến dạng bản sắc văn hóa dân tộc.
          </p>
        </div>
      </div>
    </section>
  );
};
