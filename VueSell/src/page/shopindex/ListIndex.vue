<template>
  <div>
    <keep-alive>
      <index-left :goods="goods" @getchange="changeLetter"></index-left>
    </keep-alive>
     <index-right :goodsList="goods" :letter="letter"></index-right>
  </div>
</template>

<script>
import IndexLeft from './component/left'
import IndexRight from './component/right'
export default {
  data () {
    return {
      goods: '',
      goodsList: [],
      letter: ''
    };
  },
  mounted() {
    this.getinformsg()
  },
  components: {
    IndexLeft,
    IndexRight
  },
  computed: {},
  methods: {
    getinformsg() {
      this.$http.get('/api/data.json')
      .then(this.response)
    },
    response(res) {
      let that = this
      if(res.status == 200 ){
        that.goods = res.data.goods
        for(var i=0;i<that.goods.length;i++){
          that.goodsList.push(that.goods[i].foods)
        }
      }
    },
    changeLetter(res){
      //接收子传父
      this.letter = res
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>