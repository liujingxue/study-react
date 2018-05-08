
## 指令

指令是用来操作dom的

```

<button v-color="flag">变色</button>
<div v-drag class="a"></div>

<script>
    var vm = new Vue({
        directives:{ // v- 可以默认不写
            color(el,bindings){ //el指代的是button按钮
                console.log(arguments);
                el.style.background = bindings.value
            },
            drag(el){
                //拖拽
                el.onmousedown = function(e){
                    var disx = e.pageX - el.offsetLeft
                    var disy = e.pageY - el.offsetTop
                    document.onmousemove = function(e){
                        el.style.left = e.pageX - disx + 'px'
                        el.style.top = e.pageY - disy + 'px'
                    }
                    document.onmouseup = function(){
                        document.onmousemove = document.onmouseup = null
                    }
                    e.preventDefault()
                }
            }
        },
        el:'#app',
        data:{
            flag:'red'
        }
    })
</script>


```

## 注意

如果是 <div v-focus-aa></div> 时，

```
directives:{
    focusAa(el,bindings){  // 要这样命名，驼峰命名

    }
}

```