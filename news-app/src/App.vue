<template>
  <div id="app">
    <div style="width:1080px; margin:0 auto;">
      <Banner :banners="banners"/>
      <Channels />
      <NewsList :news="news"/>
    </div>
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import Channels from "./components/news/Channels";
import NewsList from "./components/news/NewsList";
import {getNews} from "./assets/services/newService"
export default {
  components:{
    Banner,
    Channels,
    NewsList,
  },
  data() {
    return {
      banners:[
        {url:require("./assets/banner/banner1.jpeg"),link:"https://www.baidu.com"},
        {url:require("./assets/banner/banner2.jpeg"),link:"https://www.baidu.com"},
        {url:require("./assets/banner/banner3.jpeg"),link:"https://www.baidu.com"},
      ],
      news: [],
    }
  },
  async created() {
    var resp = await getNews();
    console.log(resp);
    this.news = resp.contentlist;
  },
};
</script>
