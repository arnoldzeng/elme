<template>
  <div >
    <!--关于自定义的header-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!--路由的用法-->
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
// 请求后台数据

  const ERR_OK = 0

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
          console.log(this.seller)
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss" >
  @import "./common/scss/mixxin.scss";

  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*对于border要对它进行一个mixmin，在手机里看会是两倍*/
    @include border-1px(rgba(0,100,224,0.1));
    //border-bottom: 1px solid rgba(240,20,27,0.1);
    .tab-item{
       flex:1;
       text-align: center;
      a{
        display: block;
        font-size:14px;
        color: rgb(77,85,93);
        &.active{
          color: rgb(240,20,20); 
        }
      }
    }
  }

  
</style>
