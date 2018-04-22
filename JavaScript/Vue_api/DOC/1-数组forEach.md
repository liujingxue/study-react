## vue 数据驱动 (主要操作的是数据)
* 操作dom

## JS中的数据类型
* 基本： number string boolean null undefined
* 引用： Object function
* Symbol (es6)

## {} []
### 数组的变异(括号中的能改变原数组)
* 操作数组的方法 (pop push unshift shift slice splice reverse sort) indexOf lastIndexOf concat

## forEach filter map find some every  reduce  (includes find  是es6)


## node版本(升级到>8)


## forEach

```

//for

let arr = [1,2,3,4,5];

for(let i=0;i<arr.length;i++){   //编程式
    console.log(arr[i])
}


//forEach不支持return
arr.forEach(function(item,index){  //声明式(好处是不关系如何实现)
    console.log(item)
})

```

## 使用Object.keys

使用for of (es6)

```

//对象是不能被遍历的
//Object.keys将对象的key作为新的数组
let obj = {school:'js',age:8}
for(let val of Object.keys(obj)){
    console.log(val)  // school age
    console.log(obj[val]) // js  8
}

```

