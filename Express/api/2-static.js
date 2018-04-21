let express = require('express')
let app = express()


app.use(express.static('static')) // static表示文件夹

app.listen(8099)