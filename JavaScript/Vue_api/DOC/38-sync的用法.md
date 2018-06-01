
## .sync 修饰符

用的很少

<child :m.sync="money"></child>  相当于  <child :m="money" @update:m="val=>this.money=val"></child>

一般还是这样写

<child :m="money" @child-add="add"></child>