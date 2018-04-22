
## defineProperty

* 表单元素 input checkbox textarea radio select
* vue的指令 directive ,只是dom上的行间属性
* vue给这类属性赋予了一定的意义, 来实现特殊的功能
* 所有指令都以 v- 开头
* value属性默认情况下会被vue忽略掉 selected checked 都没有意义

```

// v-model会将msg的值赋予输入框, 就是将数据绑定到表单元素上
// 输入框的值改变了会影响数据
// v-model是双向的, 视图会影响数据
// 改了输入框的内容, 会更改msg的值

<input type="text" v-model="msg" />


```

## Object.defineProperty 是es5的方法

```

let obj = {}
Object.defineProperty(obj,'username',{   // 给obj加上一个 username属性,   value表示 username的值
    value :'1',
    configurable:true,     //是否可删除
    writable:true,          // 是否可重新赋值
    enumerable:true,        // 是否可循环出来

})
// obj.username ="123"

for(key in obj){
    console.log(key)
}

```


## Object.defineProperty

自己写数据绑定

```

<input type="text" id="input" />

<script>
    let obj = {}
    let temp = {}

    Object.defineProperty(obj,'username',{   // 给obj加上一个 username属性,   value表示 username的值
        get(){   // 取obj的username属性会触发
            return temp["username"]      // obj.username == 1
        },
        set(val){   // 给obj赋值,会触发set方法
            console.log(val)
            temp["username"] = val   // 改变temp的结果
            input.value = val        // 将值赋予输入框
        }
    })

    input.value = obj.username     //页面一加载时，会调用get方法

    input.addEventListener('input',function(){  // 等待输入框的变化
        obj.username = this.value
    })
</script>


```