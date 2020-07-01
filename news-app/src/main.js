import Vue from 'vue';
import App from './App.vue';
import "./assets/style/global.css";
import "./assets/style/reset.css";
import {getNewsChannels,getNews} from "./assets/services/newService";



new Vue({
  render: h => h(App),
}).$mount('#app')
