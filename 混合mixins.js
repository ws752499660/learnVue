/**
 * mixins 选项接受一个混入对象的数组。
 * 这些混入实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。
 * 举例：如果你的混入包含一个钩子而创建组件本身也有一个，两个函数将被调用。
 */

var base={
    data:function(){
        return{
            visible:false
        }
    },
    methods:{
        show:function(){
            this.visible=true
        },
        hide:function(){
            this.visible=false
        },
        toggle:function(){
            this.visible=!this.visible
        }
    }
}

Vue.component('tooltip',{
    template:`
    <div>
        <span @mouseenter="show" @mouseleave="hide">MFHaha</span>
        <div v-if="visible">
            皮皮虾
        </div>
    </div>`,
    mixins:[base],
})

Vue.component('popup',{
    template:`
    <div>
        <button @click="toggle">popup</button>
        <div v-if="visible">
            <h4 @click="hide">X</h4>
            <h4>Title</h4>
            MuHaha
        </div>
    </div>
    `,
    mixins:[base],
    // 在组件中定义的属性会覆盖掉mixins中的属性
    data:function(){
        return{
            visible:true
        }
    }
})

new Vue({
    el:'#app'
})