<template>
  <div class="cateList" v-if="cateListObj">
    <div class="swiper-container" v-if="cateListObj">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(bannerItem, index) in cateListObj.category.bannerUrlList" :key='index'>
            <img :src="bannerItem" alt="">
          </div> 
      </div>
      <div class="swiper-pagination"></div>  
    </div>
    <Shop :cateListObj="cateListObj"></Shop>
  </div>
</template>

<script>
import Swiper from 'swiper'
import http from "../../http"
import Shop from '../shop/shop'
export default {
  name: 'CateList',
  props:['navId'],
  data(){
    return{
      cateListData:[]
    }
  },
  components:{
    Shop
  },
  async mounted(){
    let cateData = await http.index1.getIndexCateListData()
    this.cateListData = cateData
    this.$nextTick(()=>{
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
      })
    })
  },
  computed:{
    cateListObj(){
      return this.cateListData.find((item) => item.category.parentId === this.navId)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cateList
    background-color #eee
    .swiper-container
      width 100%
      height 296px
      margin-bottom 20px
      .swiper-wrapper
        height 296px
        display flex
        .swiper-slide
          width 100%
          height 100%
          img 
            width 100%
            height 100%
</style>
