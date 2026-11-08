/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, BookOpen, Smile, Sparkles, Feather, CheckCircle } from 'lucide-react';

export const ArtisticLanguageSection: React.FC = () => {
  const [activeValueTab, setActiveValueTab] = useState<number>(0);

  const valuesData = [
    {
      title: "1. Đời sống sinh hoạt cần lao",
      subtitle: "Hơi thở mộc mạc của làng quê thuần nông đồng bằng Bắc Bộ",
      icon: Feather,
      color: "#355A50",
      description: "Tranh Đông Hồ bắt rễ sâu xa từ đời sống đồng ruộng. Không có cung điện nguy nga hay phong cảnh trừu tượng xa vời, tranh vẽ lại chân thực những công việc quen thuộc: chú bé ngồi vắt vẻo lưng trâu thổi sáo, người cha trèo dừa cho mẹ hứng váy, cảnh chợ hội nhộn nhịp, chọi gà, đấu vật đầu xuân. Mỗi bức họa là một thước phim tài liệu quý giá về nếp sống, nếp nghĩ của người nông dân Việt xưa.",
      exampleArtwork: "Chăn Trâu Thổi Sáo & Hứng Dừa",
      exampleImage: "/paintings/chan_trau_thoi_sao.jpg",
      artisticInsight: "Đường khắc ước lệ, đơn giản hóa các chi tiết rườm rà để tập trung lột tả sức sống dẻo dai và tinh thần lạc quan yêu đời của người lao động."
    },
    {
      title: "2. Phong tục truyền thống ngày Tết",
      subtitle: "Thú chơi tranh thanh tao 'Tống cựu nghinh tân' mỗi độ xuân về",
      icon: BookOpen,
      color: "#A9362B",
      description: "Trong văn hóa Tết cổ truyền, đi chợ tranh tháng Chạp và mua tranh Đông Hồ về dán lên vách đất là nghi thức không thể thiếu. Tranh cũ bóc đi, tranh mới dán lên tượng trưng cho việc xua đuổi những điều xui xẻo của năm cũ, đón chào vượng khí hanh thông của năm mới. Tranh dán ở gian thờ, cửa chính, góc bếp và cả chuồng lợn, chuồng trâu, mang lại không khí ấm áp, sum vầy.",
      exampleArtwork: "Gà Đại Cát & Đàn Gà Mẹ Con",
      exampleImage: "/paintings/dan_ga_me_con.jpg",
      artisticInsight: "Màu đỏ son và vàng hòe ấm áp trên nền giấy điệp xà cừ phản chiếu ánh đèn dầu đêm Giao thừa, tạo nên ánh hào quang thiêng liêng và ấm cúng trong mỗi nếp nhà."
    },
    {
      title: "3. Ước vọng về cuộc sống ấm no",
      subtitle: "Khát vọng con đàn cháu đống, mùa màng bội thu và phú quý trường tồn",
      icon: Sparkles,
      color: "#D5A33B",
      description: "Người nông dân lam lũ quanh năm chỉ mong ước mưa thuận gió hòa, lúa đầy bồ, gà lợn đầy chuồng, con cháu khỏe mạnh ngoan ngoãn. Những ước nguyện bình dị ấy hóa thân thành hình ảnh đàn lợn nái béo tròn lúc nhúc đàn con, bé trai ôm gà trống vinh hoa, bé gái ôm vịt bầu phú quý. Đó là tiếng lòng hướng thiện và niềm tin vào tương lai tươi sáng.",
      exampleArtwork: "Đàn Lợn Âm Dương & Vinh Hoa - Phú Quý",
      exampleImage: "/paintings/lon_am_duong.jpg",
      artisticInsight: "Tạo hình nhân vật luôn mập mạp, đẫy đà, nét vẽ tròn đầy như mặt trăng rằm, thể hiện khát khao sự viên mãn, sung túc của cư dân nông nghiệp lúa nước."
    },
    {
      title: "4. Tiếng cười và sự châm biếm sâu cay",
      subtitle: "Vũ khí sắc bén của người bình dân phê phán thói đời bất công",
      icon: Smile,
      color: "#30251F",
      description: "Mỹ thuật dân gian Đông Hồ sở hữu kho tàng tranh trào phúng độc nhất vô nhị. Người nghệ nhân khéo léo mượn thế giới loài vật (chuột, cóc, mèo) để châm biếm tệ nạn tham nhũng, hối lộ (Đám Cưới Chuột), phê phán thói hủ nho, đạo mạo rỗng tuếch (Thầy Đồ Cóc) hay cảnh báo bi kịch đa thê (Đánh Ghen). Tiếng cười dân gian vừa chua cay, vừa thâm thúy nhưng chan chứa tinh thần bao dung.",
      exampleArtwork: "Đám Cưới Chuột & Thầy Đồ Cóc",
      exampleImage: "/paintings/dam_cuoi_chuot.jpg",
      artisticInsight: "Nghệ thuật nhân hóa đạt đến độ bậc thầy: chuột đội mũ cánh chuồn cưỡi ngựa, cóc già bụng bự cầm roi mây... bố cục đối thoại kịch tính như trên sân khấu chèo."
    },
    {
      title: "5. Triết lý dân gian & Vũ trụ quan",
      subtitle: "Âm Dương hòa hợp, Ngũ hành tương sinh và Ngũ đức làm người",
      icon: Eye,
      color: "#355A50",
      description: "Dưới lớp vỏ mộc mạc là chiều sâu triết lý uyên bác của văn hóa phương Đông. Xoáy âm dương trên lưng đàn lợn thể hiện sự cân bằng sinh sôi của vũ trụ; Ngũ sắc của tranh tương ứng với Ngũ hành (Kim, Mộc, Thủy, Hỏa, Thổ); chú gà trống hội tụ đủ Ngũ đức (Văn, Vũ, Dũng, Nhân, Tín). Người thợ làng tranh đã chuyển hóa những khái niệm triết học trừu tượng thành hình tượng gần gũi nhất.",
      exampleArtwork: "Lý Ngư Vọng Nguyệt & Gà Đại Cát",
      exampleImage: "/paintings/ly_ngu_vong_nguyet.jpg",
      artisticInsight: "Hình ảnh cá chép ngắm bóng trăng đáy hồ là lời răn dạy về sự giác ngộ: đừng mải mê đuổi theo hư danh huyễn hoặc bên ngoài mà quên đi giá trị thực chất bên trong tâm hồn."
    }
  ];

  const currentVal = valuesData[activeValueTab];

  return (
    <section id="artistic-language" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] dark:bg-[#211E1B] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TIÊU ĐỀ KHU VỰC 6 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Eye className="w-4 h-4" />
            <span>Khu vực 6 · Ngôn ngữ nghệ thuật & Chiều sâu văn hóa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Đằng sau mỗi nét khắc là một câu chuyện
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Khám phá 5 giá trị văn hóa và triết lý nhân sinh cốt lõi được đúc kết qua hàng trăm năm mộc bản dân gian Đông Hồ.
          </p>
        </div>

        {/* 5 TABS GIÁ TRỊ VĂN HÓA */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {valuesData.map((item, idx) => {
            const isActive = idx === activeValueTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveValueTab(idx)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#A9362B] text-white shadow-md'
                    : 'bg-white/80 dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* BẢNG PHÂN TÍCH CHI TIẾT TÁC PHẨM VÀ GIÁ TRỊ */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#30251F] rounded-xl woodcut-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* CỘT HÌNH ẢNH MINH HỌA THỰC TẾ (5 CỘT) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-xl overflow-hidden woodcut-border bg-[#F4EBDD] dark:bg-[#211E1B] p-2 flex items-center justify-center">
                <img
                  src={currentVal.exampleImage}
                  alt={currentVal.exampleArtwork}
                  className="w-full h-auto max-h-80 object-contain rounded"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/paintings/dam_cuoi_chuot.jpg';
                  }}
                />
              </div>
              <div className="text-xs text-stone-600 dark:text-stone-400 text-center">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Tác phẩm tiêu biểu: </span>
                {currentVal.exampleArtwork}
              </div>
            </div>

            {/* CỘT PHÂN TÍCH NGHỆ THUẬT & TRIẾT LÝ (7 CỘT) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A9362B] dark:text-[#E05344]">
                  {currentVal.subtitle}
                </span>
                <h3 className="text-2xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100 mt-1">
                  {currentVal.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                {currentVal.description}
              </p>

              <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#355A50]" />
                  <span>Đặc trưng nghệ thuật mộc bản:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {currentVal.artisticInsight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
