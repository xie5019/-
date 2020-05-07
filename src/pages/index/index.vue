<template>
  <div class="index">
    <div class="index-header">
      <img class="logo" src="./images/logo.png" alt="">
      <div class="soso">
        <span>搜索商品,共25536种商品</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
    <div class="indexNav" ref="indexNav">
      <div>
        <div class="navItem" :class="{active:navIndex === 0}" @click="changeIndex(0)">推荐</div>
        <div class="navItem"
             v-for="(item, index) in indexData.kingKongModule.kingKongList" 
             :key="index"
             @click="changeIndex((index+1))"
             :class="{active:navIndex === index+1}"
             >
          {{item.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from "../../http"
export default {
  name: 'Index',
  data(){
    return {
      indexData: {},
      navIndex:0
    }
  },
  methods:{
    changeIndex(navIndex){
				this.navIndex = navIndex
			}
  },
  async mounted(){
    let navData = await http.index1.getnavs()
    this.indexData = navData
    this.$nextTick(() => {
      new BScroll(this.$refs.indexNav,{scrollX:true,click:true})
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .index
    width 100%
    height 100%
    .index-header
      display flex
      align-items center
      height 80px
      width 100%
      overflow hidden
      .logo
        width 138px
        height 40px
        margin 0 20px
      .soso
        width 442px
        height 56px
        margin-right 20px
        background-color #ededed
        border-radius 8px
        font-size 28px
        line-height 56px
        span
         color #666
         margin-left 60px
      .login
        width 74px
        height 40px
        border 2px solid #DD1A21
        text-align center
        line-height 40px
        border-radius 5px
        color #DD1A21
    .indexNav
      width 100%
      height 60px
      overflow hidden
      white-space nowrap
      & > div
        display inline-block
        .navItem
          position relative
          display inline-block
          white-space nowrap
          height 60px
          line-height 60px
          margin 0 15px
          font-size 30px
          &.active:after
            content ''
            position absolute
            bottom 0
            left 0
            width 100%
            height 4px
            background-color #BB2C08
         
      
        

</style>
