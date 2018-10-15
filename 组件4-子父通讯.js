Vue.component('balance',{
    template:`
    <div>
        <div v-if="show">
            余额不足
        </div>
        <!--由子组件传入的参数传给v-on:show_balance(methods:show_balance()方法)-->
        <show @show_balance="showfunction"></show>
    </div>
    `,
    data:function(){
        return{
            show:false,
        }
    },
    methods:{
        // 由子组件传来的参数传递给show_balance方法
        showfunction:function(data){
            this.show=true;
            console.log(data)
        }
    }
})

Vue.component('show',{
    template:'<button @click="onclick">显示余额</button>',
    methods:{
        onclick:function(){
            // 第二个参数是可选的传递参数
            // 文档：https://cn.vuejs.org/v2/api/#vm-emit
            // 触发当前实例上的事件，本例中为当前实例balance的自定义事件show_balance
            this.$emit('show_balance',{a:1,b:2});
        }
    }
})

new Vue({
    el:"#app"
})