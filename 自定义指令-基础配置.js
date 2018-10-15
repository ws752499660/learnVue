// 第一个参数是自定义指令的名称
// 第二个参数用来处理指令传回的数据（函数）
// 第二个参数（函数）的第一个参数是该指令所在的HTML元素，第二个是该指令传回的值
Vue.directive('pin',function(el,binding){
    var pinned=binding.value
    if(pinned){
        el.style.position='fixed'
        el.style.top='10px'
        el.style.left='10px'
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