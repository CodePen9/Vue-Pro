<template>
  <div class="banner-container">
    <ul class="images" style="width:300%">
        <li><a href=""><img src="../assets/banner/banner1.jpeg" alt=""></a></li>
        <li><a href=""><img src="../assets/banner/banner2.jpeg" alt=""></a></li>
        <li><a href=""><img src="../assets/banner/banner3.jpeg" alt=""></a></li>
    </ul>
    <ul class="dots">
        <li class="active"></li>
        <li></li>
        <li></li>
    </ul>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img{
    width: 1080px;
    height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>