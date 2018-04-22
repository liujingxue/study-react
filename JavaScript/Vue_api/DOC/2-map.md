
## filter

返回结果： 过滤后的新数组

回调函数的返回结果：如果返回true 表示这一项放到新数组中

```
let arr = [1,2,3,4,5]
let res = arr.filter((item,index)=>{
    // return item < 5
    return item>2&&item<5    // [3,4]
})
console.log(res)

```


## map

映射

将原有的数组映射成一个新数组

```

let arr1 = [1,2,3,4,5]

// 不操作原数组 返回新数组 回调函数中返回什么这一项就是什么

let newArr1 = arr1.map(function(item,index){
    //return 2       // 每一项都变成2了 [2,2,2,2,2]
    //return item*3    // [3,6,9,12,15]
    return `<li>${item} ${index}</li>`
})
console.log(newArr1)
console.log(newArr1.join(''))

```