import { mergeImages } from "./canvas";
import getEXIFInfo from "./exif";
import { renderElementToImage } from "./html2img";
import { checkAndCreateFolder, readJPGFilesInFolder } from "./utils";

const folderPath = '';
const waterMarkerPath = '\\watermarker\\';
const resultPath = '\\result\\';

(async function main() {
    await checkAndCreateFolder(folderPath + waterMarkerPath);
    await checkAndCreateFolder(folderPath + resultPath);

    const files = await readJPGFilesInFolder(folderPath);
    files.forEach(async (file) => {
        const exif = getEXIFInfo(folderPath + '\\' + file);
        const fileName = file.split('.')[0];

        const waterPath = folderPath + waterMarkerPath + fileName + '.jpg';
        await renderElementToImage(exif, waterPath)
        mergeImages(folderPath + '\\' + file, waterPath, folderPath + resultPath + fileName + '.jpg');
    })
})();