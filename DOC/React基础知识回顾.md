## 一、入门例子
```
默认还是版本15，手动更新为16
npm i --save react@next react-dom@next  //更新到版本16

React的View层语法
Js里直接写html
Class要写成className
变量用{}包裹即可

//渲染变量
import React from 'react';
class App extends React.Component{
    render(){
        let boss = '首页'
        return (
            <div>
                <h2>this is {boss}</h2>
                <一营></一营>
            </div>
        )
    }
}
class 一营 extends React.Component{
    render(){
        let boss = '张大喵'
        return <h2>{boss}</h2>
    }
}
export default App;

```

## 二、组件之间传递数据

组件之间用props传递数据

* 使用<组件 数据＝"值">的形式传递
* 组件里使用this.props获取值
* 如果组件只有render函数，还可以用函数的形式写组件
```
class App extends React.Component{
    render(){
        const boss = '李云龙'
        return (
            <div>
                <h2>{boss}</h2>
                <Header nickname='张国立'></Header>
                <Footer nickname='张国立'></Footer>
            </div>
        )
    }
}

//组件
class Header extends React.Component{
    render(){
        return (
            <h2>this is {this.props.nickname}</h2>
        )
    }
}

//函数式的组件形式
function Footer(props){
    return <h2>{props.nickname}</h2>
}

```


## 三、组件内部state

组件内部通过state管理状态

* 可以直接用.map遍历数组
* Constructor设置初始状态,记得执行super(props)
* 如State就是一个不可变的对象，使用this.state获取

```

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            solders:['虎子','柱子']
        }
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.solders.map(v=>{
                        return <li key={v}>{v}</li>
                    })}
                </ul>
            </div>
        )
    }
}

```

## 四、事件

onClick点击事件

* onClick={this.函数名}来绑定事件
* this引用的问题，需要在构造函数里用bind绑定this
* this.setState修改state,记得返回新的state,而不是修改

```
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            solders:['虎子','柱子']
        }
    }
    _addSolder(){
        console.log('hello add solder');
    }
    render(){
        return (
            <div>
                <button onClick={this._addSolder}>增加士兵</button>
                <ul>
                    {this.state.solders.map(v=>{
                        return <li key={v}>{v}</li>
                    })}
                </ul>
            </div>
        )
    }
}

```



