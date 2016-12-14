<template>
  <div >
    <!--关于自定义的header-->
    <v-header></v-header>
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

<script>
  import header from './components/header/header.vue'

  export default {
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
    @include border-1px(rgba(7,17,27,0.1));
    //border-bottom: 1px solid rgba(7,17,27,0.1);
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
