<!--  -->
<template>
  <div>
    <div class="logisTitle">
      <div class="brack" @click="back">返回</div>
        管理中心
    </div>
      <header class="logisShopping">
        <ul class="list" v-for="(item,index) of showTab" :key="index">
          <li @click="indexItem(1)" :class="currindex == 1 ? 'colorBtn' : 'blueBtn' ">{{ item.alreadyBuy }}</li>
          <li @click="indexItem(2)" :class="currindex == 2 ? 'colorBtn' : 'blueBtn' ">{{ item.alreadyDelivery }}</li>
          <li @click="indexItem(3)" :class="currindex == 3 ? 'colorBtn' : 'blueBtn' ">{{ item.noDelivery }}</li>
          <li @click="indexItem(4)" :class="currindex == 4 ? 'colorBtn' : 'blueBtn' ">{{ item.noPayment }}</li>
        </ul>
      </header>
      <section class="logisList" v-if="currindex == 1">
        <ul>
          <li v-for="(items,index) of alreadyBuy" :key="index">
            <div class="imgShop">
                <img :src=" items.avatar" />
            </div>
            {{ items.name }}
          </li>
        </ul>
      </section>
      <section class="logisList" v-if="currindex == 2 ">
         <ul>
            <li v-for="(items,index) of alreadyDelivery" :key="index">
              {{ items.name }}
          </li>
        </ul>
      </section>
       <section class="logisList" v-if="currindex == 3 ">
         <ul>
           <li v-for="(items,index) of noDelivery" :key="index">
              <img :src=" items.avatar" />
            {{ items.name }}
          </li>
        </ul>
      </section>
       <section class="logisList" v-if="currindex == 4 ">
         <ul>
          <li v-for="(items,index) of noPayment" :key="index">
             
            {{ items.name }}
          </li>
        </ul>
      </section>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      currindex:1,
      showTab: [
        {
        alreadyBuy: '已购买',
        alreadyDelivery: '已发货',
        noDelivery: '未发货',
        noPayment: '未付款',
        }
      ],
      alreadyBuy: [],
      alreadyDelivery: [],
      noDelivery: [],
      noPayment: [],
      shop:[
        {
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          name: '未付款',
          id: 4
        },
        {
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          name: '已购买',
          id: 1
        },
          {
          avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          name: '已发货',
          id: 2
        },
          {
          avatar: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
          name: '未发货',
          id: 3
        },
      ]
    };
  },

  components: {},

  computed: {},
  mounted() {
      this.getMessage();
  },
  methods: {
    indexItem(index){
      if(index){
        this.currindex = index
      }
    },
    back(){
      //返回上一页
      this.$router.go(-1)
    },
    getMessage(){
       let copShop = this.shop
      //此处没有借口只能写静态的数据模仿一下
      for(let i=0;i<copShop.length;i++){
        //switch id的类型
        switch (copShop[i].id) {
          case 1:
          //添加
           this.alreadyBuy.push(copShop[i]);
           break;
          case 2:
           this.alreadyDelivery.push(copShop[i]);
           break;
          case 3:
           this.noDelivery.push(copShop[i]);
          break;
          case 4:
           this.noPayment.push(copShop[i]);
          break;
          default: 
           alert("错误信息")
        }
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
@import '~styles/varibes.styl';
.logisTitle
 position: relative
 display: flex
 justify-content: center
 height:0.8rem
 line-height: 0.8rem
 color:#00bcd4
 background: #f2f2f2
 font-size: 0.3rem
 .brack
  position: absolute
  left:0.4rem
  top:0
.logisShopping
 width: 100%
 height: 0.8rem
 line-height: 0.8rem
 .list
  display: flex
  align-self: center
  .colorBtn
   color: red
   border-bottom: 1px solid red
  .blueBtn
   color: #00bcd4
  li
   flex: 1
   display: block
   text-align: center
   box-sizing: border-box
.logisList
 margin-top: 0.2rem
</style>