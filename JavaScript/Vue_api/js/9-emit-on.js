
//发布 emit   订阅 on  {女生失恋:['哭','购物','吃']}

function Girl(){
    this._events = {
    }
}
Girl.prototype.on = function(eventName, callback){
    if(this._events[eventName]){ //不是第一次
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback]
    }
    console.log(this._events);
};
Girl.prototype.emit = function(eventName,...args){
    // [].slice.call(arguments,1);
    // Array.from(arguments).slice(1);

    //在参数中叫剩余运算符 ...args    ['我','你']
    //在其余地方，叫展开运算符
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb(...args));
    }
};
let girl = new Girl();

let cry = (who) =>{console.log(who+'哭');};
let shopping = (who) =>{console.log(who+'购物')};
let eat = (who) =>{console.log(who+'吃')};

//绑定事件
girl.on('失恋',cry);
girl.on('失恋',eat);
girl.on('失恋',shopping);

//发布
girl.emit('失恋','我');

