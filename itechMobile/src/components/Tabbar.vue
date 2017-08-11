<template>
  <div class="footer">
    <mt-tabbar v-bind:fixed="true" :value="selectedTab">
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="职位">
        <img slot="icon" src="../assets/search.png">
        职位
      </mt-tab-item>
      <mt-tab-item id="公司">
        <img slot="icon" src="../assets/company.png">
        公司
      </mt-tab-item>
      <mt-tab-item id="我的">
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
