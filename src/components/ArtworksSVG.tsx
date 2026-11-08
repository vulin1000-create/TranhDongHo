/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ArtworksSVG.tsx - Đã loại bỏ hoàn toàn các hình vẽ SVG tự tạo
 * Thay thế bằng Canvas bóc tách ván in từ ảnh bản quét hiện vật thật.
 */

import React from 'react';
import { ArtworkWoodblockCanvas } from './ArtworkWoodblockCanvas.tsx';
import { masterpieces } from '../data/dongHoData.ts';

export { WoodblockCanvasSimulator as WoodblockPrintingCanvas } from './WoodblockCanvasSimulator.tsx';
export { ArtworkWoodblockCanvas } from './ArtworkWoodblockCanvas.tsx';

// COMPONENT ĐIỀU HƯỚNG HIỂN THỊ MỘC BẢN PHÂN TÍCH TỪ ẢNH BẢN QUÉT THẬT
export const ArtworkRenderer: React.FC<{ artworkId: string; className?: string; hoverEffect?: boolean }> = ({
  artworkId,
  className
}) => {
  const artwork = masterpieces.find(a => a.id === artworkId);
  const imagePath = artwork ? artwork.realImagePath : '/paintings/ga_dai_cat.jpg';
  const title = artwork ? artwork.title : 'Tranh dân gian Đông Hồ';

  return (
    <ArtworkWoodblockCanvas
      imagePath={imagePath}
      title={title}
      className={className}
    />
  );
};
