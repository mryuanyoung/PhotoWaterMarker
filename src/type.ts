export const Fields = [
    'Make',
    'Model',
    'DateTimeOriginal',
    'ExposureTime',
    'FNumber',
    'ISOSpeedRatings',
    'ExposureBiasValue',
    'FocalLength',
    'FocalLengthIn35mmFilm',
    'Lens',
    'LensModel',
]

// 如何自动生成类型or如何从类型自动生成数组

export interface EXIFInfo {
    Make: string // - 相机厂商：Make
    Model: string // - 相机型号：Model
    DateTimeOriginal: string // - 拍摄时间：DateTime
    ExposureTime: string // - 曝光时间：ExposureTime
    FNumber: string // - 光圈值：FNumber
    ISOSpeedRatings: number // - ISO：ISOSpeedRatings
    ExposureBiasValue: string // - 基础曝光补偿：ExposureBiasValue
    FocalLength: string // - 焦距：FocalLength
    FocalLengthIn35mmFilm: number // - 35mm等效焦距：FocalLengthIn35mmFilm
    Lens: string // - 镜头厂商：Lens
    LensModel: string // - 镜头型号：LensModel
}