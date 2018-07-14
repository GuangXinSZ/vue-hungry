<!--  -->
<template>
  <div class="indentCurrDetail" ref="wrapper">
      你写的任务
      <header class="indentMain">
          <div class="indentImg">
              <img src="../../assets/image/title2.jpg" />
          </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'goodsDetail',
  props: {
      //接收参数
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
@import '~styles/varibes.styl';
.indentCurrDetail
 .indentMain
  width: 100%
  display: flex
  justify-content:center
  .indentImg
   width: 100%
   height: 7.5rem
   overflow:hidden
   img
    width: 100%
    height: 100%
</style>