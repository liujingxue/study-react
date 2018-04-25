

## fetch

用来代替ajax

```

fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(e){
    console.log('error')
})


// 使用es6的箭头函数后

fetch(url).then(response=>response.json())
    .then(data => console.log(data))
    .catch(e=>console.log('error',e))

```

## async await
