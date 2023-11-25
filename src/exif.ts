import fs from 'fs';
import ExifReader from 'exifreader';
import { EXIFInfo, Fields } from './type';

// 读取 JPEG 图片的 EXIF 信息
function readExif(filePath: string) {
    const buffer = fs.readFileSync(filePath);
    const tags = ExifReader.load(buffer);

    const exifData: Record<string, string | number> = {};

    // 处理 EXIF 标签
    for (const tag in tags) {
        if (tags.hasOwnProperty(tag)) {
            exifData[tag] = tags[tag].description;
        }
    }

    return exifData;
}

function extractInfo(tags: any) {
    const info: any = {}

    Fields.forEach((key: string) => {
        info[key] = tags?.[key] || '';
    })

    return info as EXIFInfo;
}

function getEXIFInfo(path: string){
    const originalInfo = readExif(path);
    const exif = extractInfo(originalInfo)
    const dt = exif.DateTimeOriginal.split(' ');
    exif.DateTimeOriginal = dt[0].split(':').join('/');
    
    return exif;
}

export default getEXIFInfo;