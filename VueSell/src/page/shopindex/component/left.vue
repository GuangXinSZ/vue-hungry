<template>
  <div>
    <div class="leftcom" >
        <ul class="lesflist">
            <li
            ref="ResStr"
            class="itemlist" 
            v-for="(item,index) of goods" 
            :key="index" 
            @click="changeTab(index,this)"
            :class="currIndex === index  ? 'active': '' " 
            >
            {{ item.name }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
      goods: [Object,Array,String]
  },
  data () {
    return {
        currIndex: 1
    };
  },
  mounted () {
     
  },
  components: {},

  computed: {},

  methods: {
      changeTab(index) {
          let that = this
          let GetStr = this.$refs.ResStr[index].innerHTML;
          that.currIndex = index
          this.$emit('getchange',index)
      },
      backmove(){

      }
  }
}

</script>
<style lang='stylus' scoped>
>>> .leftcom
 overflow: hidden
 position: absolute
 left:0
 top: 3.5rem
 display: flex
 width: 24%
 height: auto
 .lesflist
  width: 100%
  display: flex
  justify-content: center
  flex-direction: column
  li:first-child
   display: block
   text-align: center
   width: 100% 
   height: 1rem
   line-height: 1rem
   font-size: 0.25rem
  .itemlist
   display: block
   text-align: center
   width: 100%
   height: 1rem
   line-height: 1rem
   font-size: 0.25rem
   text-overflow: ellipsis
   white-space: nowrap
   overflow: hidden
   background: #f3f5f7
  .active
   background: white
  .hot
   background: red
   
</style>