
## promise 解决回调问题的, promise三个状态， 成功态，失败态，等待

pendding 是等待

fufiled 是成功

pendding --> resolve() 调用成功方法 --> fufiled

pendding --> reject() 调用失败方法 --> reject

```

// resolve代表的是转向成功态
// reject代表的是转向失败态  resolve和reject均是函数
// promise的实例就一个then方法,then方法中有两个参数
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let c = 'apple'
        resolve(c)
    },2000)
})
p.then((data)=>{  // 成功态
    console.log(data);
},(err)=>{  // 失败态
    console.log(err);
})


```

## 也可以故意调reject()

```

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let c = 'apple'
        // resolve(c)     // 如果调resolve()，就走第一个函数
        reject(c)         // 如果调reject()，就走第二个函数
    },2000)
})
p.then((data)=>{  // 成功态
    console.log(data);
},(err)=>{  // 失败态
    console.log('err');
})

```