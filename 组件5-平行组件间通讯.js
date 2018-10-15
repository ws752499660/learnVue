// 用来在平行组件间传递时间所用的Vue实例
var event=new Vue()

Vue.component('isaid',{
    template:`
    <div>
        我说:<input v-model='i_said' @keyup="on_change"/>{{i_said}}
    </div>`,
    methods:{
        on_change:function(){
            // 触发event实例的'iSaidSomething'事件
            event.$emit('iSaidSomething',this.i_said)
        }
    },
    data:function(){
        return{
            i_said:''
        }
    }
})
Vue.component('hesaid',{
    template:`<div>
        他说我说了:{{he_said}}
    </div>`,
    // 生命周期函数
    mounted:function(){
        thisp=this
        // 监听event实例的'iSaidSomething'事件，回调函数在此定义，处理返回的参数
        event.$on('iSaidSomething',function(data){
            thisp.he_said=data
        })
    },
    data:function(){
        return{
            he_said:''
        }
    }
})
new Vue({
    el:'#app',
})