<template>
  <div class="list-manager">
    <div class="operation-header">
      <el-button type="primary" size="small">保存</el-button>
    </div>
    <div class="setting">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="医生:">
          <el-switch v-model="getLight.active"></el-switch>
        </el-form-item>
      </el-form>
    </div>
   <el-button type="text" @click="promptMsg">点击打开 Message Box</el-button>
  </div>
</template>
<script>
import _ from 'lodash'
import utils from '../../server/util.js'

export default {
  components: {
  },
  computed: {
      getLight () {
          return _.map(this.form, 'v')
      }
  },
  data () {
    return {
      form: [
          {
              id: 1,
              v: {
                  active: false
              }
          },
          {
              id: 2,
              v: {
                    define: false
              }
          }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    async promptMsg () {
      // utils.isVible()
      let resp = await utils.messageBox('此操作将永久删除该文件, 是否继续？')
      console.log(resp)
      // console.log(resp)
      // if(!resp) {
      //   return
      // }
      // console.log('123')
    }
  },
  mounted () {
  },
  created () {
  },
  watch: {
  }
}
</script>

<style scoped>
</style>

<style>
</style>
