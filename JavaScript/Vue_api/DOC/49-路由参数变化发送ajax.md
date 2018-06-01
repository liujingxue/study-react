
## 路由带参数

http://localhost；3000/article/3

```
<div>{{$route.params.id }}</div>

let routes = [ //路径参数,表示值必须要有，但是是随机的
    {path:'/article/:id',component:article}
];

```

## 第二种方式: 路径参数的变化，用watch来监控

```

let article = {
    template:'#myarticle',
    watch:{ //路径参数发生变化,监控参数的变化来发送ajax, 使用watch
        $route(){ //当$route变化,就发送ajax
            alert('来个ajax');
        }
    }
};

```