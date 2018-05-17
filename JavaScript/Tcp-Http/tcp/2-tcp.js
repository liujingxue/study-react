let net = require('net')
let path = require('path')
let ws = require('fs').createWriteStream(path.join('./1.txt'))

let server = net.createServer(function(socket){
    socket.pipe(ws)
})
server.listen(8099)