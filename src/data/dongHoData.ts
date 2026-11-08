/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * [SẮC ĐIỆP LÀNG HỒ] DATA REPOSITORY
 * Dữ liệu chuẩn xác, có thẩm định nguồn và ghi công bản quyền bảo tàng.
 */

export interface ProvenanceInfo {
  title: string;
  originalUrl: string;
  license: string;
  artist: string;
  credit: string;
  sourceUrl: string;
}

export interface Artwork {
  id: string;
  title: string;
  hanNom: string;
  category: 'sinh-hoat' | 'chuc-tung' | 'dong-vat' | 'cham-biem';
  categoryLabel: string;
  summary: string;
  realImagePath: string;
  provenance: ProvenanceInfo;
  visualDescription: string;
  culturalMeaning: string;
  artisticFeatures: string;
  folkPhilosophy: string;
  educationalLesson: string;
  hiddenDetails: {
    title: string;
    detail: string;
  }[];
  palette: string[];
  approxOrigin: string;
}

export interface CraftStep {
  step: number;
  title: string;
  subtitle: string;
  imagePath: string;
  imageCaption: string;
  imageCredit: string;
  tools: string[];
  materials: string[];
  description: string;
  detailedProcess: string;
  folkInsight: string;
}

export interface ColorPigment {
  id: string;
  name: string;
  hex: string;
  darkHex: string;
  source: string;
  sourceDetail: string;
  preparation: string;
  symbolism: string;
  artworkUsage: string;
  historicalNote: string;
}

export interface TimelineEvent {
  period: string;
  year: string;
  title: string;
  description: string;
  highlight: string;
  locationNote?: string;
}

export interface GameQuestion {
  id: number;
  artworkId: string;
  artName: string;
  realImagePath: string;
  question: string;
  categoryGroup: string;
  riddle: string;
  hint: string;
  correctMeaning: string;
  options: string[];
  explanation: string;
  funFact: string;
}

export interface PuzzleGameConfig {
  id: string;
  title: string;
  imagePath: string;
  difficulty: '3x3' | '4x4';
  gridSize: number;
  description: string;
}

// 1. BỘ SƯU TẬP TRANH ĐÔNG HỒ THỰC TẾ (THE ART COLLECTION)
export const masterpieces: Artwork[] = [
  // NHÓM 1: SINH HOẠT VÀ ĐỜI SỐNG
  {
    id: "dam-cuoi-chuot",
    title: "Đám Cưới Chuột",
    hanNom: "鼠婚圖 (Thử Hôn Đồ)",
    category: "sinh-hoat",
    categoryLabel: "Sinh hoạt & Đời sống",
    summary: "Kiệt tác trào phúng đỉnh cao của nghệ thuật dân gian, phản ánh mâu thuẫn xã hội và triết lý ứng xử hòa hiếu, mềm dẻo của người Việt.",
    realImagePath: "/paintings/dam_cuoi_chuot.jpg",
    provenance: {
      title: "File:Đám cưới chuột.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/%C4%90%C3%A1m_c%C6%B0%E1%BB%9Bi_chu%E1%BB%99t.JPG",
      license: "Public domain",
      artist: "Nghệ nhân khuyết danh làng Đông Hồ",
      credit: "Tư liệu lưu trữ Bảo tàng Mỹ thuật Việt Nam & Viện Nghiên cứu Văn hóa",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%C4%90%C3%A1m_c%C6%B0%E1%BB%9Bi_chu%E1%BB%99t.JPG"
    },
    visualDescription: "Bố cục chia hai tầng tương phản rõ nét: Tầng trên là cảnh 4 chú chuột mang lễ vật hậu hĩnh (chim bồ câu béo múp, cá chép tươi) run rẩy dâng lên lão Mèo mập đang ngồi chễm chệ, giơ vuốt đe dọa. Tầng dưới là đoàn rước dâu linh đình: Trạng Chuột cưỡi ngựa hồng có lọng che, cô dâu chuột ngồi trong kiệu hoa e ấp cùng đoàn tùy tùng thổi kèn, gióng trống rộn rã.",
    culturalMeaning: "Phản ánh hiện thực xã hội phong kiến xưa: kẻ mạnh (đại diện là mèo) hay nhũng nhiễu, nhưng người nông dân (chuột) không chọn đối đầu đổ máu mà khéo léo dùng lễ vật hòa hoãn để việc lớn được êm thấm, gia đình được an vui.",
    artisticFeatures: "Đường khắc gỗ ước lệ khúc chiết, các đường uốn mềm ở đuôi chuột kết hợp với mảng màu son đỏ, vàng hòe và xanh chàm tôn vinh nhịp điệu sinh động của nhạc hội dân gian.",
    folkPhilosophy: "Tiếng cười lạc quan, hóm hỉnh. Dù ở hoàn cảnh ngặt nghèo nào, người dân lao động vẫn tìm cách vượt qua để dựng xây hạnh phúc và giữ gìn trật tự bình yên.",
    educationalLesson: "Giáo dục bài học về ứng xử linh hoạt, bình tĩnh hóa giải xung đột trong đời sống; phê phán thói nhũng nhiễu, lạm quyền của kẻ cậy thế.",
    hiddenDetails: [
      {
        title: "Tư thế cảnh giác của chuột dâng cá",
        detail: "Chú chuột dâng cá chép cúi rạp người nhún nhường nhưng đuôi vẫn dựng đứng thẳng thớm, thể hiện sự dè chừng cao độ trước nanh vuốt kẻ mạnh."
      },
      {
        title: "Bàn tay thỏa hiệp của Mèo",
        detail: "Mèo một tay giơ vuốt dọa nạt uy hiếp nhưng bàn tay kia xòe ra đón nhận lễ vật một cách khoan dung, lộ rõ bản chất thực dụng."
      },
      {
        title: "Tiếng kèn phồng má",
        detail: "Chú chuột đi đầu đoàn rước dâu phồng tròn hai má thổi chiếc kèn loa, tạo nên nhịp điệu âm nhạc rộn ràng ngay trong mặt phẳng tranh khắc gỗ."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVIII – Bản khắc cổ lưu truyền qua nhiều thế hệ tại Song Hồ."
  },
  {
    id: "danh-ghen",
    title: "Đánh Ghen",
    hanNom: "妬婦 (Đố Phụ)",
    category: "sinh-hoat",
    categoryLabel: "Sinh hoạt & Đời sống",
    summary: "Bức tranh thế sự tái hiện bi kịch gia đình trong chế độ đa thê, phê phán thói trăng hoa và gửi gắm khát vọng về hòa khí gia đạo.",
    realImagePath: "/paintings/danh_ghen.jpg",
    provenance: {
      title: "File:Đánh ghen.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/%C4%90%C3%A1nh_ghen.JPG",
      license: "Public domain",
      artist: "Nghệ nhân dân gian làng Đông Hồ",
      credit: "Wikimedia Commons / Sưu tập mỹ thuật dân gian truyền thống",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%C4%90%C3%A1nh_ghen.JPG"
    },
    visualDescription: "Cảnh người vợ cả tay cầm kéo xăm xăm lao tới túm tóc cô vợ lẽ đang quỳ van xin dưới đất. Người chồng đứng giữa dang rộng hai tay can ngăn, một tay níu vợ cả, một tay che chở vợ lẽ với ánh mắt bối rối. Góc tranh có đứa con nhỏ chắp tay mếu máo van xin mẹ tha thứ.",
    culturalMeaning: "Lên án chế độ đa thê phong kiến ('năm thê bảy thiếp') đã xé nát hạnh phúc gia đình và gieo rắc nỗi đau khổ cho người phụ nữ. Đồng thời lột tả sự bẽ bàng, bất lực của người đàn ông đa tình.",
    artisticFeatures: "Bố cục kịch tính như một lớp kịch chèo sân đình. Các nhân vật biểu cảm sinh động qua nét khắc nét than dứt khoát, mảng màu đỏ son thể hiện cơn thịnh nộ bùng phát.",
    folkPhilosophy: "Dân gian không cổ xúy bạo lực mà mượn sự việc kịch tính để răn dạy luân thường đạo lý: 'Thuận vợ thuận chồng tát biển Đông cũng cạn', gia đình có tôn ti trật tự mới mong yên ấm.",
    educationalLesson: "Bài học về sự thủy chung, tôn trọng lẫn nhau trong hôn nhân gia đình và ý thức gìn giữ hòa khí để con trẻ không phải chịu tổn thương.",
    hiddenDetails: [
      {
        title: "Chiếc kéo cắt vải",
        detail: "Vật dụng thêu thùa may vá quen thuộc trong gia đình trở thành vũ khí bất đắc dĩ, biểu thị sự phẫn nộ tột cùng của người phụ nữ bị phản bội."
      },
      {
        title: "Tư thế bối rối của người chồng",
        detail: "Người chồng đứng ở thế kẹt giữa hai người phụ nữ, vẻ mặt ngượng ngùng như muốn phân bua cùng làng xóm về sự vụng về của mình."
      },
      {
        title: "Đứa con níu áo mẹ",
        detail: "Chi tiết đứa trẻ níu vạt áo mẹ là nốt trầm lay động lòng người, nhắc nhở trách nhiệm bảo vệ tâm hồn trẻ thơ trước mọi bất hòa người lớn."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XIX – Bộ tranh thế sự châm biếm thói đời."
  },
  {
    id: "hung-dua",
    title: "Hứng Dừa",
    hanNom: "採椰圖 (Thải Da Đồ)",
    category: "sinh-hoat",
    categoryLabel: "Sinh hoạt & Đời sống",
    summary: "Bức tranh sinh hoạt tràn đầy nhựa sống, ngợi ca tình yêu lao động và hạnh phúc lứa đôi bình dị mà đậm đà thi vị.",
    realImagePath: "/paintings/hung_dua.jpg",
    provenance: {
      title: "File:Hái dừa.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/H%C3%A1i_d%E1%BB%ABa.JPG",
      license: "Public domain",
      artist: "Nghệ nhân dân gian làng Đông Hồ",
      credit: "Bản in khắc gỗ cổ truyền – Sưu tập làng Song Hồ",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:H%C3%A1i_d%E1%BB%ABa.JPG"
    },
    visualDescription: "Cây dừa uốn lượn cong vút trĩu quả. Trên ngọn cây, người chồng khỏe mạnh ôm thân cây thoăn thoắt bẻ dừa ném xuống. Dưới gốc dừa, người vợ trẻ duyên dáng vén vạt váy sồi tạo thành chiếc bọng khéo léo đón hai quả dừa rơi. Bên cạnh là hai đứa con nhỏ bụ bẫm reo hò cổ vũ.",
    culturalMeaning: "Tác phẩm thể hiện vẻ đẹp khỏe khoắn của lao động sản xuất và sự đồng thuận, phối hợp ăn ý giữa vợ và chồng. Hành động vén váy hứng dừa mang ẩn dụ phồn thực tinh tế, ước mong sự sinh sôi nảy nở.",
    artisticFeatures: "Đường cong của thân dừa tạo nên nhịp điệu chuyển động duyên dáng phá vỡ thế tĩnh của tranh mộc bản, kết hợp hai câu thơ Nôm hóm hỉnh: 'Khen ai khéo đắp nên dừa / Ấy ai bẻ dừa cho nàng hứng dừa'.",
    folkPhilosophy: "Ca ngợi vẻ đẹp chân chất, trong sáng của tình cảm vợ chồng nông dân; tìm thấy niềm vui và chất thơ ngay giữa những công việc lam lũ thường nhật.",
    educationalLesson: "Tôn vinh giá trị của sức lao động chân chính và tinh thần sẻ chia, tương trợ giữa các thành viên trong tổ ấm gia đình.",
    hiddenDetails: [
      {
        title: "Tư thế hứng dừa chuẩn xác",
        detail: "Mắt người vợ chăm chú ngước nhìn theo từng chuyển động của quả dừa, vạt váy giữ căng đón đúng tâm rơi thể hiện sự khéo léo tuyệt vời."
      },
      {
        title: "Hai đứa trẻ đồng dao",
        detail: "Đứa ôm gốc dừa ngước nhìn cha, đứa níu mẹ cười tươi, tái hiện bức tranh sinh động về một mái ấm gia đình hạnh phúc tràn ngập tiếng cười."
      },
      {
        title: "Thân dừa nhịp điệu chữ S",
        detail: "Đường lượn của cây dừa gợi nhớ hình dáng dải đất Việt Nam và nhịp điệu uyển chuyển của nghệ thuật mộc bản."
      }
    ],
    palette: ["#D5A33B", "#355A50", "#A9362B", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XIX – Bộ tranh sinh hoạt gia đình đối xứng với tranh Đánh ghen."
  },

  // NHÓM 2: ƯỚC VỌNG VÀ CHÚC TỤNG
  {
    id: "ga-dai-cat",
    title: "Gà Đại Cát",
    hanNom: "大吉 (Đại Cát)",
    category: "chuc-tung",
    categoryLabel: "Ước vọng & Chúc tụng",
    summary: "Linh vật đón xuân mang lại điềm lành lớn, xua tan bóng tối mùa đông và ca ngợi 5 đức tính cao quý của bậc quân tử.",
    realImagePath: "/paintings/ga_dai_cat.jpg",
    provenance: {
      title: "File:Dong Ho painting - Dai cat.jpg",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Dong_Ho_painting_-_Dai_cat.jpg",
      license: "Public domain",
      artist: "Nghệ nhân làng tranh Đông Hồ",
      credit: "Tư liệu lưu trữ hình ảnh nghệ thuật mộc bản Bắc Ninh",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dong_Ho_painting_-_Dai_cat.jpg"
    },
    visualDescription: "Hình ảnh chú gà trống oai vệ, ưỡn ngực hiên ngang, mào cờ đỏ rực như ngọn lửa bùng cháy, đuôi dài cong vút ngũ sắc rực rỡ. Một chân gà đứng vững chãi trên mỏm đất, chân kia co lên đón gió sớm. Góc trên đề hai chữ Hán 'Đại Cát' (大吉) uy nghiêm, cân đối.",
    culturalMeaning: "Tiếng gà gáy rạng đông đánh thức vừng dương, xua đuổi tà khí và đón chào may mắn cực thịnh trong năm mới. Chữ 'Kê' (gà) đồng âm với chữ 'Cát' (cát tường, điều lành).",
    artisticFeatures: "Đường khắc chắc nịch, dứt khoát; mảng mào gà đỏ son tương phản mạnh mẽ với mảng ngực vàng hòe và lông đuôi xanh chàm, tôn vinh khí phách dũng mãnh.",
    folkPhilosophy: "Gà trống hội tụ Ngũ Đức: Đầu đội mũ (mào gà) là VĂN; Chân mang cựa nhọn là VŨ; Gặp kẻ thù dám lao vào đánh là DŨNG; Tìm được mồi gọi đàn cùng ăn là NHÂN; Đúng canh giờ gáy sáng chuẩn xác là TÍN.",
    educationalLesson: "Rèn luyện chữ Tín trong cuộc sống, giữ lòng dũng cảm bảo vệ lẽ phải và biết sẻ chia với người xung quanh.",
    hiddenDetails: [
      {
        title: "Cặp chân vàng và cựa bén",
        detail: "Móng gà bám chặt vào lòng đất mẹ biểu thị bản lĩnh kiên cường, không nao núng trước giông bão cuộc đời."
      },
      {
        title: "Hai chữ 'Đại Cát' mộc bản",
        detail: "Được khắc chữ ngược trên ván nét và in bằng mực than lá tre, giữ vai trò cân bằng bố cục đối xứng bên cạnh chiếc mào cờ đỏ."
      },
      {
        title: "Chiếc mào răng cưa vương miện",
        detail: "Tạo hình to bản như vương miện của bậc tướng lĩnh xông pha trận mạc, mang trọn vẹn hào khí dân gian."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVI–XVII – Một trong những mộc bản cổ kính nhất của dòng tranh Đông Hồ."
  },
  {
    id: "vinh-hoa",
    title: "Vinh Hoa",
    hanNom: "榮華 (Vinh Hoa)",
    category: "chuc-tung",
    categoryLabel: "Ước vọng & Chúc tụng",
    summary: "Bức tranh chúc tết mừng con trai khỏe mạnh, tu dưỡng Ngũ Đức để lớn lên làm rạng danh dòng tộc.",
    realImagePath: "/paintings/vinh_hoa.jpg",
    provenance: {
      title: "File:Vinh hoa.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Vinh_hoa.JPG",
      license: "Public domain",
      artist: "Nghệ nhân dân gian làng Đông Hồ",
      credit: "Sưu tập mỹ thuật dân gian Đông Hồ – Bắc Ninh",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Vinh_hoa.JPG"
    },
    visualDescription: "Một bé trai bụ bẫm, trắng trẻo, đeo vòng bạc khóa khánh hộ thân, ôm chặt chú gà trống dũng mãnh trong lòng. Bên cạnh là chậu hoa cúc vàng đại đóa nở rộ tươi tốt.",
    culturalMeaning: "Gà trống biểu trưng cho người quân tử văn võ song toàn; hoa cúc biểu trưng cho sự trường thọ và thanh cao. Bức tranh gửi gắm lời chúc đứa trẻ lớn lên thành đạt, vinh hiển.",
    artisticFeatures: "Đường nét khắc gỗ tròn trịa, khuôn mặt em bé rạng rỡ như trăng rằm, yếm đỏ tươi tương phản ấm áp với sắc vàng hòe của chú gà trống.",
    folkPhilosophy: "Khát vọng cha mẹ gửi gắm nơi con cái: nuôi dạy con nên người tài đức, sống hiếu nghĩa và mang lại danh thơm cho gia đình, xóm làng.",
    educationalLesson: "Bồi dưỡng lòng hiếu thảo, tinh thần tự lập và nỗ lực học tập để đền đáp công ơn sinh thành.",
    hiddenDetails: [
      {
        title: "Vòng bạc khóa khánh",
        detail: "Chiếc khóa khánh trên ngực là bùa bình an truyền thống của trẻ em Việt xưa, cầu mong các em hay ăn chóng lớn, khỏe mạnh an lành."
      },
      {
        title: "Hoa cúc đại đóa",
        detail: "Từng cánh cúc xoè rộng rực rỡ, biểu thị sự trường thọ và tấm lòng thanh khiết hướng thiện."
      },
      {
        title: "Tạo hình ngấn chân ngấn tay",
        detail: "Tạo hình em bé mập mạp, nhiều ngấn thể hiện ước mơ về sự no ấm, đầy đủ của nhà nông sau những mùa màng vất vả."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVII–XVIII – Cặp tranh đôi đối xứng với bức 'Phú Quý'."
  },
  {
    id: "phu-quy",
    title: "Phú Quý",
    hanNom: "富貴 (Phú Quý)",
    category: "chuc-tung",
    categoryLabel: "Ước vọng & Chúc tụng",
    summary: "Bức tranh chúc tết mừng con gái nết na, thanh cao, mang lại cuộc sống sung túc và học hành đỗ đạt cao.",
    realImagePath: "/paintings/phu_quy.jpg",
    provenance: {
      title: "File:Phú quý.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ph%C3%BA_qu%C3%BD.JPG",
      license: "Public domain",
      artist: "Casablanca1911",
      credit: "Vietnamese traditional folk art collection",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ph%C3%BA_qu%C3%BD.JPG"
    },
    visualDescription: "Một bé gái xinh xắn, má lúm đồng tiền bầu bĩnh, đeo hoa tai, mặc yếm đào xanh chàm ôm chú vịt béo múp. Bên cạnh là cành hoa sen thanh cao ngát hương.",
    culturalMeaning: "Chữ 'Vịt' chữ Hán là 'Áp' (鴨) có chữ 'Giáp' (甲) biểu trưng cho đỗ đầu khoa cử (Đệ nhất giáp). Vịt bên hoa sen gọi là 'Áp liên' (vịt bên sen), đồng âm với 'Liên khoa giáp đệ' – chúc thi cử liên tiếp đỗ đạt cao nhất.",
    artisticFeatures: "Đường viền khắc nét mềm mại, uyển chuyển, tôn vinh nét duyên dáng, e ấp của người con gái đất Kinh Bắc.",
    folkPhilosophy: "Mong con gái nết na, dịu dàng, giữ gìn cốt cách thanh cao như đóa sen 'gần bùn mà chẳng hôi tanh mùi bùn'.",
    educationalLesson: "Giữ gìn tâm hồn trong sạch, rèn luyện phẩm hạnh lễ phép và tinh thần hiếu học.",
    hiddenDetails: [
      {
        title: "Đôi hoa tai vàng",
        detail: "Biểu trưng cho vẻ đẹp nữ tính, nếp nhà gia giáo và cuộc sống phú túc của gia đình."
      },
      {
        title: "Cành sen vươn thẳng",
        detail: "Búp sen và lá sen xanh ngắt biểu thị sự thanh bạch, khí tiết vững vàng trước mọi cám dỗ."
      },
      {
        title: "Chú vịt béo tròn",
        detail: "Hình tượng vịt béo tượng trưng cho tài lộc dồi dào, mùa màng bội thu và tương lai rạng ngời."
      }
    ],
    palette: ["#355A50", "#A9362B", "#D5A33B", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVII–XVIII – Treo đăng đối cùng bức Vinh Hoa vào dịp đón Tết."
  },

  // NHÓM 3: ĐỘNG VẬT VÀ THIÊN NHIÊN
  {
    id: "dan-lon-am-duong",
    title: "Đàn Lợn Âm Dương",
    hanNom: "陰陽豕羣 (Âm Dương Thỉ Quần)",
    category: "dong-vat",
    categoryLabel: "Động vật & Thiên nhiên",
    summary: "Biểu tượng tột đỉnh của ước vọng sung túc, no đủ, gia súc sinh sôi và triết lý âm dương hòa hợp của đất trời.",
    realImagePath: "/paintings/lon_am_duong.jpg",
    provenance: {
      title: "File:Lợn âm dương.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/L%E1%BB%A3n_%C3%A2m_d%C6%B0%C6%A1ng.JPG",
      license: "Public domain",
      artist: "Đông Hồ",
      credit: "Tư liệu mộc bản dân gian làng Mái, Song Hồ",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:L%E1%BB%A3n_%C3%A2m_d%C6%B0%C6%A1ng.JPG"
    },
    visualDescription: "Lợn mẹ to béo, đẫy đà, mắt lim dim mãn nguyện dẫn đàn con 5 chú lợn con bụ bẫm quây quần quanh bầu vú. Trên mình mỗi con lợn đều có hai xoáy tròn âm dương (thái cực) xoay vần mềm mại. Nền tranh điểm xuyết những chiếc lá khoai nước xanh non.",
    culturalMeaning: "Lợn là tài sản quý của nhà nông. Đàn lợn nái mắn đẻ, đàn con lúc nhúc tượng trưng cho mùa màng tươi tốt, gia đạo thuận hòa, con đàn cháu đống, chuồng trại đầy ắp.",
    artisticFeatures: "Đường cong của sống lưng lợn kết hợp vòng xoáy âm dương tạo nên cảm giác căng tràn sức sống. Màu đỏ son và vàng đất tôn vinh sự trù phú của đồng quê.",
    folkPhilosophy: "Vũ trụ luận phương Đông về Âm và Dương được người nghệ nhân bình dân cụ thể hóa mộc mạc nhất: Vạn vật sinh sôi nhờ sự giao hòa cân đối giữa đất trời.",
    educationalLesson: "Biết ơn sự cần lao chăn nuôi của người nông dân; trân trọng tình mẫu tử thiêng liêng và ý thức gìn giữ hòa khí trong gia đình.",
    hiddenDetails: [
      {
        title: "Con số 5 của đàn lợn con",
        detail: "Năm chú lợn con biểu trưng cho Ngũ hành (Kim - Mộc - Thủy - Hỏa - Thổ) và Ngũ phúc lâm môn (Phú - Quý - Thọ - Khang - Ninh)."
      },
      {
        title: "Xoáy âm dương đối lập sắc màu",
        detail: "Mỗi xoáy tròn gồm nửa sáng (dương) và nửa tối (âm) chuyển động nhịp nhàng như dòng năng lượng luân chuyển không ngừng của sự sống."
      },
      {
        title: "Đuôi lợn xoăn tít",
        detail: "Chiếc đuôi xoăn cong vút thể hiện sự khỏe mạnh, hoạt bát của loài gia súc được chăm sóc chu đáo."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVII – Thường được mua dán ở chuồng lợn ngày Tết cầu gia súc mau lớn."
  },
  {
    id: "ly-ngu-vong-nguyet",
    title: "Lý Ngư Vọng Nguyệt",
    hanNom: "鯉魚望月 (Cá Chép Trông Trăng)",
    category: "dong-vat",
    categoryLabel: "Động vật & Thiên nhiên",
    summary: "Bức tranh gửi gắm triết lý sâu xa về sự giác ngộ, tinh thần vượt khó học tập và ước vọng hướng tới sự hoàn mỹ chân chính.",
    realImagePath: "/paintings/ly_ngu_vong_nguyet.jpg",
    provenance: {
      title: "File:Dong Ho painting - Ly Ngu vong nguyet.jpg",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Dong_Ho_painting_-_Ly_Ngu_vong_nguyet.jpg",
      license: "Public domain",
      artist: "Nghệ nhân dân gian làng Đông Hồ",
      credit: "Tư liệu lưu trữ hình ảnh nghệ thuật mộc bản dân gian Việt Nam",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dong_Ho_painting_-_Ly_Ngu_vong_nguyet.jpg"
    },
    visualDescription: "Chú cá chép thân hình uốn lượn uyển chuyển, vây đuôi xòe rộng như cánh hoa, mắt chăm chú hướng về bóng trăng tròn vành vạnh in đáy nước. Xung quanh là những cành rong đuôi chó bồng bềnh trôi nhẹ.",
    culturalMeaning: "Cá chép gắn với truyền thuyết 'Cá chép vượt Vũ Môn hóa rồng', biểu trưng cho ý chí kiên định vượt qua gian khó thi cử để đỗ đạt vinh hiển.",
    artisticFeatures: "Đường khắc gỗ mềm mại như làn nước, ánh trăng tròn tạo điểm tựa tĩnh tại cho chuyển động uốn lượn của cá chép trên nền giấy điệp xà cừ óng ánh.",
    folkPhilosophy: "Bóng trăng dưới đáy nước là hình ảnh của sự hư ảo; người khôn ngoan không đuổi theo hư danh huyễn hoặc mà tìm về giá trị thực chất, tâm sáng như trăng rằm.",
    educationalLesson: "Khuyên nhủ học sinh bền bỉ rèn luyện ý chí, vượt khó vươn lên và luôn giữ tâm hồn thanh tịnh, trung thực.",
    hiddenDetails: [
      {
        title: "Bóng trăng đáy nước",
        detail: "Mặt trăng được vẽ trọn vẹn ở đáy hồ, tượng trưng cho vẻ đẹp viên mãn và lời nhắc nhở suy xét cội nguồn chân lý."
      },
      {
        title: "Đôi râu cá chép rồng",
        detail: "Râu cá dài cong vút như râu rồng, biểu hiện khí chất đang trong quá trình chuyển hóa từ cá chép phàm trần thành rồng thiêng."
      },
      {
        title: "Cành rong rêu bồng bềnh",
        detail: "Tạo nên không gian thủy cung êm đềm, thanh bình mang đậm chất thơ của làng quê đất Việt."
      }
    ],
    palette: ["#A9362B", "#D5A33B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVIII – Bức tranh ưa chuộng treo trong phòng đọc sách của các sĩ tử."
  },
  {
    id: "chan-trau-thoi-sao",
    title: "Chăn Trâu Thổi Sáo",
    hanNom: "牧童吹笛 (Mục Đồng Xuy Địch)",
    category: "dong-vat",
    categoryLabel: "Động vật & Thiên nhiên",
    summary: "Bức họa thanh bình tuyệt mỹ về tuổi thơ đồng quê, sự gắn bó thân thiết giữa con người và loài vật giữa thiên nhiên khoáng đạt.",
    realImagePath: "/paintings/chan_trau_thoi_sao.jpg",
    provenance: {
      title: "File:Chăn trâu thổi sáo.jpg",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Ch%C4%83n_tr%C3%A2u_th%E1%BB%95i_s%C3%A1o.jpg",
      license: "Public domain",
      artist: "Làng Tranh Đông Hồ (chụp tại nhà Nghệ nhân Nguyễn Hữu Sam)",
      credit: "Wikimedia Commons / Sưu tập Nguyễn Hữu Sam",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ch%C4%83n_tr%C3%A2u_th%E1%BB%95i_s%C3%A1o.jpg"
    },
    visualDescription: "Chú bé mục đồng ngực trần, quần cộc, ngồi vắt vẻo trên lưng trâu mộng, tay nâng cây sáo trúc thổi bài ca thanh bình. Con trâu to khỏe, sừng cong vút, tai vểnh lên như đang lắng nghe tiếng sáo êm đềm. Phía trên là tán lá sen to che nắng như chiếc lọng xanh mát.",
    culturalMeaning: "Con trâu là đầu cơ nghiệp của nhà nông. Hình ảnh mục đồng thổi sáo biểu trưng cho cuộc sống thái bình thịnh trị, tự tại an nhiên giữa đồng nội.",
    artisticFeatures: "Đường nét mộc bản phóng khoáng, góc nhìn từ dưới lên tôn vinh sự khoáng đạt của bầu trời quê hương và tiếng sáo vi vút của đồng quê.",
    folkPhilosophy: "'Ai bảo chăn trâu là khổ? / Chăn trâu sướng lắm chứ!' – Tâm hồn tự do, không màng danh lợi, hòa mình trọn vẹn vào thiên nhiên đất trời.",
    educationalLesson: "Giáo dục tình yêu thương loài vật, trân trọng tuổi thơ hồn nhiên và giữ gìn tình yêu đối với làng quê đất nước.",
    hiddenDetails: [
      {
        title: "Tán lá sen làm lọng",
        detail: "Chiếc lá sen xòe rộng trên đầu chú bé tựa chiếc lọng che quý giá của thiên nhiên, biểu thị sự đùm bọc bình dị của quê hương."
      },
      {
        title: "Ánh mắt lắng nghe của chú trâu",
        detail: "Mắt trâu hiền lành lim dim, chân bước khoan thai như đang cảm thụ từng giai điệu mộc mạc từ tiếng sáo trúc."
      },
      {
        title: "Tư thế ngồi ngửa tự do",
        detail: "Chú bé ngồi ngửa lưng thư thái, thể hiện sự thuần thục tuyệt vời trong việc làm quen với loài vật nuôi đồng hành."
      }
    ],
    palette: ["#355A50", "#D5A33B", "#A9362B", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVIII – Bức tranh tiêu biểu cho thanh âm đồng quê Bắc Bộ."
  },
  {
    id: "dan-ga-me-con",
    title: "Đàn Gà Mẹ Con",
    hanNom: "子母鷄 (Tử Mẫu Kê)",
    category: "dong-vat",
    categoryLabel: "Động vật & Thiên nhiên",
    summary: "Bức tranh đong đầy tình mẫu tử ấm áp, ca ngợi đức hy sinh, sự che chở của mẹ hiền và ước vọng gia đình sum vầy no đủ.",
    realImagePath: "/paintings/dan_ga_me_con.jpg",
    provenance: {
      title: "File:Rooster and hen, Dong Ho picture, paper - Vietnam National Museum of Fine Arts",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Rooster_and_hen%2C_Dong_Ho_picture%2C_paper_-_Vietnam_National_Museum_of_Fine_Arts_-_Hanoi%2C_Vietnam_-_DSC05287.JPG",
      license: "CC0 / Public domain",
      artist: "Bảo tàng Mỹ thuật Việt Nam (Ảnh chụp hiện vật: Daderot)",
      credit: "Vietnam National Museum of Fine Arts – Hanoi, Vietnam",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rooster_and_hen,_Dong_Ho_picture,_paper_-_Vietnam_National_Museum_of_Fine_Arts_-_Hanoi,_Vietnam_-_DSC05287.JPG"
    },
    visualDescription: "Gà mẹ bới được con cào cào to, ngậm ngang mỏ gọi bầy con ríu rít. Mười chú gà con lông vàng óng như tơ, đứa nhảy lên lưng mẹ, đứa nép dưới cánh, đứa chạy tranh mồi tạo nên cảnh tượng vô cùng sống động, rộn ràng.",
    culturalMeaning: "Biểu trưng cho đức tính người mẹ Việt Nam: cần cù, chịu thương chịu khó, có mồi ngon đều nhường cho đàn con thơ. Bức tranh chúc cho gia đình con đàn cháu đống, thuận hòa hạnh phúc.",
    artisticFeatures: "Đường khắc tỉ mỉ từng sợi lông tơ của gà con, mảng màu son đỏ ở mào gà mẹ tạo điểm nhấn ấm cúng giữa sắc vàng hòe tươi vui rực rỡ.",
    folkPhilosophy: "'Mẹ già như chuối ba hương / Như xôi nếp một, như đường mía lau' – Tình mẹ bao la nâng đỡ những bước đi đầu đời của con trẻ.",
    educationalLesson: "Biết ơn công lao dưỡng dục sinh thành của cha mẹ, biết nhường nhịn, yêu thương anh chị em trong gia đình.",
    hiddenDetails: [
      {
        title: "Con cào cào trên mỏ gà mẹ",
        detail: "Mẹ bắt được mồi nhưng không nuốt vội mà kêu 'tục tục' gọi bầy con lại chia nhau, thể hiện đức hy sinh cao cả của tình mẫu tử."
      },
      {
        title: "Chú gà con trên lưng mẹ",
        detail: "Một chú gà con tinh nghịch trèo hẳn lên lưng mẹ đứng nghển cổ nhìn quanh, biểu hiện sự hồn nhiên và cảm giác an toàn tuyệt đối bên mẹ."
      },
      {
        title: "Đôi mắt hiền từ của gà mẹ",
        detail: "Ánh mắt gà mẹ ánh lên niềm vui mãn nguyện khi thấy các con ăn no, khỏe mạnh chạy nhảy."
      }
    ],
    palette: ["#D5A33B", "#A9362B", "#355A50", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVIII – Hiện vật lưu giữ tại Bảo tàng Mỹ thuật Việt Nam."
  },

  // NHÓM 4: CHÂM BIẾM VÀ PHẢN ÁNH XÃ HỘI
  {
    id: "thay-do-coc",
    title: "Thầy Đồ Cóc",
    hanNom: "蝦蟆師 (Hà Mã Sư - Ếch Đi Học)",
    category: "cham-biem",
    categoryLabel: "Châm biếm & Phản ánh",
    summary: "Bức tranh mượn loài vật để phê phán thói hủ nho, đạo mạo hình thức của thầy đồ xưa, đồng thời nhắc nhở tinh thần hiếu học chân chính.",
    realImagePath: "/paintings/thay_do_coc.jpg",
    provenance: {
      title: "File:Ếch đi học.JPG",
      originalUrl: "https://upload.wikimedia.org/wikipedia/commons/6/67/%E1%BA%BEch_%C4%91i_h%E1%BB%8Dc.JPG",
      license: "Public domain",
      artist: "Nghệ nhân dân gian làng Đông Hồ",
      credit: "Sưu tập tranh dân gian Việt Nam – Song Hồ, Thuận Thành",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E1%BA%BEch_%C4%91i_h%E1%BB%8Dc.JPG"
    },
    visualDescription: "Lớp học chữ Nho xưa: Thầy Đồ Cóc to lớn, bụng phệ, mắt lồi ngồi uy nghi trên sập gụ, tay cầm roi mây nghiêm khắc. Xung quanh là đàn học trò cóc nhỏ quỳ gối dâng lễ vật đĩa cua đồng, đứa khoanh tay chịu phạt, đứa cặm cụi mài mực, đứa thụt thò trêu bạn sau lưng thầy.",
    culturalMeaning: "Một mặt phản ánh nét đẹp tôn sư trọng đạo và truyền thống hiếu học của dân tộc. Mặt khác, mượn loài cóc da sần bụng bự để châm biếm sâu cay thói hủ nho, ra vẻ đạo mạo nhưng rỗng tuếch của một bộ phận thầy đồ thời suy tàn.",
    artisticFeatures: "Nhân hóa tài tình thế giới loài cóc ếch; nét khắc hóm hỉnh tạo nên tiếng cười trào phúng vừa chua cay vừa sảng khoái.",
    folkPhilosophy: "Học tập là việc nghiêm túc suốt đời nhưng không được biến kiến thức thành thứ trang sức kênh kiệu, hách dịch xa rời người lao động.",
    educationalLesson: "Tôn kính thầy cô giáo thật lòng, chăm chỉ học hành và giữ đức tính khiêm tốn, giản dị trong cuộc sống.",
    hiddenDetails: [
      {
        title: "Đĩa cua đồng dâng thầy",
        detail: "Học trò bưng đĩa cua làm lễ vật nhập học, phản ánh tập quán 'lễ thầy' bằng hoa trái sản vật đồng quê của nông dân xưa."
      },
      {
        title: "Chiếc roi mây kỷ luật",
        detail: "Chiếc roi mây gác trên sập vừa nhắc nhở kỷ luật trường xưa ('thương cho roi cho vọt'), vừa tạo vẻ khôi hài cho tư thế bệ vệ của chú cóc già."
      },
      {
        title: "Góc học trò trốn học",
        detail: "Hai chú cóc con thụt thò thì thầm sau lưng thầy, gợi nhớ sự tinh nghịch muôn thuở của lứa tuổi học trò."
      }
    ],
    palette: ["#355A50", "#D5A33B", "#A9362B", "#211E1B", "#F4EBDD"],
    approxOrigin: "Thế kỷ XVIII – Tác phẩm trào lộng học đường kinh điển."
  }
];

// 2. NĂM CÔNG ĐOẠN CHẾ TÁC MỘC BẢN VỚI ẢNH TƯ LIỆU THỰC TẾ
export const craftSteps: CraftStep[] = [
  {
    step: 1,
    title: "Chuẩn bị giấy Điệp và vật liệu",
    subtitle: "Nền xà cừ óng ánh từ vỏ sò biển duyên hải và vỏ cây Dó",
    imagePath: "/paintings/dong_ho_village_river.jpg",
    imageCaption: "Không gian làm giấy và phơi tranh ven bờ sông Đuống, làng Song Hồ",
    imageCredit: "Tư liệu bảo tồn làng tranh truyền thống Song Hồ, Bắc Ninh",
    tools: ["Chổi lá thông xòe quạt", "Bàn quét gỗ phẳng", "Chổi đót mềm"],
    materials: ["Giấy dó mỏng dai (vỏ cây dó)", "Bột vỏ sò điệp biển nghiền mịn", "Hồ nếp nấu quánh"],
    description: "Nền tranh Đông Hồ được tạo nên từ giấy dó phết bột vỏ sò điệp biển trộn hồ nếp sánh đặc.",
    detailedProcess: "Vỏ con điệp (loại sò biển mang từ vùng biển Quảng Ninh, Hải Phòng) được rửa sạch, giã nhỏ rồi nghiền mịn như bột phấn trên bàn đá. Hòa bột điệp với hồ nếp quấy chín, nghệ nhân dùng chổi lá thông quét đều tay một chiều lên tờ giấy dó mỏng. Vết quét của chổi lá thông để lại những đường gân sọc mảnh mai óng ánh như dát bạc xà cừ.",
    folkInsight: "'Màu dân tộc sáng bừng trên giấy điệp' – Lớp điệp ngà xà cừ chính là linh hồn nâng đỡ tất cả màu sắc thảo mộc của bức tranh."
  },
  {
    step: 2,
    title: "Tạo mẫu và khắc ván in",
    subtitle: "Nét chạm khắc tinh hoa trên thớ gỗ thị mềm dẻo",
    imagePath: "/paintings/dong_ho_artisan_hands.jpg",
    imageCaption: "Bàn tay nghệ nhân làng Song Hồ dùng bộ ve thép khắc tỉ mỉ từng chi tiết trên thớ gỗ thị",
    imageCredit: "Ảnh tư liệu nghệ nhân làm tranh làng Song Hồ, Thuận Thành",
    tools: ["Bộ ve khắc thép tôi đủ kích cỡ", "Búa gỗ gõ nhẹ", "Bàn xoa nắn phẳng"],
    materials: ["Gỗ thị (khắc ván nét tinh xảo)", "Gỗ lồng mực hoặc gỗ mỡ (khắc ván màu)", "Mực nho phác thảo"],
    description: "Nghệ nhân vẽ mẫu tranh ngược lên mặt ván gỗ đã bào nhẵn bóng, sau đó dùng bộ ve đục tỉ mỉ từng mảng khối nổi lên.",
    detailedProcess: "Tùy theo đề tài, một bức tranh thường sử dụng từ 2 đến 5 bản khắc gỗ riêng biệt (gồm các ván màu và ván nét than đen), một số tranh đơn giản chỉ cần 1 ván nét kết hợp tô tay [cần kiểm chứng thêm về số lượng ván tối đa]. Gỗ thị là loại gỗ được nghệ nhân làng tranh ưa chuộng nhất để khắc ván nét nhờ thớ mịn dẻo, ít nứt nẻ; đối với các ván in mảng màu, các loại gỗ mềm dễ đục như gỗ mỡ, gỗ lồng mực hoặc gỗ giổi cũng thường được sử dụng.",
    folkInsight: "Người thợ khắc tranh phải có đôi mắt thấu suốt và đôi bàn tay vàng để truyền tải được cái thần thái hóm hỉnh mà đôn hậu của văn hóa quê hương."
  },
  {
    step: 3,
    title: "Chuẩn bị màu sắc từ thiên nhiên",
    subtitle: "Ngũ sắc chưng cất từ cỏ cây, hoa quả và khoáng thạch đất Việt",
    imagePath: "/paintings/che_tac_dong_ho.jpg",
    imageCaption: "Nghệ nhân pha chế màu thảo mộc tự nhiên và thao tác in tranh mộc bản",
    imageCredit: "Ảnh tư liệu Wikimedia Commons (CC BY-SA 4.0 RG72 - Làng Đông Hồ)",
    tools: ["Cối đá giã thảo mộc", "Vải gạn lọc cặn", "Bát sành đựng màu"],
    materials: ["Sỏi son", "Hoa hòe sao chín", "Lá chàm / rỉ đồng", "Than lá tre khô", "Bột vỏ điệp"],
    description: "Màu vẽ Đông Hồ hoàn toàn lấy từ thiên nhiên xung quanh cuộc sống nông nghiệp, không dùng bất kỳ phẩm màu hóa học nào.",
    detailedProcess: "Nghệ nhân tinh chế 5 màu sắc cốt lõi: Đỏ từ sỏi son non núi Thiên Thai tán mịn; Vàng từ nụ hoa hòe sao vàng nấu sôi hoặc quả dành dành chín; Xanh từ lá chàm ngâm vôi hoặc rỉ đồng ô-xít; Đen từ tro than lá tre già đốt ủ trong chum sành; Trắng từ vỏ điệp biển. Tất cả trộn đều với hồ nếp để tạo độ dính tự nhiên, bền màu qua nhiều thế kỷ.",
    folkInsight: "Màu của tranh Đông Hồ là màu của đất mẹ, ruộng đồng – tươi tắn, dịu dàng, không chói gắt mà đằm thắm hồn quê."
  },
  {
    step: 4,
    title: "Tiến hành in tranh qua các bản khắc",
    subtitle: "Quy tắc in màu trước - in nét sau, chuẩn xác từng milimet",
    imagePath: "/paintings/phoi_tranh_dong_ho.jpg",
    imageCaption: "Những thếp tranh in từng lớp màu đang hong khô trên giàn sào tre làng Đông Hồ",
    imageCredit: "Ảnh tư liệu Wikimedia Commons (CC BY-SA 4.0 RG72 - Làng Đông Hồ)",
    tools: ["Tay dằn bằng xơ mướp hoặc vỏ trấu bọc vải", "Bìa quệt màu", "Thớt in gỗ nhẵn"],
    materials: ["Bộ ván in hoàn chỉnh", "Các mâm màu thảo mộc", "Xấp giấy điệp khô"],
    description: "Tranh Đông Hồ không dùng cọ vẽ mà in trực tiếp từ các ván khắc gỗ. Kỹ thuật đòi hỏi sự chuẩn xác cao độ để các lớp màu ăn khớp nhau.",
    detailedProcess: "Quy tắc kinh điển của kỹ thuật in mộc bản Đông Hồ là 'in màu trước, in nét sau cùng': các ván màu thảo mộc được in dằn trước, mỗi màu in xong phải chờ se khô ráo rồi mới in tiếp màu sau; cuối cùng mới in 'Ván nét' màu than đen để định hình toàn bộ đường nét tác phẩm. Thứ tự cụ thể giữa các ván màu (vàng, đỏ, xanh) có thể khác nhau tùy xưởng và từng tác phẩm [chưa có tài liệu xác minh thứ tự màu cố định duy nhất]. Nghệ nhân dùng tay dằn ép đều lực từ giữa ra mép để màu ngấm sâu vào thớ giấy điệp.",
    folkInsight: "Tiếng 'lộp bộp' dằn tranh trên thớt gỗ và hương thơm thoang thoảng của hồ nếp mới in tạo nên nét duyên dáng khó quên của làng nghề."
  },
  {
    step: 5,
    title: "Hoàn thiện và bảo quản tác phẩm",
    subtitle: "Đón gió sông Đuống hong khô tranh nơi bóng râm mát mẻ",
    imagePath: "/paintings/dan_ga_me_con.jpg",
    imageCaption: "Tác phẩm hoàn thiện lưu giữ tại Bảo tàng Mỹ thuật Việt Nam",
    imageCredit: "Hiện vật Bảo tàng Mỹ thuật Việt Nam (CC0 Daderot)",
    tools: ["Sào tre phơi", "Kẹp tre mảnh", "Dây buộc rơm nếp"],
    materials: ["Gió trời tự nhiên", "Bóng râm thông thoáng", "Thếp giấy dó lưu trữ"],
    description: "Tranh sau khi in đủ các lớp màu và nét đen than được mang đi phơi cẩn thận trên các sào tre trong sân hoặc hiên đình làng.",
    detailedProcess: "Tranh Đông Hồ tuyệt đối không được phơi dưới ánh nắng gắt trực tiếp vì sẽ làm cong vênh giấy dó và nứt lớp hồ điệp. Nghệ nhân phơi tranh nơi râm mát, thoáng gió sông Đuống để màu khô tự nhiên, giữ trọn độ phẳng phiu và ánh điệp lóng lánh. Sau đó tranh được xếp thành từng thếp gọn gàng.",
    folkInsight: "Một bức tranh hoàn hảo phải phẳng phiu, lớp điệp không rạn nứt, màu sắc tươi trong và ngát hương thơm dịu của đồng quê."
  }
];

// 3. BẢNG MÀU TỰ NHIÊN
export const colorPigments: ColorPigment[] = [
  {
    id: "do-son",
    name: "Đỏ Son",
    hex: "#A9362B",
    darkHex: "#C44336",
    source: "Sỏi son / Đá son non",
    sourceDetail: "Khai thác từ các mỏ đất son tự nhiên ở vùng đồi núi Nghĩa Phương (Lục Nam, Bắc Giang) hoặc núi Thiên Thai (Bắc Ninh).",
    preparation: "Đá son được đãi sạch tạp chất, tán nhỏ trong cối rồi nghiền nhuyễn với nước trên bàn đá. Gạn lấy phần bột mịn lơ lửng phơi khô rồi hòa cùng hồ nếp quánh đặc khi in.",
    symbolism: "Biểu trưng cho may mắn, phúc lộc, hỷ sự, nguồn năng lượng mặt trời và sự ấm no trong năm mới.",
    artworkUsage: "Màu áo của Trạng Chuột, mào gà Đại Cát, yếm bé gái trong Phú Quý, lưng đàn lợn âm dương.",
    historicalNote: "Một số nghệ nhân xưa còn dùng gỗ vang hoặc quả dành dành pha son để tạo sắc cam ấm linh hoạt."
  },
  {
    id: "vang-dat",
    name: "Vàng Đất & Vàng Hòe",
    hex: "#D5A33B",
    darkHex: "#E5B246",
    source: "Nụ hoa hòe sao chín hoặc quả dành dành",
    sourceDetail: "Nụ hoa hòe mùa hè phơi khô hoặc quả dành dành chín vàng từ bụi cây bờ rào đồng bằng Bắc Bộ.",
    preparation: "Nụ hoa hòe được sao vàng cánh gián trên chảo gang nhỏ lửa, đun sôi lấy nước cốt sánh đậm thơm ngát mùi thảo mộc, trộn với hồ nếp sánh.",
    symbolism: "Tượng trưng cho sự giàu sang, thịnh vượng, ánh nắng ấm áp của vụ mùa bội thu và phẩm hạnh thanh cao.",
    artworkUsage: "Thân gà Đại Cát, vạt váy người phụ nữ trong Hứng Dừa, đồng tiền may mắn, hoa sen nở rộ.",
    historicalNote: "Màu vàng từ hoa hòe rất bền màu, trải qua hàng chục năm vẫn giữ sắc vàng óng dịu dàng không hề phai úa."
  },
  {
    id: "xanh-tram",
    name: "Xanh Trầm & Xanh Chàm",
    hex: "#355A50",
    darkHex: "#457266",
    source: "Lá cây chàm hoặc ten rỉ đồng ngâm chua",
    sourceDetail: "Lá chàm vùng trung du Bắc Bộ hoặc phôi đồng tự nhiên oxy hóa ngâm trong dấm chua.",
    preparation: "Lá chàm ngâm nước ngọt pha chút vôi tôi để lắng cặn chàm dẻo. Hoặc ngâm phôi đồng trong dấm chua tạo thành muối đồng (verdigris) cho ra sắc xanh gỉ đồng mát rượi độc đáo.",
    symbolism: "Tượng trưng cho sự sinh sôi, mầm non cây cối, dòng nước mát lành, hòa bình và sức sống thanh xuân bất tận.",
    artworkUsage: "Lá chuối, tàu cau, đầm sen, đuôi gà chọi, lọng che của Trạng Chuột vinh quy.",
    historicalNote: "Tùy tỷ lệ pha chế, sắc xanh Đông Hồ dao động từ xanh lục nhạt mát mắt đến xanh chàm sẫm huyền bí."
  },
  {
    id: "den-muc",
    name: "Đen Mực Than Tre",
    hex: "#211E1B",
    darkHex: "#151312",
    source: "Than lá tre khô ủ chum hoặc than gỗ xoan",
    sourceDetail: "Lá tre già khô thu gom vào mùa hanh heo hoặc thân cành cây xoan đốt yếm khí.",
    preparation: "Lá tre được xếp chặt trong chum sành trát bùn kín nắp, đốt âm ỉ cho đến khi thành than mịn. Tán than trong cối nước rồi nghiền nhuyễn, lọc tro thô, trộn với hồ nếp dẻo quánh.",
    symbolism: "Sự vững chãi, tính kỷ luật, ranh giới rõ ràng, là bộ khung xương định hình nên toàn bộ linh hồn tác phẩm.",
    artworkUsage: "In toàn bộ ván nét viền bao bọc tác phẩm, râu mèo, chữ Hán đề tự, đuôi mắt, biểu cảm nhân vật.",
    historicalNote: "Màu đen than lá tre của Đông Hồ có độ óng lì tự nhiên, sâu thẳm mà êm đềm, không bị bóng nhờn hay chói gắt như mực công nghiệp."
  },
  {
    id: "giay-nga",
    name: "Giấy Ngà Điệp Xà Cừ",
    hex: "#F4EBDD",
    darkHex: "#E6D7C3",
    source: "Vỏ con sò điệp biển vùng duyên hải",
    sourceDetail: "Vỏ sò điệp đánh bắt từ vùng biển Quảng Ninh, Hải Phòng chuyển lên bến sông Đuống.",
    preparation: "Vỏ điệp rửa sạch bùn cát, phơi khô rồi cho vào cối đá giã vụn, nghiền trên bàn đá thành bột mịn như phấn. Khi trộn hồ nếp sánh, bột điệp giữ nguyên tinh thể vôi li ti tạo hiệu ứng phản xạ ánh sáng kỳ diệu.",
    symbolism: "Sự tinh khiết, tâm hồn mộc mạc và ánh hào quang hiền hòa của đất trời sông biển.",
    artworkUsage: "Lớp nền xoa khắp bề mặt tờ giấy dó, vệt viền xà cừ lấp lánh phản chiếu ánh sáng.",
    historicalNote: "Chính lớp điệp này đã truyền cảm hứng cho câu thơ thi sĩ Hoàng Cầm: 'Màu dân tộc sáng bừng trên giấy điệp'."
  }
];

// 4. DÒNG THỜI GIAN LỊCH SỬ LÀNG NGHỀ
export const timelineEvents: TimelineEvent[] = [
  {
    period: "Khởi nguồn mộc bản",
    year: "Thế kỷ XVI - XVII",
    title: "Sự hình thành nghề làm tranh bên dòng sông Đuống",
    description: "Nghề làm tranh mộc bản ra đời tại làng Mái (tên Nôm của làng Đông Hồ), ven bờ nam sông Đuống. Ban đầu, các dòng họ tự khắc ván in tranh cúng, tranh chúc tụng để phục vụ đời sống tâm linh và dịp Tết của cư dân đồng bằng Bắc Bộ.",
    highlight: "Sự hòa quyện giữa kỹ thuật khắc mộc bản và nguyên liệu thảo mộc bản địa.",
    locationNote: "Làng Đông Hồ, nay thuộc phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh."
  },
  {
    period: "Thời kỳ cực thịnh",
    year: "Thế kỷ XIX - Đầu thế kỷ XX",
    title: "Chợ tranh tháng Chạp và nét đẹp văn hóa Tết cổ truyền",
    description: "Cả làng gồm 17 dòng họ đều tham gia làm tranh. Vào tháng Chạp hàng năm, chợ tranh Đông Hồ họp náo nhiệt vào các phiên ngày 6, 11, 16, 21, 26 âm lịch. Thương lái và người dân khắp bốn phương tấp nập về mua tranh treo Tết.",
    highlight: "Câu ca dao bất hủ: 'Dù ai buôn bán trăm nghề / Nhớ ngày chợ hội thì về Song Hồ'.",
    locationNote: "Bến sông Đuống tấp nập thuyền bè chở giấy dó, vỏ điệp và mang tranh tỏa đi muôn nơi."
  },
  {
    period: "Biến động & Chuyển giao",
    year: "1945 - 1980",
    title: "Chiến tranh tàn phá và Hợp tác xã Tranh Ánh Hồng",
    description: "Năm 1944-1945, giặc tàn phá làng tranh, nhiều ván in quý cổ hàng trăm năm bị đốt cháy hoặc thất lạc. Năm 1967, Hợp tác xã Tranh Ánh Hồng được thành lập, quy tụ các nghệ nhân gạo cội phục hồi vốn cổ và xuất khẩu sang nhiều nước Đông Âu.",
    highlight: "Bảo tồn hàng trăm bản khắc gỗ cổ quý giá thoát khỏi nguy cơ tiêu hủy.",
    locationNote: "Xã Song Hồ, huyện Thuận Thành, tỉnh Hà Bắc (cũ)."
  },
  {
    period: "Nguy cơ mai một",
    year: "1990 - 2010",
    title: "Thách thức cơ chế thị trường & Chuyển dịch kinh tế",
    description: "Kinh tế thị trường và văn hóa nghe nhìn hiện đại khiến thú chơi tranh Tết suy giảm. Phần lớn người dân trong làng chuyển sang làm hàng mã do lợi nhuận cao. Chỉ còn số ít gia đình nghệ nhân tâm huyết kiên trì bám trụ giữ nghề mộc bản.",
    highlight: "Cuộc chiến âm thầm gìn giữ ván khắc gỗ cổ của các bậc cao niên.",
    locationNote: "Số gia đình làm tranh chỉ đếm trên đầu ngón tay."
  },
  {
    period: "Hồi sinh & Hồ sơ UNESCO",
    year: "2013 - Hiện nay",
    title: "Di sản Quốc gia & Đệ trình UNESCO bảo vệ khẩn cấp",
    description: "Nghề làm tranh dân gian Đông Hồ được công nhận là Di sản văn hóa phi vật thể Quốc gia (2013). Việt Nam đã hoàn thiện hồ sơ trình UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể cần được bảo vệ khẩn cấp. Trung tâm bảo tồn tranh Đông Hồ được đầu tư xây dựng khang trang.",
    highlight: "Sự chung tay của nhà nước, các nghệ nhân Nhân dân/Ưu tú và giới trẻ sáng tạo.",
    locationNote: "Phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh (chính thức lên phường từ 2023)."
  }
];

// 5. CẤU HÌNH TRÒ CHƠI 1: GHÉP TRANH ĐÔNG HỒ (JIGSAW PUZZLE)
export const puzzleConfigs: PuzzleGameConfig[] = [
  {
    id: "puzzle-ga-dai-cat",
    title: "Gà Đại Cát",
    imagePath: "/paintings/ga_dai_cat.jpg",
    difficulty: "3x3",
    gridSize: 3,
    description: "Ghép lại bức tranh chú gà trống oai vệ mang lại điềm lành lớn cho năm mới."
  },
  {
    id: "puzzle-lon-am-duong",
    title: "Đàn Lợn Âm Dương",
    imagePath: "/paintings/lon_am_duong.jpg",
    difficulty: "3x3",
    gridSize: 3,
    description: "Ghép lại đàn lợn béo tròn với những vòng xoáy âm dương tượng trưng cho sự no ấm."
  },
  {
    id: "puzzle-dam-cuoi-chuot",
    title: "Đám Cưới Chuột",
    imagePath: "/paintings/dam_cuoi_chuot.jpg",
    difficulty: "3x3",
    gridSize: 3,
    description: "Thử tài khéo léo ghép lại kiệt tác trào phúng đám cưới chuột rộn ràng."
  }
];

// 6. CÂU HỎI TRÒ CHƠI 2: GIẢI MÃ TRANH DÂN GIAN (QUIZ)
export const gameQuestions: GameQuestion[] = [
  {
    id: 1,
    artworkId: "ga-dai-cat",
    artName: "Gà Đại Cát",
    realImagePath: "/paintings/ga_dai_cat.jpg",
    categoryGroup: "Ước vọng và chúc tụng",
    question: "Hình tượng chú gà trống trong tranh 'Gà Đại Cát' biểu trưng cho những giá trị nào sau đây?",
    riddle: "Đầu đội vương miện lửa hồng / Gáy vang đánh thức vừng đông rạng ngời / Mang điều may mắn muôn nơi / Năm đức quân tử rạng ngời nghìn năm?",
    hint: "Quan sát hai chữ Hán trên tranh và đức tính người quân tử trong quan niệm phương Đông.",
    correctMeaning: "Chúc gia chủ đón điều may mắn lớn nhất năm mới và ca ngợi 5 đức tính cao quý: Văn, Vũ, Dũng, Nhân, Tín.",
    options: [
      "Chúc gia chủ đón điều may mắn lớn nhất năm mới và ca ngợi 5 đức tính cao quý: Văn, Vũ, Dũng, Nhân, Tín.",
      "Kêu gọi bà con nông dân thức dậy sớm làm việc đồng áng chăm chỉ.",
      "Cảnh báo người dân canh chừng trộm cắp gia cầm vào dịp Tết.",
      "Biểu thị trò chơi chọi gà trong hội xuân đầu năm."
    ],
    explanation: "Đúng rồi! Tranh 'Gà Đại Cát' mang ý nghĩa chúc phúc may mắn cực thịnh, đồng thời nhắc nhở con người rèn luyện Ngũ Đức: Văn (mào cờ), Vũ (cựa sắc), Dũng (dám đánh địch), Nhân (gọi đàn cùng ăn), Tín (gáy đúng canh giờ).",
    funFact: "Chữ 'Kê' (con gà) trong tiếng Hán phát âm gần giống chữ 'Cát' (cát tường, may mắn)."
  },
  {
    id: 2,
    artworkId: "dam-cuoi-chuot",
    artName: "Đám Cưới Chuột",
    realImagePath: "/paintings/dam_cuoi_chuot.jpg",
    categoryGroup: "Sinh hoạt và đời sống",
    question: "Tầng trên của bức tranh 'Đám Cưới Chuột' thể hiện điều gì giữa thế giới loài chuột và mèo?",
    riddle: "Kèn thổi rộn rã rước nàng dâu / Lễ vật dâng dâng cá với bồ câu / Mèo béo ngồi cười tay vuốt mép / Hòa hoãn cho qua việc hỷ êm?",
    hint: "Quan sát cử chỉ của chú chuột dâng cá chép, chim câu và vẻ mặt của lão Mèo già.",
    correctMeaning: "Châm biếm thói nhũng nhiễu của kẻ mạnh và ca ngợi ứng xử mềm mỏng, khôn khéo của người bình dân để giữ gìn hòa khí.",
    options: [
      "Châm biếm thói nhũng nhiễu của kẻ mạnh và ca ngợi ứng xử mềm mỏng, khôn khéo của người bình dân để giữ gìn hòa khí.",
      "Kể lại câu chuyện cổ tích mèo và chuột là bạn thân thiết từ xa xưa.",
      "Khuyên răn trẻ nhỏ không được bắt chuột hoặc ngược đãi động vật trong nhà.",
      "Mô tả nghi lễ cưới hỏi xa hoa của quan lại triều đình phong kiến."
    ],
    explanation: "Chính xác! Tranh mượn tiếng cười trào phúng để phản ánh thói hối lộ, lạm quyền, đồng thời ngợi ca trí thông minh khéo léo của người bình dân để bảo vệ hạnh phúc gia đình.",
    funFact: "Đây là bức tranh Đông Hồ được triển lãm nhiều nhất tại các bảo tàng mỹ thuật trên thế giới."
  },
  {
    id: 3,
    artworkId: "dan-lon-am-duong",
    artName: "Đàn Lợn Âm Dương",
    realImagePath: "/paintings/lon_am_duong.jpg",
    categoryGroup: "Động vật và thiên nhiên",
    question: "Hai vòng xoáy tròn trên lưng chú lợn mẹ và đàn con mang ý nghĩa triết học gì?",
    riddle: "Mẹ béo tròn ung dung nằm đó / Năm chú con tíu tít quây quần / Vòng xoáy xoay vần trên lưng áo / Cầu mong sung túc khắp gian trần?",
    hint: "Hai nửa màu sáng - tối tạo thành biểu tượng thái cực luân chuyển của tự nhiên.",
    correctMeaning: "Ước nguyện sinh sôi nảy nở, gia đình hòa thuận no đủ và triết lý âm dương hòa hợp của vũ trụ.",
    options: [
      "Ước nguyện sinh sôi nảy nở, gia đình hòa thuận no đủ và triết lý âm dương hòa hợp của vũ trụ.",
      "Quảng cáo giống lợn siêu nạc của các hộ nông dân làng Đông Hồ thời xưa.",
      "Dấu ấn sở hữu gia súc của từng dòng họ trong làng.",
      "Biểu thị năm Hợi trong chu kỳ 12 con giáp truyền thống."
    ],
    explanation: "Tuyệt vời! Hình ảnh đàn lợn béo tròn và xoáy âm dương thể hiện sự sinh sôi, thịnh vượng và sự cân bằng của đất trời.",
    funFact: "Người xưa thường mua bức tranh này dán ở góc chuồng lợn đêm Giao thừa để cầu đàn lợn mau lớn, không ốm đau."
  },
  {
    id: 4,
    artworkId: "hung-dua",
    artName: "Hứng Dừa",
    realImagePath: "/paintings/hung_dua.jpg",
    categoryGroup: "Sinh hoạt và đời sống",
    question: "Hành động vén váy hứng dừa của người vợ trẻ mang ẩn ý văn hóa tốt đẹp nào?",
    riddle: "Chồng trèo ngọn dừa tay thoăn thoắt / Vợ đứng gốc cây váy hứng tròn / Hai đứa con thơ cười khúc khích / Hạnh phúc đơn sơ đậm nghĩa tình?",
    hint: "Quan sát sự phối hợp ăn ý giữa người chồng trên ngọn dừa và người vợ phía dưới.",
    correctMeaning: "Ca ngợi hạnh phúc gia đình mộc mạc, sự đồng lòng 'thuận vợ thuận chồng' và ước vọng phồn thực tốt lành.",
    options: [
      "Ca ngợi hạnh phúc gia đình mộc mạc, sự đồng lòng 'thuận vợ thuận chồng' và ước vọng phồn thực tốt lành.",
      "Cảnh báo nguy cơ tai nạn lao động khi trèo cây không có dây bảo hiểm.",
      "Giới thiệu kỹ thuật thu hoạch dừa xiêm của đồng bằng châu thổ.",
      "Hội thi thể thao bắt dừa của thanh niên làng quê thời xưa."
    ],
    explanation: "Rất chính xác! Bức tranh ngợi ca sức lao động khỏe khoắn, tình cảm vợ chồng thắm thiết và tiếng cười lạc quan trong cuộc sống lam lũ.",
    funFact: "Hình ảnh người vợ vén váy hứng dừa mang ẩn dụ phồn thực rất tinh tế, cầu mong con đàn cháu đống."
  },
  {
    id: 5,
    artworkId: "vinh-hoa",
    artName: "Vinh Hoa – Phú Quý",
    realImagePath: "/paintings/vinh_hoa.jpg",
    categoryGroup: "Ước vọng và chúc tụng",
    question: "Tại sao trong tranh 'Phú Quý', bé gái lại ôm chú vịt bên cạnh đóa hoa sen?",
    riddle: "Bé trai ôm gà, cúc vàng nở / Bé gái ôm vịt, ngát hương sen / Mong con thành tài lòng thơm thảo / Rạng rỡ gia môn vạn phúc bền?",
    hint: "Tên chữ Hán của vịt là 'Áp' (áp liên) đồng âm với lời chúc thi cử.",
    correctMeaning: "Chữ 'Áp' (vịt) có chữ 'Giáp' chúc thi đỗ đầu bảng, kết hợp hoa sen chúc tâm hồn luôn thanh cao, trong sạch.",
    options: [
      "Chữ 'Áp' (vịt) có chữ 'Giáp' chúc thi đỗ đầu bảng, kết hợp hoa sen chúc tâm hồn luôn thanh cao, trong sạch.",
      "Vịt và hoa sen là đặc sản ẩm thực nổi tiếng vùng Bắc Ninh.",
      "Hướng dẫn trò chơi dân gian bịt mắt bắt vịt trong hồ sen ngày hội làng.",
      "Nhắc nhở trẻ em phải thường xuyên tắm rửa sạch sẽ bên hồ sen."
    ],
    explanation: "Đúng rồi! Cụm từ 'Áp liên' (vịt bên sen) đồng âm với 'Liên khoa giáp đệ' – lời chúc thi cử liên tiếp đỗ đạt cao nhất, rạng danh tổ tông.",
    funFact: "Cặp tranh Vinh Hoa - Phú Quý luôn được in và treo đối xứng hai bên gian thờ hoặc cửa chính trong ngày Tết."
  },
  {
    id: 6,
    artworkId: "thay-do-coc",
    artName: "Thầy Đồ Cóc",
    realImagePath: "/paintings/thay_do_coc.jpg",
    categoryGroup: "Châm biếm và phản ánh xã hội",
    question: "Hình tượng 'Thầy Đồ Cóc' bụng phệ ngồi sập gụ mượn tiếng cười dân gian để phản ánh điều gì?",
    riddle: "Chòi tranh sập gụ bụng phệ ngồi / Học trò quỳ gối dâng đĩa cua / Roi mây cầm sẵn răn kỷ luật / Tôn sư trọng đạo chớ lơ là?",
    hint: "Quan sát sự đối lập giữa vẻ đạo mạo bệ vệ của thầy và những trò nghịch ngợm của học trò cóc con.",
    correctMeaning: "Đề cao tinh thần hiếu học, tôn sư trọng đạo, đồng thời châm biếm thói hủ nho, đạo mạo hình thức của một số thầy đồ xưa.",
    options: [
      "Đề cao tinh thần hiếu học, tôn sư trọng đạo, đồng thời châm biếm thói hủ nho, đạo mạo hình thức của một số thầy đồ xưa.",
      "Kể lại tích cổ loài cóc đòi mưa thuận gió hòa cho nhân gian.",
      "Nhắc nhở học trò không được mang đồ ăn vặt như cua đồng vào lớp học.",
      "Phê bình cơ sở vật chất phòng học thời xưa còn sơ sài."
    ],
    explanation: "Chính xác! Tranh vừa thể hiện nét đẹp tôn sư trọng đạo của dân tộc, vừa mang nụ cười châm biếm hóm hỉnh đặc trưng của người bình dân.",
    funFact: "Hình tượng 'thầy đồ cóc' xuất hiện trong rất nhiều truyện ngụ ngôn và tranh mộc bản dân gian vùng châu thổ sông Hồng."
  }
];

// 7. THÔNG TIN NGHỆ NHÂN TIÊU BIỂU VÀ TRUNG TÂM BẢO TỒN (KHU VỰC 9)
export interface ArtisanInfo {
  title: string;
  name: string;
  contribution: string;
  quote: string;
}

export const artisansList: ArtisanInfo[] = [
  {
    title: "Nghệ nhân Nhân dân",
    name: "Nguyễn Đăng Chế",
    contribution: "Hơn 60 năm gắn bó với nghề làm tranh mộc bản. Ông đã bền bỉ sưu tầm, phục chế và lưu giữ được hàng trăm bản khắc gỗ cổ quý giá từ thời phong kiến, đồng thời xây dựng Trung tâm Bảo tồn Tranh Đông Hồ tư nhân đón hàng ngàn lượt khách quốc tế mỗi năm.",
    quote: "Tranh Đông Hồ là hồn cốt của cha ông. Chừng nào người Việt còn ăn Tết thì chừng đó tranh Đông Hồ vẫn còn sống."
  },
  {
    title: "Nghệ nhân Ưu tú",
    name: "Nguyễn Hữu Quả",
    contribution: "Nối nghiệp gia đình nhiều đời làm tranh, nghệ nhân Nguyễn Hữu Quả là bậc thầy về kỹ thuật khắc ván nét và phối chế màu thảo mộc tự nhiên theo phương pháp bí truyền. Ông cũng là nhân chứng văn hóa quan trọng tham gia xây dựng hồ sơ di sản trình UNESCO.",
    quote: "Mỗi nhát ve đục xuống thớ gỗ thị là một lời tâm tình của người nghệ nhân với đất nước, quê hương."
  },
  {
    title: "Thế hệ kế nghiệp trẻ",
    name: "Các nghệ nhân trẻ làng Song Hồ",
    contribution: "Tiếp nối thế hệ cha ông với tư duy sáng tạo mới: số hóa di sản tranh, tổ chức các lớp workshop trải nghiệm in mộc bản cho học sinh - sinh viên, đưa họa tiết dân gian vào các ấn phẩm thời trang, thiết kế đương đại và sản phẩm lưu niệm cao cấp.",
    quote: "Bảo tồn không phải là đóng băng di sản trong lồng kính, mà là để di sản tiếp tục thở trong nhịp sống hôm nay."
  }
];

export const visitingInfo = {
  centerName: "Trung tâm Bảo tồn và Trưng bày Tranh Dân gian Đông Hồ",
  address: "Phường Song Hồ, Thị xã Thuận Thành, Tỉnh Bắc Ninh (cách trung tâm Hà Nội khoảng 35km)",
  travelTips: "Từ Hà Nội đi qua cầu Đuống hoặc cầu Thanh Trì theo QL5/QL38 về hướng Thuận Thành. Có thể kết hợp tham quan Chùa Bút Tháp, Chùa Dâu và Làng gốm Phù Lãng trong tour di sản Kinh Bắc.",
  activities: [
    "Tham quan không gian trưng bày hàng ngàn mộc bản gỗ cổ từ thế kỷ XVIII - XIX.",
    "Trải nghiệm tự tay quét điệp, pha màu tự nhiên và dằn in tranh mộc bản mang về làm kỷ niệm.",
    "Gặp gỡ, trò chuyện và lắng nghe các nghệ nhân nhân dân chia sẻ chuyện nghề, chuyện làng.",
    "Không gian giáo dục trải nghiệm phù hợp cho các buổi học tập ngoại khóa của học sinh tiểu học, THCS và THPT."
  ]
};
