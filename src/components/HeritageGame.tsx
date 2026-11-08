/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { puzzleConfigs, gameQuestions, PuzzleGameConfig } from '../data/dongHoData.ts';
import { Trophy, HelpCircle, CheckCircle, AlertCircle, RotateCcw, Sparkles, ArrowRight, Eye, Puzzle, Gamepad2, Timer, Award, Printer } from 'lucide-react';

export const HeritageGame: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'puzzle' | 'quiz'>('puzzle');

  // TRÒ CHƠI 1: GHÉP TRANH ĐÔNG HỒ (JIGSAW PUZZLE)
  const [selectedPuzzle, setSelectedPuzzle] = useState<PuzzleGameConfig>(puzzleConfigs[0]);
  const [tiles, setTiles] = useState<number[]>([]);
  const [selectedTileIndex, setSelectedTileIndex] = useState<number | null>(null);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isPuzzleCompleted, setIsPuzzleCompleted] = useState<boolean>(false);
  const [showSampleImage, setShowSampleImage] = useState<boolean>(false);

  // Khởi tạo và xáo trộn mảnh ghép
  const initializePuzzle = (config: PuzzleGameConfig) => {
    const totalTiles = config.gridSize * config.gridSize;
    let initialTiles = Array.from({ length: totalTiles }, (_, i) => i);
    
    // Thuật toán Fisher-Yates xáo trộn đảm bảo không trùng với ban đầu
    let shuffled = [...initialTiles];
    let isSolved = true;
    while (isSolved) {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      isSolved = shuffled.every((val, idx) => val === idx);
    }

    setTiles(shuffled);
    setSelectedTileIndex(null);
    setMovesCount(0);
    setElapsedTime(0);
    setIsTimerRunning(true);
    setIsPuzzleCompleted(false);
  };

  useEffect(() => {
    initializePuzzle(selectedPuzzle);
  }, [selectedPuzzle]);

  // Bộ đếm thời gian
  useEffect(() => {
    let interval: number | undefined;
    if (isTimerRunning && !isPuzzleCompleted) {
      interval = window.setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isPuzzleCompleted]);

  // Xử lý đổi chỗ 2 mảnh ghép khi nhấn chọn
  const handleTileClick = (index: number) => {
    if (isPuzzleCompleted) return;

    if (selectedTileIndex === null) {
      setSelectedTileIndex(index);
    } else {
      if (selectedTileIndex !== index) {
        // Đổi chỗ hai mảnh
        const newTiles = [...tiles];
        const temp = newTiles[selectedTileIndex];
        newTiles[selectedTileIndex] = newTiles[index];
        newTiles[index] = temp;
        setTiles(newTiles);
        setMovesCount(prev => prev + 1);

        // Kiểm tra chiến thắng
        const won = newTiles.every((val, idx) => val === idx);
        if (won) {
          setIsPuzzleCompleted(true);
          setIsTimerRunning(false);
        }
      }
      setSelectedTileIndex(null);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // TRÒ CHƠI 2: GIẢI MÃ TRANH DÂN GIAN (QUIZ)
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [isSubmittedName, setIsSubmittedName] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const currentQ = gameQuestions[currentQuizIndex];
  const isQuizFinished = currentQuizIndex >= gameQuestions.length;

  const handleSelectQuizOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQ.correctMeaning) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setCurrentQuizIndex(prev => prev + 1);
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setQuizScore(0);
    setShowCertificate(false);
    setIsSubmittedName(false);
  };

  return (
    <section id="interactive-game" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] dark:bg-[#211E1B] transition-colors border-t border-stone-300 dark:border-stone-800">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* TIÊU ĐỀ KHU VỰC */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A9362B] dark:text-[#E05344]">
            <Gamepad2 className="w-4 h-4" />
            <span>Khu vực 8 · Không gian trải nghiệm tương tác số</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
            Em Là Người Khám Phá Di Sản
          </h2>
          <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            Học thông qua trải nghiệm thực tế: tự tay ghép lại các bản khắc mộc bản hoặc giải mã câu đố đồng dao để nhận Giấy chứng nhận danh dự của không gian [SẮC ĐIỆP LÀNG HỒ].
          </p>
        </div>

        {/* NÚT CHUYỂN ĐỔI GIỮA 2 TRÒ CHƠI */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('puzzle')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'puzzle'
                ? 'bg-[#A9362B] text-white shadow-md'
                : 'bg-white dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
            }`}
          >
            <Puzzle className="w-4 h-4" />
            <span>Trò chơi 1: Ghép tranh Đông Hồ</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'quiz'
                ? 'bg-[#A9362B] text-white shadow-md'
                : 'bg-white dark:bg-[#30251F] text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-400'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Trò chơi 2: Giải mã tranh dân gian</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TRÒ CHƠI 1: GHÉP TRANH ĐÔNG HỒ (JIGSAW PUZZLE) */}
        {/* ========================================================= */}
        {activeTab === 'puzzle' && (
          <div className="bg-white dark:bg-[#30251F] rounded-xl woodcut-border p-6 sm:p-8 space-y-6">
            {/* LỰA CHỌN TÁC PHẨM GHÉP */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-semibold text-[#A9362B] dark:text-[#E05344] uppercase tracking-wide">
                  Chọn tác phẩm để ghép:
                </div>
                <div className="flex flex-wrap gap-2">
                  {puzzleConfigs.map((cfg) => (
                    <button
                      key={cfg.id}
                      onClick={() => setSelectedPuzzle(cfg)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                        selectedPuzzle.id === cfg.id
                          ? 'bg-[#A9362B] text-white'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      {cfg.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* BỘ ĐẾM THỜI GIAN & LƯỢT ĐI */}
              <div className="flex items-center gap-4 text-xs font-bold text-stone-700 dark:text-stone-300 bg-[#F4EBDD] dark:bg-stone-900 px-4 py-2 rounded-lg border border-stone-300 dark:border-stone-700">
                <span className="flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-[#A9362B]" />
                  <span>{formatTime(elapsedTime)}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Lượt di chuyển: {movesCount}</span>
              </div>
            </div>

            {/* HƯỚNG DẪN & TIỆN ÍCH */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                <strong>Cách chơi:</strong> Nhấp vào một mảnh ghép để chọn (viền đỏ), sau đó nhấp vào mảnh thứ hai để <strong>đổi chỗ</strong> cho nhau cho đến khi tạo thành bức tranh hoàn chỉnh!
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSampleImage(!showSampleImage)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#355A50]" />
                  <span>{showSampleImage ? "Ẩn tranh mẫu" : "Xem tranh mẫu"}</span>
                </button>
                <button
                  onClick={() => initializePuzzle(selectedPuzzle)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title="Xáo trộn lại từ đầu"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xáo lại</span>
                </button>
              </div>
            </div>

            {/* HÌNH TRANH MẪU KHI BẬT */}
            {showSampleImage && (
              <div className="p-3 bg-[#F4EBDD] dark:bg-stone-900 rounded-lg border border-stone-300 dark:border-stone-700 max-w-xs mx-auto text-center space-y-1.5 animate-in fade-in">
                <div className="text-[11px] font-semibold text-stone-700 dark:text-stone-300">
                  Tranh mẫu: {selectedPuzzle.title}
                </div>
                <img
                  src={selectedPuzzle.imagePath}
                  alt={selectedPuzzle.title}
                  className="w-full h-auto rounded border border-stone-300 object-contain max-h-48 mx-auto"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/paintings/ga_dai_cat.jpg';
                  }}
                />
              </div>
            )}

            {/* KHUNG LƯỚI GHÉP TRANH 3x3 */}
            <div className="relative max-w-md mx-auto aspect-square rounded-lg overflow-hidden border-4 border-stone-800/80 dark:border-stone-200/40 shadow-xl bg-stone-200 dark:bg-stone-800">
              <div className="grid grid-cols-3 grid-rows-3 w-full h-full gap-1 p-1 bg-stone-400 dark:bg-stone-700">
                {tiles.map((tilePos, index) => {
                  const isSelected = selectedTileIndex === index;
                  const isCorrect = tilePos === index;

                  // Tính toán vị trí cắt ảnh theo hàng và cột gốc
                  const origRow = Math.floor(tilePos / 3);
                  const origCol = tilePos % 3;
                  const xPercent = origCol * 50; // 0%, 50%, 100%
                  const yPercent = origRow * 50;

                  return (
                    <button
                      key={index}
                      onClick={() => handleTileClick(index)}
                      className={`relative w-full h-full overflow-hidden transition-all duration-150 cursor-pointer rounded-sm ${
                        isSelected
                          ? 'ring-4 ring-[#A9362B] scale-[0.96] z-10 shadow-lg'
                          : 'hover:opacity-90 active:scale-95'
                      }`}
                      style={{
                        backgroundImage: `url(${selectedPuzzle.imagePath})`,
                        backgroundSize: '300% 300%',
                        backgroundPosition: `${xPercent}% ${yPercent}%`,
                      }}
                    >
                      {/* Huy hiệu xác nhận nếu mảnh đã nằm đúng vị trí */}
                      {isCorrect && (
                        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-[10px] font-bold shadow pointer-events-none">
                          ✓
                        </div>
                      )}

                      {/* Hiển thị số thứ tự gợi ý nhẹ */}
                      <span className="absolute top-1 left-1 px-1 rounded bg-black/40 text-white text-[9px] pointer-events-none">
                        {index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* MÀN HÌNH HOÀN THÀNH GHÉP TRANH */}
              {isPuzzleCompleted && (
                <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center text-white space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-serif-heritage text-[#D5A33B]">
                    Chúc mừng bạn đã ghép xong!
                  </h4>
                  <p className="text-xs text-stone-200">
                    Bạn đã hoàn thành bức tranh <strong>{selectedPuzzle.title}</strong> sau <strong>{movesCount}</strong> lượt di chuyển trong <strong>{formatTime(elapsedTime)}</strong>.
                  </p>
                  <button
                    onClick={() => initializePuzzle(selectedPuzzle)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded-lg shadow-md transition-colors"
                  >
                    Chơi lại tác phẩm này
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TRÒ CHƠI 2: GIẢI MÃ TRANH DÂN GIAN (QUIZ) */}
        {/* ========================================================= */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-[#30251F] rounded-xl woodcut-border p-6 sm:p-8 space-y-8">
            {!isQuizFinished ? (
              <>
                {/* THANH TIẾN TRÌNH & ĐIỂM SỐ */}
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-400">
                    <HelpCircle className="w-4 h-4 text-[#A9362B]" />
                    <span>Câu đố {currentQuizIndex + 1} / {gameQuestions.length}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800 dark:text-stone-200 bg-[#F4EBDD] dark:bg-stone-900 px-3.5 py-1.5 rounded-full border border-stone-300 dark:border-stone-700">
                    <Trophy className="w-3.5 h-3.5 text-[#D5A33B]" />
                    <span>Điểm: {quizScore} / {gameQuestions.length}</span>
                  </div>
                </div>

                {/* KHUNG CÂU HỎI & TRANH THỰC TẾ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* CỘT TRANH THẬT ĐỐ (5 CỘT) */}
                  <div className="md:col-span-5 flex flex-col items-center">
                    <div className="w-full max-w-xs aspect-[4/3] rounded-lg woodcut-border p-2 bg-[#F4EBDD] dark:bg-[#211E1B] flex items-center justify-center overflow-hidden">
                      <img
                        src={currentQ.realImagePath}
                        alt={currentQ.artName}
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/paintings/dam_cuoi_chuot.jpg';
                        }}
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-sm font-serif-heritage font-bold text-stone-900 dark:text-stone-100">
                        {currentQ.artName}
                      </div>
                      <div className="text-[11px] text-[#A9362B] dark:text-[#E05344]">
                        Nhóm: {currentQ.categoryGroup}
                      </div>
                    </div>
                  </div>

                  {/* CỘT CÂU ĐỐ & ĐÁP ÁN (7 CỘT) */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    {/* Câu đố đồng dao */}
                    <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border-l-4 border-[#A9362B] space-y-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#A9362B] dark:text-[#E05344]">
                        Câu đố đồng dao dân gian:
                      </div>
                      <p className="text-sm italic font-serif-heritage text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-line">
                        "{currentQ.riddle}"
                      </p>
                      
                      <div className="pt-1.5 flex items-center justify-between text-[11px]">
                        <button
                          onClick={() => setShowHint(!showHint)}
                          className="text-[#355A50] hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>{showHint ? "Ẩn gợi ý" : "💡 Xem gợi ý"}</span>
                        </button>
                        {showHint && (
                          <span className="text-stone-600 dark:text-stone-400 italic">
                            Gợi ý: {currentQ.hint}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 leading-snug">
                      {currentQ.question}
                    </div>

                    {/* Các lựa chọn đáp án */}
                    <div className="space-y-2.5">
                      {currentQ.options.map((opt, idx) => {
                        const isCorrect = opt === currentQ.correctMeaning;
                        const isChosen = opt === selectedOption;

                        let btnStyle = 'bg-white dark:bg-[#211E1B] border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-[#A9362B]';
                        if (isAnswered) {
                          if (isCorrect) {
                            btnStyle = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium';
                          } else if (isChosen && !isCorrect) {
                            btnStyle = 'bg-red-50 dark:bg-red-950/50 border-red-500 text-red-900 dark:text-red-200';
                          } else {
                            btnStyle = 'opacity-40 border-stone-200 dark:border-stone-800 text-stone-500';
                          }
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectQuizOption(opt)}
                            disabled={isAnswered}
                            className={`w-full p-3 text-left text-xs sm:text-sm rounded-lg border transition-all flex items-start gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* GIẢI THÍCH CHI TIẾT SAU KHI CHỌN */}
                    {isAnswered && (
                      <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-700 space-y-2 animate-in fade-in duration-200">
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          {selectedOption === currentQ.correctMeaning ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-700 dark:text-emerald-400">Chính xác! Bạn rất am hiểu di sản.</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4 text-red-600" />
                              <span className="text-red-700 dark:text-red-400">Chưa chính xác, cùng xem giải thích nhé!</span>
                            </>
                          )}
                        </div>

                        <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                          {currentQ.explanation}
                        </p>

                        <div className="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-stone-200 dark:border-stone-800">
                          <strong>Góc hiểu biết thêm:</strong> {currentQ.funFact}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={handleNextQuizQuestion}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded transition-colors"
                          >
                            <span>{currentQuizIndex + 1 === gameQuestions.length ? 'Xem tổng kết thử thách' : 'Câu hỏi tiếp theo'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* MÀN HÌNH TỔNG KẾT VÀ TRAO CHỨNG NHẬN */
              <div className="text-center space-y-6 max-w-2xl mx-auto py-4">
                <div className="w-16 h-16 rounded-full bg-[#D5A33B]/10 text-[#D5A33B] mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-heritage text-stone-900 dark:text-stone-100">
                    Chúc mừng bạn đã hoàn thành chuyến giải mã di sản!
                  </h3>
                  <p className="text-base text-stone-600 dark:text-stone-400">
                    Kết quả của bạn: Trả lời đúng <strong className="text-[#A9362B] dark:text-[#E05344] text-xl">{quizScore}</strong> / {gameQuestions.length} câu đố dân gian.
                  </p>
                </div>

                {/* XẾP HẠNG DANH HIỆU */}
                <div className="p-4 bg-[#F4EBDD] dark:bg-[#211E1B] rounded-lg border border-stone-300 dark:border-stone-700">
                  <div className="text-xs uppercase tracking-wider text-stone-500">Danh hiệu [SẮC ĐIỆP LÀNG HỒ] trao tặng:</div>
                  <div className="text-xl font-bold font-serif-heritage text-[#A9362B] dark:text-[#E05344] mt-1">
                    {quizScore === gameQuestions.length
                      ? '🏅 Nhà Khám Phá Di Sản Xuất Sắc'
                      : quizScore >= 4
                      ? '🥈 Nhà Khám Phá Di Sản Triển Vọng'
                      : '🥉 Bạn Trẻ Yêu Mỹ Thuật Dân Gian'}
                  </div>
                </div>

                {/* NHẬN BẰNG KHEN / GIẤY CHỨNG NHẬN ĐIỆN TỬ */}
                {!isSubmittedName ? (
                  <div className="p-5 bg-stone-50 dark:bg-stone-900/60 rounded-lg border border-stone-300 dark:border-stone-700 max-w-md mx-auto space-y-3">
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300">
                      Điền họ và tên của bạn để nhận Giấy chứng nhận danh dự:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Minh Anh"
                        className="flex-1 px-3 py-2 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-[#A9362B]"
                      />
                      <button
                        onClick={() => {
                          if (userName.trim()) {
                            setIsSubmittedName(true);
                            setShowCertificate(true);
                          }
                        }}
                        disabled={!userName.trim()}
                        className="px-4 py-2 text-xs font-semibold text-white bg-[#355A50] hover:bg-[#28453D] rounded disabled:opacity-40 transition-colors"
                      >
                        Nhận chứng nhận
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* KHUNG GIẤY CHỨNG NHẬN DI SẢN */}
                {showCertificate && (
                  <div className="p-8 bg-[#F4EBDD] text-stone-900 rounded-xl border-8 border-double border-[#A9362B] shadow-2xl max-w-lg mx-auto text-center space-y-4">
                    <div className="text-[11px] tracking-widest uppercase font-semibold text-[#A9362B]">
                      [SẮC ĐIỆP LÀNG HỒ] – BẢO TÀNG SỐ TRANH DÂN GIAN ĐÔNG HỒ
                    </div>
                    <div className="text-2xl font-bold font-serif-heritage text-[#A9362B]">
                      GIẤY CHỨNG NHẬN DI SẢN
                    </div>
                    <div className="text-xs italic text-stone-600">Trân trọng chứng nhận:</div>
                    <div className="text-xl font-bold font-serif-heritage text-stone-900 border-b-2 border-stone-400 pb-1 max-w-xs mx-auto">
                      {userName || "Người Khám Phá Di Sản"}
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed px-4">
                      Đã hoàn thành xuất sắc chương trình khám phá lịch sử mộc bản, bảng màu tự nhiên và giải mã thành công các giá trị văn hóa của dòng tranh dân gian Đông Hồ.
                    </p>
                    <div className="pt-4 flex justify-between items-center text-[11px] text-stone-600 border-t border-stone-300">
                      <span>Cấp ngày: {new Date().toLocaleDateString('vi-VN')}</span>
                      <span className="font-serif-heritage font-bold text-[#A9362B]">Song Hồ · Bắc Ninh</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {showCertificate && (
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#A9362B] hover:bg-[#8D2D24] rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>In / Lưu Giấy Chứng Nhận</span>
                    </button>
                  )}

                  <button
                    onClick={handleRestartQuiz}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại bài trắc nghiệm</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
