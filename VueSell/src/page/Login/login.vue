<!--  -->
<template>
  <div class="loginForm">
    <mt-field label="用户名" state="success" v-model="username"></mt-field>
    <mt-field label="密码" state="success" v-model="password"></mt-field>
    <div class="login">
    <mt-button type="primary" @click="jump">登录</mt-button>
    <mt-button  type="danger" @click="reset">重输</mt-button> 
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
        email: '',
        username: '',
        password: '',
        array: [],
    };
  },

  components: {},
  mounted() {
      this.propt()
  },
  methods: {
      jump(){
          var str = { name: "xin", password: 987654321 }
          //结构对象赋值
          var { name,password } = str
          var check = [9,8,7,6,5,4,3,2,1]
          var password = this.bubbleSort(check).join('')
          if(this.username == '' || this.password == '' || (this.username !== name && this.password !== password) ) {
              Toast({
                    position: 'top',
                    duration: 2000,
                    message: '账号或者密码错误',
                    iconClass: 'icon icon-default'
            })
          }else {
               localStorage.setItem('lz_xin',this.username)
               localStorage.setItem('lz_password',this.password)
               this.$router.push('/index');
          }
    },
    reset(){
        this.username = ''
        this.password = ''
    },
    // 冒泡排序
    bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                    var temp = arr[j+1];        //元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    },
    propt () {
        Toast({
            position: 'top',
            duration: 3000,
            message: '账号Xin密码123456789',
            iconClass: 'icon icon-default'
        })
    }
  }
}

</script>
<style lang='stylus' scoped>
.loginForm{
    width: 100%;
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding:40px 40px 0 40px;
    width: 300px;
    /*height:160px;*/
    border-radius: 5px;
    background: #ccc;
  }
.login
 display: flex
 justify-content:space-between
 margin-bottom: 0.2rem
 margin-top: 0.2rem
</style>