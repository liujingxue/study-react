
学习Linux可能是需要持续一辈子的事情,

## 1.大纲

- 认识Linux
- 安装Linux
- Linux的基本使用
- Linux日常运维
- Linux进阶
- Linux实操(基于Node.js)

## 2.学习目标

- 熟练进行Linux基本操作
- 能独立部署小型项目并进行简单运维
- 了解Linux的常规知识
- 为之后docker的学习打下一定基础

## 3.登录阿里云ECS服务器

- 目前是ubuntu_14
- 控制台-->云服务器ECS-->管理-->目前镜像为ubuntu_14_0405_64_40G_alibase_20170711.vhd

- 系统用户名:root
- 密码: 15201306671yY!@
- 增加了一个用户之后, 登录名为server_one, 密码为15201306671
- 新开一个窗口登录-->协议:SSH, 主机: 59.110.232.250,端口号:22

## 4.这里使用Centos7

- 更换系统盘,先停止-->更换系统盘-->公共镜像-->CentOS 7.2 64位
- 设置密码: 登录名root, 密码:15201306671yY!@

## 5.Linux的基本使用

- ll
- ifconfig
- ip address  查看ip地址
- exit        退出

## 6.常用命令

### 6.1 ssh登录

```
// win
使用Xshell4

// Mac

ssh root@192.168.0.25       // ssh远程连接

ssh -p port username@ipaddress

```

### 6.2 目录操作

- `ll`    : 文件夹下文件列表
- `ls -l` :
- `ls -al` :
- `ll -a` : 显示全部文件, 例如.文件
- `pwd` : 显示当前目录

### 6.3 文件操作

- `touch`
- `mkdir` : 创建文件夹 参数 -p
- `rm -rf test/` : 强制递归删除
- `vi`
    - `i` : 进入编辑状态
    - `esc` : 退出编辑状态
    - `dd` : 在退出编辑状态下, 删除当前光标所在的一行
    - `:wq` : 保存并退出
    - `:q!` : 不保存当前修改并退出
- `cp`
- `mv`

```
// 在tmp目录中做实验
rm -rf ./a.file               // 一定要加个 . , 当前文件夹

touch a.js
mv a.js ./b.js                // 相当于重新更名

cp b.js b.js.back             // 拷贝一份文件 b.js.back

rm -f b.js b.js.back          // 删除这两个文件

```


## 7.Linux目录

|  | 可分享的(shareable) | 不可分享的(unshareable) |
| - | :-: | -: |
| 不变的(static) | /usr(软件放置处) | /etc(配置文件) |
|   | /opt(第三方协力软件) | /boot(开机与核心档) |
| 可变动的(variable) | /var/mail(使用者邮件信箱) | /var/run(程序相关) |
|   | /var/spool/news(新闻组) | /var/lock(程序相关) |


