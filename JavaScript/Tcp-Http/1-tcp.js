let net = require('net')

// 创建一个tcp服务，里面放的是回调函数，监听函数，当连接到来是才会执行
// socket, 套接字，是一个duplex, 可以支持读操作和写操作
net.createServer(function(socket){

})
// backlog默认511
let port = 8090
// 如果端口号被占用了
server.listen(port,'localhost',function(){
    console.log(`server start ${port}`)
})