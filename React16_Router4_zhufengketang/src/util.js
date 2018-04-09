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