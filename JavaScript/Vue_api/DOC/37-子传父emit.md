
## 子传父 emit

this.$emit   触发自己的自定义事件，让父亲的方法执行

```

<div id="app">

    <!-- 父亲绑定一些事件, 儿子触发这个事件, 将参数传递过去, 单向数据流 -->
    <!-- 父亲就能拿到儿子的数据 -->

    父亲:{{money}}
    <!-- 给儿子上绑定一个事件 @child-add -->
    <child :m="money" @child-add="add"></child>
</div>


let vm = new Vue({
    el:'#app',
    methods:{  //方法
        add(val){
            alert(val)
            this.money = val;
        }
    },
    components:{
      child:{
          props:['m'],
          template:'<div>儿子 {{m}} <button @click="getMoney()">多要钱</button></div>',
          methods:{
              getMoney(){
                  //触发事件
                  this.$emit('child-add',800)
              }
          }
      }
    },
    data:{
        money:400
    }
})


```