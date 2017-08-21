<template>
  <div class="positionItem">
    <div class="title">职位信息</div>
    <div v-for="item in items" class="item">
      <div class="pInfo">
        <span>{{item.positionInfo}}</span>
        <span class="red">¥{{item.price}}</span>
      </div>
      <div class="pInfo">
        <span>上海Itech信息技术有限公司</span>
        <span>{{item.createDate}}</span>
      </div>
      <div class="pInfo">
        <span>{{item.locationInfo}}</span>
        <span>{{item.workDays}}</span>
        <span>{{item.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['items'],
  name: 'positionItem',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size:24px;
  text-align:left;
  margin-bottom:20px;
}
.red{
  color:red;
  display:inline-block;
  float:right;
}
img{
  width:100%;
  background:gray;
}
.positionItem{
  padding:10px 20px;
}
.item{
  border-bottom:1px solid #000;
  margin-bottom:20px;
}
.pInfo{
  font-size:16px;
  line-height:30px;
  overflow:hidden;
  text-align:left;
}
</style>
