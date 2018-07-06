<!--  -->
<template>
  <div class="wechat">
    <div class="evaluation">
      <div class="evleft">
        <ul>
          <li class="title">3.9</li>
          <li class="evrang">综合评分</li>
          <li class="mynear">高于周边商家69.2%</li>
        </ul>
      </div>
      <div class="evright">
        <start-item></start-item>
      </div>
    </div>
  </div>
</template>

<script>
import StartItem from './component/start'
export default {
  data () {
    return {
    };
  },

  components: {
    StartItem
  },

  computed: {},

  methods: {
    handleClick(){
      this.$toast("123")
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
@import '~styles/varibes.styl';
.evaluation
 display: flex
 flex-direction: row
 div
 .evright
  flex: 2
 .evleft
  display: flex
  flex: 1.4
  justify-content: center
  text-align: center
  height: 2.5rem
  padding-top: 0.2rem
  box-sizing: border-box
  border-right: 1px solid #ccc
  ul
   li+li
    margin-top: 0.15rem
   .title
    font-size: 0.7rem
    color: $evcolor
   .evrang
    font-size: 0.3rem
    color: $evrang
   .mynear
    font-size: 0.26rem
    color: $mynear
</style>