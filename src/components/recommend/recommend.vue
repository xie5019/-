<template>
  <div class="recommend">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in indexData.focusList" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div> 
    </div>
    <div class="policyDescList">
			<div class="policyItem" v-for="(item, index) in indexData.policyDescList" :key='index'>
				<img :src="item.icon" alt="">
				<span>{{item.desc}}</span>
			</div>
		</div>
    <div class="kingkongList">
			<div class="kingkongItem" v-for="item in indexData.kingKongModule.kingKongList" :key='item.L1Id'>
				<img :src="item.picUrl" alt="">
				<span>{{item.text}}</span>
			</div>
		</div>
    <div class="banner">
			<img src="./banner.png" alt="">
    </div>
    <div class="activity">
      <div class="header">
        <div class="left"></div>
        <div class="center">新人专享礼</div>
        <div class="right"></div>
      </div>
      <div class="activityContainer">
        <div class="left"></div>
        <div class="right">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// import BScroll from 'better-scroll'
export default {
  name: 'Recommend',
  props: ['indexData'],
  mounted(){
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
    
    // this.$nextTick(() => {
    //   new BScroll(this.$refs.scrollContainer,{scrollX:true})
    // })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    width 100%
    padding-bottom 96px
    .swiper-container
      width 100%
      height 296px
      .swiper-wrapper
        width 100%
        height 296px
        display flex
        .swiper-slide
          width 100%
          height 100%
          img 
            width 100%
            height 100%
    .policyDescList
      display flex
      width 100%
      margin-top 20px
      .policyItem
        text-align center
        flex 1
        img 
          width 32px
          height 32px
          vertical-align middle
          margin-right 3px
          span 
            font-size 12px
            vertical-align middle
    .kingkongList
      width 100%
      height 372px
      display flex
      flex-wrap wrap
      margin 20px 0
      .kingkongItem
        width 20%
        display flex
        flex-direction column
        align-items center
        img 
          width 110px
          height 110px
        span 
          font-size 24px
          line-height 50px
    .banner
      width 100%
      height 240px
      // margin-bottom 20px
      padding-bottom 20px
      background-color #efefed
      img 
        width 100%
        height 100%
    .activity
      width 100%
      .header
        display flex
        justify-content center
        align-items center
        padding-top 20px
        .left 
          width 50px
          height 4px
          background-color #000
        .right
          width 50px
          height 4px
          background-color #000
        .center
          font-size 32px
          margin 0 20px
      .activityContainer
        display flex
        width 100%
        padding 20px 30px 0
        .left
          width 343px
          height 434px
          background-color #F9E9CF
          margin-right 4px
        .right
          width 343px
          height 438px
          .top
            width 100%
            height 215px
            background-color #F9E9CF
            margin-bottom 4px
          .bottom
            width 100%
            height 215px
            background-color #FFECC2
</style>
