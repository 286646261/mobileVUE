<template>
  <div class="index">
    <img src="" />
    <div class="info">
      <div>知名外企</div>
      <div>互联网专区</div>
      <div>兼职</div>
      <div>极速岗位</div>
    </div>
    <Tabbar selectedTab="首页"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar.vue'
export default {
  components: {Tabbar},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:100%;
  background:gray;
}
.info{
  width:100%;
}
.info div{
  width:21%;
  margin:15px 2%;
  float:left;
  border:1px solid #000;
  height:80px;
  line-height:80px;
  box-sizing:border-box;
}

</style>
