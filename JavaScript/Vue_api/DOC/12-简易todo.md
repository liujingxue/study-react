
## todo

@keyup.enter="add"    // 当敲回车的时候，执行add方法

@keyup.13="add"       // 也是敲回车的时候，执行add方法

@keyup.a = "add"      // 当输入a的时候，执行add方法

@keyup.ctrl.a="add"   // 按ctrl+a的时候，执行add方法


```

<div id="app">
    <input type="text" v-model="val" @keyup.enter="add"/>
    <ul>
        <li v-for="(newArr1,index) in arr1">
            {{newArr1}}
            <button @click="remove($event,index)">删除</button>
        </li>
    </ul>
</div>

let vm = new Vue({
    el:'#app',
    methods:{
        add(e){
            //if(e.keyCode === 13){
                this.arr1.unshift(this.val)
                this.val = ''
            //}
        },
        remove(e,i){
            console.log(e)
            console.log(i)   // 传进来的是当前的索引
            this.arr1 = this.arr1.filter((item,index)=>{
                console.log(index)
//                    console.log(index !== i)   // 不相等的时候，才留下。 依靠索引来判断
//                    if( index == i){
//                        console.log('点击的那个')
//                    }
                return index !== i
            })
        }
    },
    data:{
        val:'',
        arr1:[]
    }
})



```