<template>
  <div class="index">
    <div class="myImage">
      <img src="">
    </div>
    <mt-cell class="info" title="我的信息" is-link="true" to="/fillDetail">
    </mt-cell>
    <mt-cell class="info" title="求职信息"  is-link="true" to="/fillDetail">
    </mt-cell>
    <Tabbar selectedTab="我的"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar.vue'

export default {
  components: {Tabbar},
  name: 'hello',
  data () {
    return {
      id:'1'
    }
  },
  methods: {
    goto(type){
      console.log(type);
      if(type == 'detail'){
        this.$router.push({path: '/personDetail/' + this.id});
      }else{
        this.$router.push({path: '/positionDetail/' + this.id, query: 'page= 1'});
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myImage{
  border-bottom:1px solid #d9d9d9;
}
img{
  width:150px;
  height:150px;
  margin:10px auto;
}
.info{
  font-size:20px;
  border-bottom:1px solid #d9d9d9;
}
</style>
