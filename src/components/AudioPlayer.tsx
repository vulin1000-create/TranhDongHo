/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Bộ phát âm thanh nhạc ngũ cung dân gian truyền thống (Web Audio API)
 * Tạo chuông trúc & giai điệu ngũ cung Việt Nam (Hò, Xự, Xang, Xê, Cống)
 */

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const TraditionalAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Thang âm ngũ cung Bắc Bộ: Đô (C4), Rê (D4), Mi (E4), Sol (G4), La (A4), Đô (C5)
  const pentatonicScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

  const playPentatonicChime = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    // Chọn ngẫu nhiên 1-2 nốt hòa âm
    const freq1 = pentatonicScale[Math.floor(Math.random() * pentatonicScale.length)];
    const freq2 = pentatonicScale[Math.floor(Math.random() * pentatonicScale.length)];

    const playTone = (freq: number, delay: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Giả lập tiếng đàn tranh/chuông gió tre mộc mạc
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);

      // Envelope âm thanh: Attack nhanh, Decay dài êm dịu
      gain.gain.setValueAtTime(0.001, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.06, now + delay + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 2.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 2.5);
    };

    playTone(freq1, 0);
    if (Math.random() > 0.4) {
      playTone(freq2, 0.25);
    }
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
      playPentatonicChime();

      // Chơi đều đặn chuông trúc mỗi 3.5 - 6 giây
      timerRef.current = window.setInterval(() => {
        playPentatonicChime();
      }, 4200);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
        isPlaying 
          ? 'bg-[#B83227]/10 text-[#B83227] dark:bg-[#B83227]/20 dark:text-[#E05344] border border-[#B83227]/30' 
          : 'bg-stone-200/60 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-300/80'
      }`}
      title={isPlaying ? "Tắt âm thanh nhạc ngũ cung dân gian" : "Bật âm thanh chuông trúc ngũ cung mộc mạc"}
      aria-label="Điều khiển âm thanh dân gian"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#B83227]" />
          <span className="hidden sm:inline">Âm thanh: Đang phát</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-stone-500" />
          <span className="hidden sm:inline">Âm thanh: Tắt</span>
        </>
      )}
    </button>
  );
};
