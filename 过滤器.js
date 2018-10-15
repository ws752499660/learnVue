Vue.filter('currency',function(val,unit){
    val =val || 0
    unit=unit || "元"
    return val +unit
})

Vue.filter('meter',function(val,unit){
    val= val/1000|| 0
    // 保留小数点后两位
    return val.toFixed(2) +unit
})

new Vue({
    el:'#app',
    data:{
        price:"",
        length:0,
    }
})