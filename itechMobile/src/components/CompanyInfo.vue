<template>
  <div class="company">
    <div class="info">
      <div class="icon"><img src=""></div>
      <div>
        <div class="name">上海后天有限公司</div>
        <div class="address">上海 上海民生路190号305</div>
        <div class="address">互联网／电子商务    200人以上</div>
      </div>
    </div>
    <div class="desc">
      <div class="title">
        公司介绍 <span class="down" v-bind:class="{up:isUp}" @click="detail">展开详情</span>
      </div>
      <div class="content" v-bind:class="{cHeight:isUp}">iTechPlus是互联网技术社群，帮助技术人才：技能提升、职业进阶、活动社交，为企业提供技术培训、顾问服务、人才招聘。目前旗下有：iTech+技术社群、iTech+培训学院、iTech+顾问服务和iTech+人才招聘</div>
    </div>
    <Tabbar selectedTab="公司"></Tabbar>
  </div>
</template>
<script>
import Tabbar from './Tabbar.vue'
export default {
  name: 'company',
  components:{Tabbar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isUp: false,
    }
  },
  methods:{
    fillInfo(){
      console.log("info");
    },
    detail(){
      this.isUp = !this.isUp;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  border-bottom:1px solid #d9d9d9;
  height:110px;
}
.name{
  font-size:20px;
  line-height:40px;
  text-align:left;
}
.address{
  font-size:16px;
  line-heigth:30px;
  text-align:left;
  height:30px;
}
.icon{
  float:left;
  margin-right:10px;
}
img{
  width:100px;
  height:100px;
}
.title{
  font-size:20px;
  line-height:30px;
  height:30px;
  text-align:left;
  margin:20px 10px;
}
.down{
  line-height:30px;
  font-size:16px;
  float:right;
}
.down::after{
  content: " ";
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-left: 10px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  transform: rotate(-45deg);
  //vertical-align: middle;
}
.up:after{
  transform: rotate(-225deg);
  vertical-align: middle;
}
.content{
  text-align:left;
  font-size:16px;
  line-height:20px;
  height:40px;
  overflow:hidden;
}
.cHeight{
  height:100%;
}
.descTitle{
  font-size:24px;
  line-height:30px;
  margin:10px 20px;
  padding-top:10px;
  background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
  background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
  background-size: 120% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  background-origin: border-box;
}

</style>
