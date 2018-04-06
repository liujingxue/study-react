## Win10下MongoDB的安装及环境配置

安装

* 下载地址:https://www.mongodb.com/download-center
* 下载版本:mongodb-win32-x86_64-2008plus-ssl-3.6.3-signed.msi (2018-04-06最新版)

安装过程

* next --> Custom --> 选择你的安装目录,新建目录,安装目录为C:\Program Files\MongoDB\Server\3.6\ --> Install MongoDB Compass,不勾选 --> 然后随着进度条,安装完成

* 安装目录: C:\Program Files\MongoDB\Server\3.6\bin

## MongoDB的环境配置

一、直接将MongoDB配置为服务

(这样做的好处是：免去了每次启动需要输入数据路径，为了方便，可以将启动数据库写成window服务的方式。)

首先，我们先在MongoDB目录中创建 log 与 data 这两个文件夹，分别用于存储日志与数据

二、直接启动MongoDB

我们选择第二种

首先，我们先在MongoDB目录中创建 log 与 data 这两个文件夹，分别用于存储日志与数据

打开一个cmd

mongod --dbpath e:\MongoDB\data

再打开一个cmd

mongo



## 怎么配置环境变量

配置完之后，启动


打开一个cmd

mongod --dbpath e:\MongoDB\data

再打开一个cmd

mongo


成功连上


## MongoDB的用法

```

//列出所有数据库
show dbs
//使用某个数据库
use 数据库名字
//如果想新建数据库，也是use。use一个不存在的，就是新建。
use itcast
//查看当前在哪个数据库里
db
//student就是所谓的集合。集合中存储着很多json。
db.student.insert({"name":"xiaoming","age":12,"sex":"nan"});
db.一个未知的集合名字，这个集合将自动创建。
//查看该数据库里的集合
show collections
db.student.find();

//开启数据库
mongo
show dbs                //显示所有数据库
use itcast              //使用数据库
show collections        //显示该数据库下的集合
db.student.find()       //查看该集合中的所有数据
db.student.insert({"name":"xiaogang","age":43})    //插入一条数据
db.student.find({"name":"xiaoming"})               //查找name为xiaoming的数据


//开始
mongo

cls  清屏

//使用数据库，也是创建数据库的意思
 use itcast
 //如果真的想把这个数据库创建成功，那么必须插入一个数据。
 数据库中不能直接插入数据，只能往集合(collections)中插入数据。
 不需要创建集合，只需要写点语法：
 db.student.insert({“name”:”xiaoming”});

 //查看当前所在数据库
 db
 //删除数据库
 db.dropDatabase();

use itcast
db.student.insert({“name”:”xiaoming”});     //新增一条数据
插入数据，随着数据的插入，数据库创建成功了，集合也创建成功了。

//我们不可能一条一条的insert。所以，我们希望用sublime在外部写好数据库的形式，然后导入数据库：
//使用命令行，把外部数据导入
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
--db test 导入到test数据库中
--collection restaurants  导入到restaurants集合中
--drop 将集合中已经存在的数据清除
--file primer-dataset.json  表示用这个文件

比如：
在桌面上新建1.json
{"name":"小明","age":12,"hobby":["睡觉","吃饭"],"score":{"yuwen":59,"数学":80}}
{"name":"小红","age":11,"hobby":["学习","看书"],"score":{"yuwen":59,"数学":70}}
{"name":"小强","age":13,"hobby":["打架","吃饭"],"score":{"yuwen":80,"数学":85}}
{"name":"小强","age":13,"hobby":["打架","吃饭"],"score":{"yuwen":80,"数学":85}}

然后在cmd中：
原先数据库中没有itcast数据库
mongoimport --db test --collection student --drop --file C:\Users\liu\Desktop\1.json
提示：
2017-05-27T23:00:29.576+0800 E QUERY    [thread1] SyntaxError: missing ; before
statement @(shell):1:14
语法错误，有可能是忘记了函数的方法要加()也有可能是忘记了加","等等

注意：不是在mongo 的shell里面，是单独执行的
C:\Users\Danny>mongoimport --db itcast --collection student --drop --file C:\Users\Danny\Desktop\1.json

这一句导入对了：
C:\Users\liu>mongoimport --db test --collection student --drop --file C:\Users\liu\Desktop\1.json


//查找数据，用find()。find中没有参数，那么将列出这个集合的所有文档：
db.student.find()

//查找条件,找到shuxue等于70分的
db.student.find({"score.shuxue":70});

//多个条件
db.student.find({"score.shuxue":80,"age":9});

//score大于30
db.student.find({"grades.score":{$gt:30}})

//yuwen大于50
db.student.find({"score.yuwen":{$gt:50}})

//小于10
db.student.find({"grades.score":{$lt:10}})

//与用,表示
db.student.find({"cuisine":"italian","address.zipcode":"10075"})

//或用数组表示
db.student.find(
	{ $or: [{"cuisine":"italian"},{"address.zipcode":"10075"}]}
)

//查找age等于9或者age等于11的数据
db.student.find({$or:[
	{"age":9},{"age":11}
]})

//把查找结果进行排序,先按borough排序，然后再按address.zipcode排序
db.student.find().sort({"borough":1,"address.zipcode":1})

//把查找结果进行排序 -1是降序，1是升序
db.student.find().sort({"score.yuwen":-1,"age":1})

//查找
db.student.find({"hobby":"睡觉"});

更改和删除：

//修改
db.student.update(
	{"name":"juni"},        //修改name为juni的这个数据
	{
		$set: {"cuisine":"American"},                       //修改的内容
		$currentDate:{"lastModified":true}               //最后修改的时间
	}
)

//修改
db.student.update({"name":"小明"},{$set:{"age":16}});

//批量修改
db.student.update(
	{"address.zipcode":"10016",cuisine:"other"},    //查找这些数据
	{
		$set:{cuisine:"category to be Datermined"},
		$currentDate:{"lastModified":true}                //最后修改时间
	},
	{multi:true}                                                      //设置批量修改
)

//批量进行修改，把所有shuxue等于70的用户,age都变成33
db.student.update({"score.shuxue":70},{$set:{"age":33}},{multi:true});

//修改里面还有查询条件。你要改谁，要告诉mongo。

//把所有人的age改成33
db.student.update({},{$set:{"age":33}},{multi:true});

//直接替换id等于41704620的这条数据
db.student.update(
	{"student_id":"41704620"},
	{
		"name":"Vella 2",
		"address" :{
			"coord" : [-73.9557413, 40.7720266],
			"building" : "1480",
			"street" : "2 Avenue",
			"zipcode" : "10075"
		}
	}
)

如果不写$set,那就会整体替换这一条数据


//重新导入一个json文件
C:\Users\liu>mongoimport --db test --collection student --drop --file C:\Users\liu\Desktop\1.json


删除：
//删除集合,把集合都删了
db.teacher.drop();

//删除，删除所有
db.student.remove({"borough":"Manhattan"})

//只删一条，justOne:true
db.student.remove({"borough":"Queens"},{justOne:true})

//删除所有shuxue等于80的数据
db.student.remove({"score.shuxue":80});

//删除所有数据，不写条件的时候，集合还在，但里面的东西都没了
db.student.remove({})

```


## 客户端使用Robo 3T

* 下载地址:https://robomongo.org/download
* 下载版本:robo3t-1.2.1-windows-x86_64-3e50a65.exe (2018-04-06最新版本)

安装过程

* 下一步 --> 我接受 --> 安装目录: C:\Program Files\Robo 3T 1.2.1 --> 安装

使用

* File --> Connection --> Create --> Type:Direct Connection Name:New Connection Address: localhost 27017 --> connect --> 连接成功
