<template>
  <div>
    <keep-alive>
      <index-left :goods="goods" @getchange="changeLetter"></index-left>
    </keep-alive>
      <!-- <div class="lok" @click="click">父调子</div> -->
    <keep-alive>
     <index-right :goodsList="goods" :letter="letter" ref="child" @click="click" ></index-right>
    </keep-alive>

  </div>
</template>

<script>
import IndexLeft from './component/left'
import IndexRight from './component/right'
import MyShop from './component/myshop'
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
    IndexRight,
    MyShop
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
      }else if (res.status !== 200) {
        console.log("连接报错")
      }
    },
    changeLetter(res){
      //接收子传父
      this.letter = res
    },
    //直接调用子的方法
    click () {
      this.$refs.child.$emit('childMethod')
      // this.$refs.child.callMethod()
      this.$refs.child.callMethod()
    }
  
  }
}
</script>
<style lang='stylus' scoped>
.lok
 position: absolute
 top:0 
 left: 0
 background: red 
 color: white

</style>