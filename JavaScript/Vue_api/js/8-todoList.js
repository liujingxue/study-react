/**
 * Created by Administrator on 2018/5/8.
 */


let vm = new Vue({
    el:'#app',
    directives:{
        focus(el,bindings){ //el是当前元素
            //当cur==todo的时候，当点击当前li时让内部的输入框获取焦点
            if(bindings.value){ //如果bindings.value为true
                el.focus() //获取焦点
            }
        }
    },
    computed:{
        count(){ //默认为get()
            return this.todos.filter(item=>!item.isSelected).length
        },
        filterTodos(){
            if(this.hash === 'all') return this.todos;
            if(this.hash === 'finish') return this.todos.filter(item=>item.isSelected);
            if(this.hash === 'unfinish') return this.todos.filter(item=>!item.isSelected);
            return this.todos; //默认
        }
    },
    watch:{
        todos:{ //watch默认只监控一层的数据变化
            handler(){ //默认写成函数，就相当于默认写了个handler
                //localStorage默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos))
            },deep:true
        }
    },
    created(){ //ajax获取，初始化数据
        //如果localStorage中有数据，就用有的。 没数据，就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos  // 如果localStorage没数据，则用this.todos的数据

        //监控hash值的变化,如果页面已经有hash了，重新刷新页面也要获取hash值
        this.hash = window.location.hash.slice(2) || 'all' //如果没有hash,则用默认的all
        window.addEventListener('hashchange',()=>{
            //当hash值变化，重新操作记录的数据
            this.hash = window.location.hash.slice(2)
        },false)

    },
    methods:{
        add(){ // keydonw和keyup差一个单词，keydonw的时候内容没有进入到输入框内
            // alert(this.title)
            this.todos.push({
                isSelected:false,
                title:this.title
            })
            this.title = ''
        },
        remove(todo){ //拿到当前点击的和数组里的比对相等则返回false即可
            this.todos = this.todos.filter(item=>item!==todo)
        },
        remeber(todo){ //当前传递的是todo(当前点击的这一项)
            this.cur = todo
        },
        cancel(){
            this.cur = ''
        }
    },
    data:{
        todos:[
            {isSelected:false, title:'睡觉'},
            {isSelected:false, title:'吃饭'}
        ],
        title:'',
        cur:'', //当前项
        hash:''
    }
})

//1.将数据循环到页面上
//2.敲回车时，添加新数据(需要加入isSelected属性)
//3.删除功能
//4.计算一下当前没有被选中的个数
