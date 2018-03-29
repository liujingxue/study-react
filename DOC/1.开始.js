/**
 * Created by Administrator on 2018/3/29.
 */
/*

//package.json





一、NodeJS安装
    版本：9.8.0

二、NPM配置国内源

    2-1、第一种
    安装cnpm
    npm install –g cnpm --registry=https://registry.npm.taobao.org
    2.2、修改NodeJS的配置文件
    Windows下打开NodeJS安装目录下node_modules\npm\.npmrc
	Mac下打开 ~下的.npmrc
    加上这句话
    registry=https://registry.npm.taobao.org
    以后所有的命令都使用npm就行，

三、使用NPM配置React环境
    npm init –y
    安装依赖
    cnpm i react react-dom babelify babel-preset-react babel-core babel-preset-es2015 --save

	注意：babel-preset-es2015 ，推荐使用 babel-preset-env 了

四、webpack热加载配置
	安装依赖
	首先全局安装webpack
	cnpm i -g webpack
	全局安装开发服务器
	cnpm i -g webpack-dev-server
	然后进入项目
	安装webpack
	cnpm i webpack --save
	安装开发服务器
	cnpm i webpack-dev-server --save

	然后安装解析包
	cnpm i babel-loader --save

	运行
	webpack


	出错：The CLI moved into a separate package: webpack-cli.
	解决办法：全局安装webpack-cli
	cnpm i webpack-cli -g             //->安装版本webpack-cli@2.0.13
	webpack -v                        //->4.3.0

五、webpack 4的配置


五、搭建一个项目
	--node_modules
	--src
		|-index.js
	-index.html
	-package.json
	-webpack.config.js

	







*/