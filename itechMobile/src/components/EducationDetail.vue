<template>
  <div class="educationDetail">
    <mt-field label="学校" placeholder="请输入学校" v-model="username"></mt-field>
    <mt-field label="专业" placeholder="请输入专业"  v-model="email"></mt-field>
    <mt-field label="学历" placeholder="请输入学历" v-model="password"></mt-field>
    <mt-field label="开始时间" placeholder="请输入手机号" type="date" v-model="phone"></mt-field>
    <mt-field label="结束时间" placeholder="请输入网址" type="date" v-model="website"></mt-field>
    <mt-field label="成绩" placeholder="有点" type="textarea" rows="4" v-modal="introduction"></mt-field>
    <mt-button type="default">保存</mt-button>
    <mt-button type="default">取消</mt-button>
  </div>
</template>
<script>
export default {
  name: 'persionDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
