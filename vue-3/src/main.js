import Vue from "./lib/vue.js";

// new Vue({
//     data:{
//         title:"hello wrold",
//     },
//     el:"#app",
// },)


var template = `<div id="app"><h1>{{title}}</h1></div>`;

new Vue({
    data:{
        title:"hello wrold",
    },
    template,
}).$mount("#app");