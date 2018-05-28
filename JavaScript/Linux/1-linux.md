
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

cat a.js                      // 查看a.js文件内容

```


## 7.Linux目录

|  | 可分享的(shareable) | 不可分享的(unshareable) |
| - | :- | :- |
| 不变的(static) | /usr(软件放置处) | /etc(配置文件) |
|   | /opt(第三方协力软件) | /boot(开机与核心档) |
| 可变动的(variable) | /var/mail(使用者邮件信箱) | /var/run(程序相关) |
|   | /var/spool/news(新闻组) | /var/lock(程序相关) |

- tail -f dmesg      // 查看日志, 从末尾查看

### 7.1 目录树

- /bin 系统有很多放置执行文件的目录, 但/bin比较特殊。
- /boot 放置开机会使用的文件,包括inux核心文件。
- /dev 在Linux系统上,任何装置与接口设备都是以文件的型态存在于这个目录当中的。
- /etc 系统主要的配置文件几乎都放置在这个目录内,例如人员的账号密码文件、各种服务的启动档等等。
- /home 这是系统默认的用户家目录(home directory)。
- /lib 系统的函式库非常的多, 而/lib放置的则是在开机时会用到的函式库。
- /media 放置可移除的装置。
- /mnt 如果你想要暂时挂载某些额外的装置，建议放置到这个目录中。
- /opt 这个是给第三方协力软件放置的目录。如自定义安装的软件等。
- /root 系统管理员(root)的家目录。
- /sbin Linux有非常多指令是用来设定系统环境的。至于本机自行安装的软件所产生的系统执行文件(system binary),则放置到/usr/local/sbin/当中了。
- /tmp 这是让一般使用者或者正在执行的程序暂时放置文件的地方。这个目录是任何人都能够存取的，需要定时清理。


## 8.Linux用户

- 文件拥有者
- 群组概念
- 其他人的概念, 除了root, 不属于前两组的人

- hostname               // 主机名

```
cd /
cd tmp
useradd work           // 增加用户
passwd work            // 增加密码 15201306671
su - work              // 切换到work用户

```

## 9.Linux权限管理

- 第一个字符代表这个文件是[目录、文件或链接文件等等]
    - 当为[d]则是目录
    - 当为[-]则是文件
    - 当是[l]则表示为连接档(link file)
    - 当是[b]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)
    - 当是[c]则表示为装置文件里面的串行端口设备,例如键盘、鼠标(一次性读取装置)

- -[档案类型]  r(可读)w(可写)x(可执行)[档案拥有者的权限] rwx[档案所属群组之权限] ---[其他人之权限]

- chmod --help        // 改变文件的权限
- chown               // 改变文件拥有者
- chgrp               // 改变文件所属群组

```
chmod +r work.file

```

## 10.Linux日常运维

### 10.1 安装软件

- yum

`yum`命令是在Fedora和RedHat以及SUSE中基于rpm的软件包管理器

```
yum(选项)(子命令)

```

- 子命令
    - install : 安装rpm软件包
    - update : 更新rpm软件包
    - remove : 删除指定的rpm软件包
    - list : 显示软件包的信息

### 10.2 制作安装包
### 10.3 crontab
### 10.4 系统服务
### 10.5 日志

## 11.Linux进阶

### 11.1 Linux文件
### 11.2 Linux文件系统
### 11.3 shell编程

```
#!/bin/sh

for num in 1.2.3.4
do
    echo $num
done

```

## 12.Linux实操(基于Node.js)

### 12.1 打包Node应用程序

- 使用React16_Router4_zhufengketang, npm build打包
- 上传到服务器


### 12.2 安装并设置开机启动
### 12.3 安装Nginx
### 12.4 配置Nginx
### 12.5 日志处理
