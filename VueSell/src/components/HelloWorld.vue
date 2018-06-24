<template>
  <div class="hello">
    项目初始化中
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$http.get('/api/data.json')
    .then( (res) => {
      console.log(res)
    } )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
