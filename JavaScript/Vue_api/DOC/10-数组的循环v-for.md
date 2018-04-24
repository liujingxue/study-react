
## v-for

解决循环问题的，会复用原有的结构，

要循环谁，就在谁的身上增加v-for属性

in 和 of 是一样的

```
<div id="app">
    <ul>
        <li v-for="newArr1 in arr1">{{newArr1.name}}</li>
    </ul>
    <ul>
        <li v-for="newArr1 of arr1">{{newArr1.name}}</li>
    </ul>
</div>

let vm = new Vue({
    el:'#app',
    data:{
        arr1:[{name:'apple'},{name:'orange'},{name:'js'}]
    }
})

```


## 添加索引

默认是value of 数组,  (value,index) of 数组

in和of 是等价的

后面都用in

```
<div id="app">
    <ul>
        <li v-for="(newArr1,index) in arr1">{{newArr1.name}} {{index}}</li>
    </ul>
    <ul>
        <li v-for="(newArr1,index) of arr1">{{newArr1.name}} {{index+1}}</li>
    </ul>
</div>

let vm = new Vue({
    el:'#app',
    data:{
        arr1:[{name:'apple'},{name:'orange'},{name:'js'}]
    }
})

```


## 循环二维数组


```
// 循环出来的结果

<ul>
    <li>
        1 apple
        <ul>
            <li>1.1 red</li>
        </ul>
    </li>
</ul>
```

实现

```

<div id="app">
    <ul>
        <li v-for="(newArr1,index) in arr1">
            {{index+1}}.{{newArr1.name}}
            <ul>
                <li v-for="(color,newIndex) in newArr1.color">{{index+1}}.{{newIndex+1}} {{color}}</li>
            </ul>
        </li>
    </ul>
</div>

let vm = new Vue({
    el:'#app',
    data:{
        arr1:[
            {name:'apple',color:['green','red']},
            {name:'orange',color:['green','yellow']},
            {name:'js',color:['blue']}
        ]
    }
})

```


## 循环字符串

<div v-for="str in 'aaaa'">{{str}}</div>

## 循环5次

<div v-for="num in 5">{{num}}</div>

## 循环一个对象

```
<div v-for="(value,key,index) in obj1">{{key}}:{{value}}:{{index}}</div>

let vm = new Vue({
    el:'#app',
    data:{
        obj1:{name:'js',age:8,address:'nanjing'},
        arr1:[
            {name:'apple',color:['green','red']},
            {name:'orange',color:['green','yellow']},
            {name:'js',color:['blue']}
        ]
    }
})

```

