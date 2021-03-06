// loadMore
// offsetHeight,页面可见高度 scrollTop,卷曲高度 scrollHeight,文档高度

export const loadMore = (ele,cb) => {
    let timer = null
    ele.addEventListener('scroll',()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            let {offsetHeight,scrollTop,scrollHeight} = ele
            if(scrollTop+offsetHeight+20>scrollHeight){
                cb();
            }
        },30)
    },false)
}


//下拉刷新
export const pullRefresh = (ele,cb) => {
    //先获取当前元素的offsetTop 偏移量,如果正在下拉触发无效
    let offsetTop = ele.offsetTop
    let distance = 0
    ele.addEventListener('touchstart',(e)=>{
        let startY = e.touches[0].pageY
        let touchmove = function(e){
            let moveY = e.touches[0].pageY
            if(moveY-startY>0){//正在下拉刷新
                if(moveY-startY>50){
                    distance=50
                    return ele.style.top = offsetTop+50+'px'
                }
                distance = moveY-startY;
                ele.style.top = offsetTop+moveY-startY+'px'
            }else{
                ele.removeEventListener('touchmove',touchmove)
                ele.removeEventListener('touchend',touchend)
            }
        }
        let touchend = function(){
            let timer = null;
            //没有拉去到我们想要刷新的地址直接回去即可
            if(distance !== 50)return ele.style.top = offsetTop+'px'
            timer = setInterval(()=>{ //开一个定时器让其回到顶部
                distance--;
                if(distance<=0){
                    clearTimeout(timer)
                    cb();
                }
                ele.style.top = offsetTop+distance+'px'
            },6)
            ele.removeEventListener('touchmove',touchmove)
            ele.removeEventListener('touchend',touchend)
        }
        if(ele.offsetTop==offsetTop&&ele.scrollTop==0){
            ele.addEventListener('touchmove',touchmove)
            ele.addEventListener('touchend',touchend)
        }else{
            ele.removeEventListener('touchmove',touchmove)
            ele.removeEventListener('touchend',touchend)
        }
    },false)
}