---
title: Mysql版本问题导致报错
tags: MySQL
categories: MySQL
abbrlink: 2117804210
date: 2021-06-02 09:51:32
cover: https://cdn.jsdelivr.net/gh/jinan6/PicGo-img/img/20210604113009.png
sticky:
top_img:
---

<div class="snote done"><p>版本原因导致的问题</p></div>

### 问题

有一条SQL在服务器上可以正常执行，在本地却报错，经过百度，发现是mysql版本不同导致的

**sql**

```mysql
        SELECT
            DATE_FORMAT(create_time, '%m月') x, SUM(money) y
        FROM
            child_bill
            WHERE transaction_type IN (5,6,7,8,9,10)
            AND YEAR(create_time)=YEAR(NOW())
        GROUP BY DATE_FORMAT(create_time, '%Y-%m')
```

**报错如下**

```code
java.sql.SQLSyntaxErrorException: Expression #1 of SELECT list is not in GROUP BY
```

### 解决

原因是因为MySQL启用了**ONLY_FULL_GROUP_BY SQL模式（默认情况下）**

需要修改配置文件，在`my.ini`的最后一行加入以下配置即可

```ini
[mysqld]
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

重启MySQL服务，搞定！

参考链接：https://blog.csdn.net/Seven_0110/article/details/112356269