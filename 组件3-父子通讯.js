var user_component={
    template:"#user_component",
    props:['username'],
    methods:{
    }
}

new Vue({
    el:"#app",
    components:{
        user:user_component,
    }
})