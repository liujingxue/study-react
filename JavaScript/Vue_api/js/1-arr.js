
//for

let arr = [1,2,3,4,5];

for(let i=0;i<arr.length;i++){   //编程式
    console.log(arr[i])
}


//forEach不支持return
arr.forEach(function(item,index){  //声明式(好处是不关系如何实现)
    console.log(item)
})

//面试： forEach, for in , for , for of的区别
// for in的时候,key会变成字符串类型
// 包括数组的私有属性也可以打印出来
// 一般不用for in
for(let key in arr){
    console.log(typeof key)
}


//for of
//支持return, 并且是值of数组(不能遍历对象)
//只能遍历数组
for(let val of arr){
    console.log(val)
}

//对象是不能被遍历的
//Object.keys将对象的key作为新的数组
let obj = {school:'js',age:8}
for(let val of Object.keys(obj)){
    console.log(val)  // school age
    console.log(obj[val]) // js  8
}