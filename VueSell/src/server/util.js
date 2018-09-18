
import Vue from 'vue'
import _ from 'lodash'
import { Message, MessageBox } from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

function messageBox (propmt) {
  return new Promise((reslove, reject) => {
    MessageBox.confirm(`${propmt}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        reslove(true)
    }).catch(() => {
        reject(false)
    })
  })
}

function showToast (msg, icons) {
    Message({message: `${msg}`, icon: `${icon}`})
}

function errMessage (msg) {
    Message.error(`${msg}`)
}

function isVible () {
    Message({title: '提示'})
}
export default {
    messageBox,
    isVible,
    showToast,
    errMessage
}