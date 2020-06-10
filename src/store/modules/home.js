/* 
管理首页数据的vuex子模块
*/
import {
    reqCategoryList,
    reqBanners,
    reqFloors,
    reqRecommends
} from '@/api'

export default {
    state: {
        categoryList: [], // 分类列表
        banners: [],
        floors: [],
        recommends: []
    },
    mutations: {
        RECEIVE_RECOMMENDS(state, recommends) {
            state.recommends = recommends
        },
        RECEIVE_BANNERS(state, banners) {
            state.banners = banners
        },
        RECEIVE_FLOORS(state, floors) {
            state.floors = floors
        },
        /* 
        接收保存分类列表的mutation
        */
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        }
    }, // 当前子模块的mutations

    actions: {

        async getRecommends({
            commit
        }) {
            const result = await reqRecommends()
            if (result.code === 200) {
                const recommends = result.data
                commit("RECEIVE_RECOMMENDS", recommends)
            }
        },


        async getBanners({
            commit
        }) {
            const result = await reqBanners()
            if (result.code === 200) {
                const banners = result.data
                commit("RECEIVE_BANNERS", banners)
            }
        },

        async getFloors({
            commit
        }) {
            const result = await reqFloors()
            if (result.code === 200) {
                const floors = result.data
                commit("RECEIVE_FLOORS", floors)
            }
        },

        /* 
        请求获取分类列表的异步action
        */
        async getCategoryList({
            commit
        }) {
            // 调用接口请求函数发异步ajax请求
            const result = await reqCategoryList()
            console.log('result', result)
            // 请求成功后, 取出数据, 提交给mutation保存
            if (result.code === 200) {
                const categoryList = result.data.filter((item, index) => index < 15)
                commit('RECEIVE_CATEGORY_LIST', categoryList)
            }
        }

    }, // 当前子模块的actions

    getters: {
        test4(state) { // 当前state是当前的state

        }
    } // 当前子模块的getters
}