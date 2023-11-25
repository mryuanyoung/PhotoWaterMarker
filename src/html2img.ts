import puppeteer from 'puppeteer';
import { readLocalHTMLFile } from './utils';
import { EXIFInfo } from './type';

const elementSelector = '#water-marker';

export async function renderElementToImage(exif: EXIFInfo, outputPath: string): Promise<void> {
  const html = await readLocalHTMLFile('./src/template.html')
  const browser = await puppeteer.launch({ headless: 'new' });

  const page = await browser.newPage();

  // 注入变量到页面的 window 对象中
  await page.evaluate((name, value) => {
    // 在页面的上下文中执行 JavaScript 代码
    (window as any)[name] = value;
  }, 'Fields', exif);

  await page.setContent(html);
  await page.waitForSelector(elementSelector);

  const element = await page.$(elementSelector);
  if (!element) {
    throw new Error(`找不到指定的元素：${elementSelector}`);
  }

  await element.screenshot({ path: outputPath });

  await browser.close();

  // console.log(`渲染结果已保存为：${outputImagePath}`);
}