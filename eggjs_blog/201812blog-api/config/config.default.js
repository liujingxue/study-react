'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525860170507_1663';

  // add your config here
  config.middleware = [];

  //配置mongoose mongoose是node里面操作mongodb数据库的一个模块
  //它可以以对象的形式操作数据库
  config.mongoose = {
    client:{
      url:'mongodb://127.0.0.1/201812blog' //地址
    }
  }

  //暂时禁用CSRF
  config.security = {
      //csrf: false,
      csrf:{
        ignoreJSON:true, //默认为false,当设置为true时，将会放过所有
      },
      methodnoallow:{
        enable:false
      },
      //白名单
      domainWhiteList: [ 'http://localhost:3000' ], //允许跨域的端口
  }

  config.cors = {
      // origin:'*'
      origin:'http://localhost:3000',
      allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials:true  //这个一定要设置
  };

  return config;
};
