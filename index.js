// 注意 模板文件中不能出现& &读取会解析为&amp;
const fs = require("fs");
const AdmZip = require('adm-zip'); //引入查看zip文件的包
const zip = new AdmZip("C:/Users/Administrator/Desktop/fc/读取word模板文件/模板文件.docx"); //filePath为文件路径
let contentXml = zip.readAsText("word/document.xml");//将document.xml读取为text内容；
let str = "";
contentXml.match(/<w:t>[\s\S]*?<\/w:t>/ig).forEach((item) => {
    str += item.slice(5, -6)
});

console.log(str);
// 通过正则匹配对字符串进行切割
const temp = str.split(/[.@,：,*,#]/);
//将数组中空字符串去除
const date = temp.filter(temp => temp);

console.log(date);
