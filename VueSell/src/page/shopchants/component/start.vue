<!--  -->
<template>
  <div>
      <ul class="server">
          <li>
            <span class="ser-title">服务态度</span>
              <ul class="ser-childer">
               
                 
              </ul>
          </li>
          <li>客服信息</li>
           <li>送达时间</li>
      </ul>
  </div>
</template>

<script>
export default {
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
.server
 width: 100%
 margin: 0.2rem 0.48rem 
 li+li
  margin-top: 0.26rem
 li
  display: flex
  .ser-title
   font-size: 0.3rem
   color: $evrang
  ul
   display: flex
</style>