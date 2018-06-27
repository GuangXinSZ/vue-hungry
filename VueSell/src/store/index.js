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
            state.goodslist.unshift(res)
           for(var i=0;i<state.goodslist.length;i++){
               console.log(state.goodslist[i])
           }
        }
    }
})