
##

- v-if="" v-show if操作的是dom show操作的是样式
- 如果频繁的切换dom使用v-show
- 当数据一开始就确定下来使用v-if更好一些
- 如果if不通过，内部指令不会在执行了
- 只有dom从显示到隐藏,或者隐藏到显示，才能使用vue的动画

```
// 没有使用动画
<div id="app">
    <button @click="flag=!flag">切换</button>
    <div v-show="flag">js</div>
</div>
```


## 多个动画

```
<style>
.js-enter{
    opacity: 0;
    background-color:#000;
}
.js-enter-active{
    transition: 1s linear;
}
.js-leave-active{
    opacity: 0;
    transition: 1s linear;
}

.js2-enter{
    opacity: 0;
    background-color:#ddd;
}
.js2-enter-active{
    transition: 1s linear;
}
.js2-leave-active{
    opacity: 0;
    transition: 1s linear;
}
</style>

<transition name="js">
    <div v-show="flag">js</div>
</transition>
<transition name="js2">
    <div v-show="flag">js2</div>
</transition>

```


## 动画库

animate.css

npm i animate.css --save

```

<transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutLeftBig">
    <div v-show="flag">js</div>
</transition>

```