var routes=[
    {
        path:'/',
        component:{
            template:`
            <div>
                <h1>首页</h1>
            </div>
            `
        }
    },
    {
        path:'/about',
        component:{
            template:`
            <div>
                <h1>关于</h1>
            </div>
            `
        }
    },
    {
        path:'/user/:name',
        component:{
            /**
             * $route.query
             * 类型: Object
             * 一个 key/value 对象，表示 URL 查询参数。
             * 例如，对于路径 /foo?user=1，则有 $route.query.user == 1
             * 如果没有查询参数，则是个空对象。
             */
            /**
             * $route.params
             * 类型: Object
             * 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
             */
            template:`
            <div>
                <div>我叫{{$route.params.name}}</div>
                <div>我今年{{$route.query.age}}岁了</div>
            </div>
            `
        }
    }
]

var router=new VueRouter({
    routes
})

new Vue({
    el:'#app',
    router:router
})