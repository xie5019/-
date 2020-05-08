<template>
  <div class="footer">
    <div class="item">
      <link-router to='/Index'>
        <span class="icon icon-yemian"></span>
        <span class="text">首页</span>
      </link-router>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    height 96px
    background-color #fff
    border-top 2px solid #d9d9d9
    .icon
      width 10px
      height 10px
</style>
