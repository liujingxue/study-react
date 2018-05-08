
## computed计算"属性"不是方法

* 方法不会有缓存, computed会根据依赖(归vue管理的数据，可以响应式变化的)的属性进行缓存
* 两部分组成有get和set(不能只写set), 一般情况下通过js赋值影响其他人或者表单元素设置值的时候，会调用set方法

```
<div id="app">
    全选 <input type="checkbox" v-model="checkAll"> <br/>
    <input type="checkbox" v-for="product in products" v-model="product.isSelected">
</div>


<script>

    let vm = new Vue({
        el:'#app',
        computed:{
            checkAll:{   // checkAll 是算出来的
                get(){ // 返回什么结果，就会赋予给checkAll属性
                    //如果其中有一个值是false,则返回false,把false赋予给checkAll
                    //如果都是true,则把true赋予给checkAll
                    return this.products.every(item=>item.isSelected)
                },
                set(val){ //改自己的时候，去影响其他人
                    //val是给checkAll赋予值的时候，传递过来的
                    this.products.forEach(item=>item.isSelected = val)
                }
            }
        },
        data:{
            products:[{
                isSelected:true
            },{
                isSelected:true
            }]
        }
    })

</script>

```


## 监听输入框的数据长度

```

<div id="app">
    <input type="text" v-model="a">
    {{msg}}
    <!-- 根据输入框的内容，算出一个错误信息 -->
</div>

<script>

    let vm = new Vue({
        el:'#app',
        computed:{
            msg(){
                if(this.a.length < 3){
                    return '少了'
                }
                if(this.a.length > 6){
                    return '多了'
                }
                return ''
            }
        },
        data:{
            a:''
        }
    })

</script>


```