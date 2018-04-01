## 入门例子
```
默认还是版本15，手动更新为16
npm i --save react@next react-dom@next  //更新到版本16

React的View层语法
Js里直接写html
Class要写成className
变量用{}包裹即可

//入门例子
import React from 'react';
class App extends React.Component{
    render(){
        return <h2>this is 首页</h2>
    }
}
```