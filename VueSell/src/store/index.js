import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        city: 'name',
        goodslist: [],
        priceall: 0
    },
    actions: {
        addcar(ctx,res) {
            ctx.commit('addcar',res)
        },
        clearall(ctx,res) {
            ctx.commit('clearall')
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
           
        },
        clearall(state,res){
           let that = state.goodslist
          if(that.length == 0) {
              alert('购物车为空')
              return false
          }
          state.goodslist.forEach( (item,index) =>{
              state.goodslist.splice(item)
          } )          
        }
    }
})