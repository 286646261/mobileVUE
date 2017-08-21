<template>
  <div class="educationDetail">
    <mt-field label="公司" placeholder="" v-model="username"></mt-field>
    <mt-field label="职位" placeholder=""  v-model="email"></mt-field>
    <mt-field label="开始时间" placeholder="请输入手机号" type="date" v-model="phone"></mt-field>
    <mt-field label="结束时间" placeholder="请输入网址" type="date" v-model="website"></mt-field>
    <mt-field label="描述" placeholder="工作内容介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
    <mt-button type="default">保存</mt-button>
    <mt-button type="default">取消</mt-button>
  </div>
</template>
<script>
import {fetch} from './api.js';
export default {
  name: 'persionDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    
  },
  mounted(){
  
    fetch('/api/user/1').then(data => {
      console.log("success user:" + JSON.stringify(data));
    });

    fetch('/api/movie/in_theaters').then(data => {
      //console.log("success:" + JSON.stringify(data));
    }, data => {
      console.log("error");
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
