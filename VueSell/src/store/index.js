import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        city: 'name',
        goodslist: []
    },
    actions: {
        addcar(ctx,res) {
            ctx.commit('addcar',res)
        }
    },
    mutations: {
        addcar(state,res) {
            state.goodslist.forEach( (item,index) =>{
                if(item.name == res.name){
                   state.goodslist.splice(index)
                   alert("您已经添加")
                   return false
                }
             })
            state.goodslist.push(res)
        }
    }
})