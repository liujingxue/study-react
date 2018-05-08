
##

computed默认调用get方法，必须要有return

computed不支持异步

```
<div id="app">
    <input type="text" v-model="a">
    {{msg}}
    <!-- 根据输入框的内容，算出一个错误信息 -->
</div>


<script>

    let vm = new Vue({
        el:'#app',
        watch:{ //只有值变化的时候才会触发，支持异步了
            //其他情况我们更善于使用computed
          a(newVal,oldVal){ //watch的属性名字要和观察的人的名字一致
              setTimeout(()=>{
                  console.log(newVal,oldVal);
                  if(newVal.length<3){
                      return this.msg = '太少'
                  }
                  if(newVal.length>6){
                      return this.msg = '太多'
                  }
                  this.msg = ''
              },500)
          }
        },
        data:{
            a:'',
            msg:''
        }
    })

</script>


```

## 如果是异步的，则使用watch


## 计算属性和观察者

对于任何复杂逻辑，都应当使用计算属性


```

<div id="app">
    <input type="text" v-model="val">
    {{fullName}}
</div>

<script>

    let vm = new Vue({   // 同步的情况，使用computed
        el:'#app',
        computed:{
            fullName(){
                return this.firstName+this.val+this.lastName
            }
        },
        data:{
            firstName:'js',
            lastName:'hello',
            val:''
        }
    })

</script>

```