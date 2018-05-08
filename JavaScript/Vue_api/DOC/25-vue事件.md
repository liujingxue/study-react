## vue第二天复习
- v-model(如果checkbox,select,多选是数组,提供一个value属性)
- 修饰符 .number .lazy
- 按键修饰符 .enter .ctrl .keyCode
- 事件
    ```
    stopPropagation(阻止冒泡), cancelBubble=true, preventDefault, returnValue=false
    xxx.addEventListener('click',fn,true)
    ```

- jquery中的once
- e.srcElement&&e.target,判断事件源绑定事件


## vue事件

阻止冒泡的三种方法

```
grandson(e){
    alert('grandson')   // 点击孙子，有事件冒泡，child和parent都引发事件
    //e.cancelBubble=true // 取消事件冒泡，只有grandson引发事件
    //e.stopPropagation() // 也是阻止事件冒泡
}

// 第三种是修饰符
<div @click.stop="grandson">grandson</div>

@事件.stop


```


事件捕获

@事件.capture

相当于 xxx.addEventListener('click',fn, true)

```

<div @click.capture="parent">parent
    <div @click="child">child
        <div @click="grandson">grandson</div>
    </div>
</div>


```

阻止默认行为

@事件.prevent

```
// 相当于 preventDefault, returnValue=false

```


stopPropagation 阻止事件传播
@click.capture.stop 捕获这个事件之后，不往下走了

@click.once 只触发一次，再点的时候不触发了

只给某一个元素绑定事件
@事件.self
只有点击自己的时候才会执行

```
<div @click.self="child"></div>

```

<a href="www.baidu.com" @click="parent"></a>
不想让他页面跳转
<a href="www.baidu.com" @click.prevent="parent"></a>



## filters实例上可以用

```
{{'123' | my(1,2,3)}}

filters:{
    my(data,param1,param2,param3){

    }
}

```

## 多个实例，全局过滤器

全局过滤器，要放在页面的顶部

```

<div id="app1">
    {{'hello' | my() }}
</div>
<div id="app2">
    {{'hello' | my() }}
</div>


<script>
    Vue.filter('my',(data)=>{ //全局过滤器，所有人都能用
        return 'js'+data
    })

    let vm = new Vue({
        el:'#app1',
        data:{

        }
    })

    let vm1 = new Vue({
        el:'#app2'
    })
</script>


```



