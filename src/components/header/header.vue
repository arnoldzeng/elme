<template>
 <div class="header">
     <div class="content-wrapper">
       <div class="avatar">
         <img width="64" height="64" :src="seller.avatar">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
         </div>
         <div v-if="seller.supports" class="support"></div>
       </div>
     </div>
     <div class="bulletin-wrapper"></div>
 </div>
</template>
<style lang="scss">

</style>
<script type="text/ecmascript-6">
    export default {
      props: {
        seller: {
          type: Object
        }
      }
    }
</script>
