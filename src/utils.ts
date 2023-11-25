import fs from 'fs';
import path from 'path';

export async function readLocalHTMLFile(filePath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    });
}

export async function convertToJPEG(buffer: Buffer, outputPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.writeFile(outputPath, buffer, (error) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
}


export async function loadJPEGToBuffer(filePath: string): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    });
}

export async function checkAndCreateFolder(folderPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.access(folderPath, (error) => {
            if (!error) {
                // 文件夹已存在，删除它
                fs.rmdir(folderPath, { recursive: true }, (error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    // 删除成功后，创建新的文件夹
                    createFolder();
                });
            } else {
                // 文件夹不存在，直接创建
                createFolder();
            }
        });

        function createFolder() {
            fs.mkdir(folderPath, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        }
    });
}


export async function readJPGFilesInFolder(folderPath: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(folderPath, (error, files) => {
            if (error) {
                reject(error);
                return;
            }

            const exts = ['.jpg', '.jpeg'];
            const jpgFiles = files.filter((file) => exts.includes(path.extname(file).toLowerCase()));
            resolve(jpgFiles);
        });
    });
}
