# 目的
自制相机水印小工具，完善pc端创作流程，从lr/ps中导出后直接一键批量添加相机水印

# 功能
## 读取目录
选择文件夹，自动扫描文件夹内的所有jpg/jpeg格式的图片

## 处理图片
依次处理每张图片

1. 读取图片中的exif信息，提取所需字段：
- 相机厂商：Make
- 相机型号：Model
- 拍摄时间：DateTime
- 曝光时间：ExposureTime
- 光圈值：FNumber
- ISO：ISOSpeedRatings（number）
- 基础曝光补偿：ExposureBiasValue
- 焦距：FocalLength
- 35mm等效焦距：FocalLengthIn35mmFilm（number）
- 镜头厂商：Lens
- 镜头型号：LensModel
- 镜头参数：LensSpecification

2. 选择要输出/隐藏的字段

3. 添加额外文字

4. 选择添加的位置（上下左右）

5. 输出
展示形式：默认下方

相机型号                                 焦距 光圈 快门速度 ISO   
    【额外文字】             相机厂商logo    
镜头型号                                 拍摄时间