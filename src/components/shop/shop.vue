<template>
  <div class="shop" >
    <div class="header">
      <span class="name">{{cateListObj.category.name}}</span>
      <span class="text">{{cateListObj.category.frontDesc}}</span>
    </div>
    <div class="shopContainer">
      <div  class="shopList" 
          v-for='(shopItem, index) in cateListObj.itemList' 
          :key='index' 
          @click='toDetail(shopItem)'>
        <img :src="shopItem.listPicUrl" alt="">
        <span class="text">{{shopItem.name}}</span>
        <span class="money">${{shopItem.retailPrice}}</span>
      </div>
      <div class="after"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props:['cateListObj']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .shop
    width 100%
    background-color #fff
    padding-bottom 98px
    .header
      display flex
      flex-direction column
      align-items center
      .name
        font-size 32px
        color #333
        margin 20px 0
      .text
        color #999
    .shopContainer
      display flex
      flex-wrap wrap
      justify-content space-evenly
      .shopList
        display flex
        flex-direction column
        width 345px
        img 
          width 345px
          height 345px
          margin-top 20px
        .text
          margin 20px 0 10px
          font-size 28px
        .money
          font-size 32px
          color red
          font-weight 500
          
      .after
         width 345px

</style>
