
## v-cloak 解决块级的闪烁问题

写v-cloak需要写个样式

```
<style>
    [v-cloak]{display:none;}
</style>

<div id="app" v-cloak>
    // ...
</div>

```