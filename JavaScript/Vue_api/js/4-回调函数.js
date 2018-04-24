
let a = ''
function buy(callback){
    setTimeout(()=>{
        a = '蘑菇'
        callback(a)
    },2000)
}

buy(function cookie(val){
    console.log(val);
}) // 回调函数，将后续的处理逻辑传入到当前要做的事，事情做好后，调用此函数



// 回调函数
let b = ''
function first(cb){
    setTimeout(()=>{
        b = 'apple'
        cb(b)
    },2000)
}

// 将定义好的函数作为参数传入 first()方法
first(second)

function second(val){
    console.log(val);
}


