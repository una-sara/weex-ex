#功能一:创建新闻表
#1:表名 xz_news
#2:几列 4
#3:列名 #id/title/img_url/ctime/point/content
#4:类型
#id      INT
#title   VARCHAR(255)
#img_url VARCHAR(255) 
#ctime   DATETIME
#point   INT
#content VARCHAR(2000) 
#5:添加20条件

CREATE TABLE xz_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title  VARCHAR(255),
  img_url  VARCHAR(255),
  ctime  DATETIME,
  point   INT,
  content VARCHAR(2000)
);

INSERT INTO xz_news VALUES(null,'123','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'124','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'125','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'126','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'127','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'128','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'129','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123a','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123b','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123c','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123d','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123e','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123f','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123g','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123h','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123i','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123j','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123k','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123l','http://127.0.0.1:3000/1.png',now(),0,'123');
INSERT INTO xz_news VALUES(null,'123m','http://127.0.0.1:3000/1.png',now(),0,'123');


#功能二:创建评论表
#内容;时间;那条新闻;编号
#DROP TABLE xz_comment;
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(50),
  ctime DATETIME,
  nid   INT
);
INSERT INTO xz_comment VALUES(null,'赞一个1',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个2',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个3',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个4',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个5',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个6',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个7',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个8',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个9',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个10',now(),5);
INSERT INTO xz_comment VALUES(null,'赞一个11',now(),5);

#创建用户登录表
#用户登录密码需要加密保存使用  mysql自带函数md5()
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));


#创建购物车表 id count price pid uid
CREATE TABLE xz_cart(
  id    INT PRIMARY KEY AUTO_INCREMENT,
  count INT,
  price DECIMAL(15,2),
  pid   INT,
  uid   INT
);
#vue 服务器 db.sql保存数据库脚本 
CREATE TABLE xz_shop(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  name VARCHAR(255),
  tel  VARCHAR(25),
  addr VARCHAR(255),
  time VARCHAR(255),
  star INT
);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店1','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店2','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店3','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店4','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店5','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店6','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店7','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店8','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店9','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店10','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店11','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店12','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店13','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店14','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店15','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店16','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店17','13999999999','北京万寿路','8:00~19:00',91);
INSERT INTO xz_shop VALUES(null,
'http://127.0.0.1:3000/icon/grid-08.png','蛋糕店18','13999999999','北京万寿路','8:00~19:00',91);


#---------------------
#数据库表添加商品
#乱码
#数据库出错乱码原因:编码不统一
#xz utf8; 数据 gbk
#1:创建库指定编码 utf8
#CREATE DATABASE xz CHARSET=utf8;
#2:操作[创建表;添加数据 phpmyadmin]
CREATE TABLE xz_pro(
  id   INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25)
);