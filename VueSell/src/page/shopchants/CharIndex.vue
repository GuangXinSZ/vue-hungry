<!--  -->
<template>
  <div>
      <el-button type="success" icon="el-icon-search">成功按钮</el-button>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple-dark">1</div></el-col>
        <el-col :span="8" :offset="8"><div class="grid-content bg-purple-dark">1</div></el-col>
      </el-row>
    <!-- center end  space-between space-around -->
      <el-row type="flex" justify="center">
              <el-col :span="6"><div class="grid-content bg-purple-dark">1</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-dark">1</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-dark">1</div></el-col>
      </el-row>
      <i class="el-icon-loading"></i>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
.el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>