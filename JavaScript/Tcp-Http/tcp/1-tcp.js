// node为了实现tcp ，提供了一个模块，模块叫做net模块
// http主要基于net模块封装的

let net = require('net')
// 当连接到来时才会执行 socket套接字
let server = net.createServer(function(socket){ //创建一个tcp服务
    // 请求到来时会触发这个函数
    console.log('欢迎')
    // 最大连接数2个
    server.maxConnections = 2
    server.getConnection(function(){
        socket.write(`当前最大容纳${server.maxConnections},现在${count}`)
    })
})
let port = 8099
server.listen(port,'localhost',function(){
    console.log(`server start ${port}`)
})

server.on('close',function(){
    console.log('服务端关闭')
})
server.on('error',function(err){
    console.log(err)
    if(err.code === 'EADDRINUSE'){
        server.listen(++port)
    }
})