import { createCanvas, loadImage } from 'canvas';
import { convertToJPEG, loadJPEGToBuffer } from './utils';

export async function mergeImages(originalImagePath: string, appendedImagePath: string, outputPath: string): Promise<Buffer> {
  // 加载原始图片和附加图片
  const buffer1 = await loadJPEGToBuffer(originalImagePath);
  const buffer2 = await loadJPEGToBuffer(appendedImagePath);
  const originalImage = await loadImage(buffer1);
  const appendedImage = await loadImage(buffer2);

  // 确保拼接的图片像素宽度与原图片一致
  const maxWidth = originalImage.width;
  const appendedImageWidth = appendedImage.width;
  const scaleRatio = maxWidth / appendedImageWidth;
  const appendedImageHeight = appendedImage.height * scaleRatio;

  // 创建画布并绘制原始图片和附加图片
  const canvas = createCanvas(maxWidth, originalImage.height + appendedImageHeight);
  const context = canvas.getContext('2d');
  context.drawImage(originalImage, 0, 0);
  context.drawImage(appendedImage, 0, originalImage.height, maxWidth, appendedImageHeight);

  // 将画布转换为图片数据
  const mergedImageData = canvas.toBuffer('image/jpeg', { quality: 1 });

  convertToJPEG(mergedImageData, outputPath);
  console.log('[生成成功]: ', originalImagePath)
  return mergedImageData;
}