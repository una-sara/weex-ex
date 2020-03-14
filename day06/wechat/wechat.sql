USE xz;
CREATE TABLE xz_chat(
  id INT PRIMARY KEY AUTO_INCREMENT,
  q  varchar(255),
  a  varchar(255)
);
INSERT INTO xz_chat values(NULL,'hi','您好');
INSERT INTO xz_chat values(NULL,'你是谁','我是聊天机器人你信吗?');
INSERT INTO xz_chat values(NULL,'bye','再见');

#SELECT a FROM xz_chat
#WHERE q LIKE '%hi%'

