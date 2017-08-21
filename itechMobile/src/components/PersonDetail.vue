<template>
  <div class="persionDetail">
    <div><picture-input 
      ref="pictureInput" 
      @change="onChange" 
      width="100" 
      height="100" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      prefill="../assets/logo.png"
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a GIF or GTFO'
      }">
    </picture-input>
    </div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-radio align="left" title="性别"  v-model="value" :options="['男', '女']"></mt-radio>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <div><mt-button type="default" @click="goto('educationDetail')">添加教育经历</mt-button></div>
    <div><mt-button type="default" @click="goto('workDetail')">添加工作经历</mt-button></div>

    <mt-button type="default">保存</mt-button>
    <mt-button type="default">取消</mt-button>
  </div>
</template>
<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'persionDetail',
  components:{PictureInput},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: '1'
    }
  },
  methods:{
    goto(type){
      this.$router.push({path: '/' + type + '/' + this.id});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.persionDetail .mint-radiolist{
  display:flex;
  margin-top:5px;
  background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
}
.persionDetail .mint-radiolist-title{
  font-size:16px;
  width: 105px;
  color:#2c3e50;
}
.mint-radiolist .mint-cell{
  background:none;
}
</style>
