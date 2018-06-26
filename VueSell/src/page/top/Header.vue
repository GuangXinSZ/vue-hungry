<template>
    <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
            <div class="title">
                <span class="brand"><img class="brand" src="./brand@2x.png" /></span>
                <span class="name">{{ seller.name }}</span>
            </div>
            <div class="description">
                {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
            </div>
            <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{ seller.supports[0].description }}</span>
            </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
        </div>
        </div>
      <div class="bulletin-wrapper">
          <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>

          <i class="icon-keyboard_arrow_right"  @click="showDetail"></i>
      </div>
        <div class="background">
          <img :src="seller.avatar" width="100%" height="100%">
        </div>
    <div v-if="detailShow" class="detail">
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
      <h1 class="name">{{ seller.name }}</h1>
       <h1 class="name">商家介绍</h1>
       <div class="namelist">{{ seller.bulletin }}</div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="hideDetail">x</i>
      </div>
     </div>
    </div>
</div>
</template>

<script>
export default{
  props: {
    seller: {
        type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  mounted() {
      console.log('====================================');
      console.log(this.seller);
      console.log('====================================');
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
   position: relative
   overflow: hidden
   color: #fff
   background: rgba(7,17,27,0.5)

   .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display:inline-block
        vertical-align: top
        img
         border-radius:2px
       .content
         display:inline-block
         margin-left: 16px
         font-size: 14px
         .title
           margin: 2px 0 8px 0
           .brand
            display:inline-block
            vertical-align: top
            width:30px
            height:18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
            .name
             margin-left: 6px
             font-size: 16px
             line-height: 18px
             font-weight: bold
         .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
         .support
          .icon
           display: inline-block
           vertical-align: top
           width: 12px
           height: 12px
           margin-right: 4px
           background-size: 12px 12px
           background-repeat: no-repeat
           &.decrease
            bg-image('decrease_1')
           &.discount
            bg-image('discount_1')
           &.guarantee
            bg-image('guarantee_1')
           &.invoice
            bg-image('invoice_1')
           &.special
            bg-image('special_1')
          .text
           vertical-align: top
           line-height: 10px
           font-size: 12px
       .support-count
        position:absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0,0,0,0.2)
        text-align: center
        .count
         vertical-align:top
         font-size: 10px
        .icon-keyboard_arrow_right
         margin-right: 2px
         line-height: 24px
         font-size: 10px
   .bulletin-wrapper
     position: relative
     height: 28px
     line-height: 28px
     padding: 0 22px 0 12px
     white-space: nowrap
     overflow: hidden
     text-overflow: ellipsis
     background: rgba(7,17,27,0.2)
     .bulletin-title
      display: inline-block
      vertical-align: top
      margin-top: 9px
      width: 22px
      height: 12px
      bg-image('bulletin')
      background-size: 22px 12px
      background-repeat: no-repeat
     .bulletin-text
      vertical-align: top
      margin: 0 4px
      font-size: 10px
     .con-keyboard_arrow_right
      position: absolute
      font-size: 10px
      right: 12px
      top: 8px
   .background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    filter: blur(10px)
   .detail
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    height: 100%
    overflow: auto
    background: rgba(7,17,27,0.8)
    .detail-wrapper
     width: 100%
     min-height: 100%
     .detail-main
      margin-top: 64px
      padding-bottom: 64px
      .name
       line-height: 16px
       text-align: center
       font-size: 16px
       font-weight: 700px
      .namelist
       padding-top: 0.2rem
       width: 80%
       margin: 0 auto
       text-indent: 0.3rem
       overflow: hidden
     .detail-close
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      clear: both
      font-size: 32px
</style>