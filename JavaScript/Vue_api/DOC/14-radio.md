
## select

原生js获取选中的值

不能通过click事件，来获取选中的option的值

需要onchange事件

```

<select id="select">
    <option value="1">js</option>
    <option value="2">apple</option>
    <option value="3">orange</option>
</select>

let oSelect = document.getElementById('select')
oSelect.onchange = function(){
    alert(this.value)
}

```

Vue获取选中的option的值

```

<div id="app">
    <select v-model="a">
        <option value="" disabled>请选择</option>
        <option value="1">js</option>
        <option value="2">apple</option>
        <option value="3">orange</option>
    </select>
    {{a}}
</div>

let vm = new Vue({
    el:'#app',
    data:{
        a:''
    }
})

```

## 让select支持多选

如果select是多选框，则数据类型要是数组类型

```

<div id="app">
    <select v-model="a" multiple>
        <option value="" disabled>请选择</option>
        <option value="1">js</option>
        <option value="2">apple</option>
        <option value="3">orange</option>
    </select>
    {{a}}
</div>

let vm = new Vue({
    el:'#app',
    data:{
        a:[]
    }
})

```


## radio

```

<div id="app">
    <input type="radio" v-model="gender" value="男"/>男
    <input type="radio" v-model="gender" value="女"/>女
    {{gender}}
</div>

let vm = new Vue({
    el:'#app',
    data:{
        gender:'男'
    }
})

```
