function app(){

}
app.middleware = [];
app.use = function(cb){
    this.middleware.push(cb)
}


