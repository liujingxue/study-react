
## 初始化

vue不要挂载到html或者body上

可以挂载到div上

<div id="app"></div>


## {{}}

{{}} 可以放赋值，取值，三元

{{msg === 'js'?1:0}}


## helloworld

```

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<div id="app">
    <!-- 小胡子语法 -->
    {{msg}}
</div>


<script src="./../node_modules/vue/dist/vue.js"></script>
<script>
    //引入vue后会白给你一个Vue构造函数
    let vm = new Vue({  // vm == viewModel
        el:'#app',           //告诉vue能管理哪个部分,querySelector
        data:{          // data中的数据会被vm所代理
            msg:'js'    //可以通过vm.msg取到对应的内容
        }
    })

</script>
</body>
</html>

```