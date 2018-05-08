
## 动画

https://cn.vuejs.org/v2/guide/transitions.html

只有dom从显示到隐藏，或者隐藏到显示，才能使用vue的动画


## v-if

如果if不通过内部指令不会在执行了

## 普通的显示和隐藏

```
<button @click="flag=!flag">切换</button>
<div v-show="flag">js</div>

```