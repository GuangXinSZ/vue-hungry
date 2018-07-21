import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        city: 'name',
        goodslist: [],
        priceall: 0,
        flag: false,
        test: true,
        aloneshop: [],
        num: 1
    },
    actions: {
        addcar(ctx,res) {
            ctx.commit('addcar',res)
        },
        clearall(ctx,res) {
            ctx.commit('clearall')
        },
        close(cts,res){
            cts.commit('close',res)
        },
        show(ctx,res){
            ctx.commit('show',res)
        }
    },
    mutations: {
        addcar(state,res) {
            state.goodslist.forEach( (item,index) =>{
                if(item.name == res.name){
                   state.goodslist.splice(index,1)
                    alert("您已经添加")
                    state.test = false
                    return false
                }else{
                    state.test = true
                }
             })
             state.test == true ? state.flag = true : ''
             state.goodslist.push(res)
        },
        clearall(state,res){
           let that = state.goodslist
            if(that.length == 0) {
                return false
            }
            state.goodslist.forEach( (item,index) =>{
                state.goodslist.splice(item)
            } )          
        },
        close(state,res){
            state.num =res
            state.flag = false
        },
        show(state,res){
            state.aloneshop = res
            state.flag = true
        }
    }
})