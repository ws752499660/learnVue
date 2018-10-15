// 第一个参数是自定义指令的名称
// 第二个参数是钩子函数（默认简写为bind和update时触发的函数）
// 第二个参数（函数）的第一个参数是该指令所在的HTML元素，第二个是一个对象，详情参考下面的文档
// 参考文档：https://cn.vuejs.org/v2/guide/custom-directive.html
/*  
指令钩子函数会被传入以下参数：
el：指令所绑定的元素，可以用来直接操作 DOM 。
binding：一个对象，包含以下属性：
name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
*/
Vue.directive('pin',function(el,binding){
    var pinned=binding.value
    var position=binding.modifiers
    var warning=binding.arg
    if(pinned){
        el.style.position='fixed'
        for(var key in position){
            if(position[key]){
                el.style[key]='10px'
            }
        }
        if(warning){
            el.style.background='red'
        }
    }
    else{
        el.style.position='static'
    }
})

new Vue({
    el:'#app',
    data:{
        card1:{
            pinned:false,
        },
        card2:{
            pinned:false,
        },
    }
})