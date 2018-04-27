
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



// promise 解决回调问题的, promise三个状态， 成功态，失败态，等待

console.log(Promise);

// resolve代表的是转向成功态
// reject代表的是转向失败态  resolve和reject均是函数
// promise的实例就一个then方法,then方法中有两个参数
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let c = 'apple'
        // resolve(c)
        reject(c)
    },2000)
})
p.then((data)=>{  // 成功态
    console.log(data);
},(err)=>{  // 失败态
    console.log('err');
})









