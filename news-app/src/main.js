import Vue from 'vue';
import App from './App.vue';
import "./assets/style/global.css";
import "./assets/style/reset.css";
import {getNewsChannels,getNews} from "./assets/services/newService";
// Vue.config.productionTip = false

// //第一种
// getNewsChannels().then((resp)=>{
//   console.log(resp);
// })

//第二种
// async function test(){
//   var resp = await getNewsChannels();
//   console.log(resp);  
// }
// test();

//第一种getNews
// getNews("5572a109b3cdc86cf39001e0").then((resp)=>{
//   console.log(resp);
// })

//第二种getNews
// async function test(){
//   var resp = await getNews("5572a109b3cdc86cf39001e0");
//   console.log(resp);
// }
// test();

new Vue({
  render: h => h(App),
}).$mount('#app')
