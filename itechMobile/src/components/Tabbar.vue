<template>
  <div class="footer">
    <mt-tabbar v-bind:fixed="true" :value="selectedTab" v-model="selected">
      <mt-tab-item id="首页" @click="toPage(1)">
        <img slot="icon" src="../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="职位" @click="toPage(2)">
        <img slot="icon" src="../assets/search.png">
        职位
      </mt-tab-item>
      <mt-tab-item id="公司" @click="toPage(3)">
        <img slot="icon" src="../assets/company.png">
        公司
      </mt-tab-item>
      <mt-tab-item id="我的" @click="toPage(4)">
        <img slot="icon" src="../assets/me.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['selectedTab'],
  data () {
    return {
      selected: this.selectedTab
    }
  },
  watch:{
    'selected':'toPage'
  },
  methods:{
    toPage(){
      console.log(this.selected);
      if(this.selected == "首页"){
        this.$router.push({path:"/index"});
      }else if(this.selected == "公司"){
        this.$router.push({path:"/companyInfo"});
      }else if(this.selected == "我的"){
        this.$router.push({path:"/center"});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
