//?1:加载express;fs;multer模块
const express = require("express");
//fs fileSystem 文件系统
//创建文件 删除文件 修改文件 *移动*文件 ..
const fs = require("fs");
//上传文件第三方模块..
const multer = require("multer");
//2:创建express
var app = express();
//3:指定静态目录 public
//__dirname 当前文件所属目录绝对路径
//c:/xampp/htdocs/tao/weixin/day06
app.use(express.static(__dirname+"/public"));
//4:监听端口
app.listen(3000);
//5:创建upload对象
var upload = multer({dest:"upload/"});
//6:接收客户post请求
app.post("/upload",upload.single("mypic"),(req,res)=>{
 //7:文件大小
 //8:文件类型 
 //9:修改文件名 123.jpg 191282873283.jpg
 //9.1:获取源来文件名后缀名
 var src = req.file.originalname;
 var i3 = src.lastIndexOf(".");
 var suff = src.substring(i3);  //源文件名后缀 .jpg
 //9.2:创建时间毫秒数
 var ftime = new Date().getTime();
 //9.3:创建随机数
 var fran = Math.floor(Math.random()*9999);
 //9.4:创建新文件名 upload/毫秒数+随机数+后缀名
 var des = "./upload/"+ftime+fran+suff;
 //9.5:将临时文件修改名称移动 新文件名
 //修改名称并且移动文件 (原先文件,目标新文件名)
 fs.renameSync(req.file.path,des);
 //10:将临时文件移动upload目录下  15:58
 res.send({code:1,msg:"上传文件成功"});
})
//app.js
//upload

