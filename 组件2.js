var like_component={
    template:'#like_component',
    data:function(){
        return{
            like_count:0,
            liked:false
        }
    },
    methods:{
        onclick:function(){
            if(!this.liked)
                this.like_count++;
            else
                this.like_count--;
            this.liked=!this.liked;
        }
    }
};

new Vue({
    el:'#app',
    components:{
        like:like_component
    }
})