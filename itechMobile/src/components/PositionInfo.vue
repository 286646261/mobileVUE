<template>
  <div class="positionInfo">
    <div class="info">
      <div class="flex ">
        <div class="item left bigF">{{positionItem.name}}</div>
        <div class="item right bigF">{{positionItem.salary}}元/月</div>
      </div>
      <div class="flex">
        <div class="item left">{{positionItem.degree}}</div>
        <div class="item"></div>
        <div class="item right">招{{positionItem.recruitNum}}人</div>
      </div>
      <div class="flex">
        <div class="item left">{{positionItem.address}}</div>
        <div class="item">{{positionItem.workCycle}}天／周</div>
        <div class="item right">{{positionItem.workTime}}个月</div>
      </div>
    </div>
    <mt-cell class="left" title="上海后天有限公司" label="一家做互联网的公司" is-link>
      <img slot="icon" src="../assets/logo.png" width="48" height="48">
    </mt-cell>
    <div class="desc">
      <div class="descTitle left">职位描述</div>
      <div class="descInfo">
        {{positionItem.jobDescription}}
      </div>
      <mt-button class="top" size="large" type="default" @click="fillInfo">我要应聘</mt-button>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import {fetch} from './api';
import Tabbar from './Tabbar.vue'
import PictureInput from 'vue-picture-input'
export default {
  props:['item'],
  components:{Tabbar, PictureInput},
  name: 'positionInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      positionItem:{
        name:"",
        positionId: '',
        companyId: '',
        salary: '',
        degree: '',
        recruitNum: '',
        address:'',
        workCycle:'',
        workTime:'',
        jobDescription:''
      },
    }
  },
  methods:{
    fillInfo(){
      console.log("info");
    },
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  },
  mounted(){
    let degree = ['初中','高中','大专','本科','研究生', '博士'];
    fetch('/api/positions').then(data => {
      console.log("positions:" + JSON.stringify(data));
    });
    fetch('/api/position/1').then(data => {
      data.degree= degree[data.degree];
      this.positionItem = data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  padding:20px;
}
.flex{
  display:flex;
}
.bigF{
  font-size:22px;
}
.red{
  color:red;
}
.left{
  text-align:left;
}
.right{
  text-align:right;
}

.item{
  flex:1;
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
.descInfo{
  margin:10px 20px;
  padding-top:10px;
  background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
  background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
  background-size: 120% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  background-origin: border-box;
}
.top{
  margin-top:30px;
}
</style>
