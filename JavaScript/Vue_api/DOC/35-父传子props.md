
## 属性传递

父级传给子级

从上到下


```

//父传递子

<div id="app">
    父亲:{{msg}}
    <!-- 当前组件的属性=父级的值,给儿子加了一个m属性，属性对应的数据是属于父亲的 -->
    <child :m="msg" a="1"></child>
</div>


let vm = new Vue({ //parent
    el:'#app',
    components:{
        child:{
            props:[
                'm',    //this.m = 100; 会在当前子组件上声明一个m属性,值是父亲的
                'a'
            ],
            computed:{
                money(){
                    return this.m
                }
            },
            template:'<div>son {{m}} {{a}}</div>'
        }
    },
    data:{
        msg:100
    }
})

```


##

<child :m="1"></child>

:m="1"  , 肯定是数字
m="1" , 传过来的是字符串

如果不带: 号得到的肯定是字符串类型


## 校验

```

<div id="app">
    父亲:{{msg}}
    <!-- 当前组件的属性=父级的值,给儿子加了一个m属性，属性对应的数据是属于父亲的 -->
    <child :m="msg"></child>
</div>

let vm = new Vue({ //parent
    el:'#app',
    components:{
        child:{
//                props:[
//                    'm',    //this.m = 100; 会在当前子组件上声明一个m属性,值是父亲的
//                    'a'
//                ],
            //校验时不能阻断代码的执行，只是警告而已
            props:{  //对象的形式可以进行校验, 属性名和data中的名字不能相同
                m:{
                    type:[String,Boolean,Function,Object,Array,Number],   //类型校验
                    //default:0,  // 可以给m赋予默认值，如果不传默认会调用default
                    required:true,  //此属性是必须传递,但是不能和default同用
                    //自定义校验器（用的不是很多)
                    validator(val){  //第一个参数是当前传递的值,返回true表示通过,false就是不通过
                        return val>300
                    }
                }
            },
            computed:{
                money(){
                    return this.m
                }
            },
            template:'<div>son {{m}}</div>'
        }
    },
    data:{
        msg:400
    }
})

```