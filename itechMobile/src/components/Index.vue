<template>
  <div class="index">
    <img src="" />
    <div class="info">
      <div>知名外企</div>
      <div>互联网专区</div>
      <div>兼职</div>
      <div>极速岗位</div>
    </div>
    <PositionItem v-bind:items="items"></PositionItem>
    <Tabbar selectedTab="首页"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar.vue'
import PositionItem from './PositionItem.vue'
import {getInfo} from './api.js';

export default {
  components: {Tabbar, PositionItem},
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[{
        positionInfo:"java工程师",
        price:"3000-5000／月",
        createDate: '10.8发布',
        locationInfo: '上海',
        workDays: '每周5天',
        type: '互联网'
      },{
        positionInfo:"java工程师",
        price:"3000-5000／月",
        createDate: '10.8发布',
        locationInfo: '上海',
        workDays: '每周5天',
        type: '互联网'
      }],
    }
  },

  mounted(){
    getInfo(url).then(data => {
      console.log("request");
    });
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
  overflow:hidden;
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
