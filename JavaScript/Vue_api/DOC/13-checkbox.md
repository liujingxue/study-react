
## 安装axios 和 bootstrap

npm i axios bootstrap --save

v3.bootcss.com

## 计算三元表达式，尽量少写逻辑，可以使用 computed

## v-model(表单元素) 忽略掉value,checked,selected,将数据绑定的视图上，视图修改后会影响数据的变化

## checkbox

如果是checkbox,只有一个checkbox的时候，会把此值转化为boolean类型

如果true则代表选中

```

<div id="app">
    <input type="checkbox" v-model="a"/>   {{a}}
</div>

let vm = new Vue({
    el:'#app',
    data:{
        a:false
    }
})


```

如果是多个checkbox的话，要增加value属性，并且数据类型是数组

```

<div id="app">
    爱好:
    <input type="checkbox" v-model="b" value="游泳"/>游泳
    <input type="checkbox" v-model="b" value="爬山"/>爬山
    <input type="checkbox" v-model="b" value="跑步"/>跑步
    {{b}}
</div>

let vm = new Vue({
    el:'#app',
    data:{
        b:[]
    }
})

```