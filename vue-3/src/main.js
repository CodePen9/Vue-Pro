import Vue from "./lib/vue.js";
//import Userinfo from "./components/Userinfo.js";
//Vue.component("Userinfo",Userinfo); //全局注册
import Ap from "./Ap.js";



new Vue({
    render: (h) => h(Ap),
}).$mount("#app");




// var template = `<div id="app">
//     <h1>{{title}}</h1>
//     <user-info name="jack" age="18" />
//     <user-info name="tom" age="18"></user-info>
//     <user-info v-for="(item,i) in users" :key="i" :name="item.name" :age="item.age"></user-info>
// </div>`;

// new Vue({
//     data:{
//         title:"hello wrold",
//         users:[
//             {name:"mike",age:20},
//             {name:"amay",age:22},
//         ]
//     },
//     components:{
//         "user-info":Userinfo,
//     },
//     template,
// }).$mount("#app");
