import {
    reqDetailInfo
} from '@/api'

const state = {
    detailInfo: {} // 商品详情信息   
}

const mutations = {
    /* 
    接收商品详情信息
    */
    RECEIVE_DETAIL_INFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
}

const actions = {
    /* 
    获取指定skuid的商品信息的异步action
    */
    async getDetailInfo({
        commit
    }, skuId) {
        const result = await reqDetailInfo(skuId)
        if (result.code === 200) {
            const detailInfo = result.data
            commit('RECEIVE_DETAIL_INFO', detailInfo)
        }
    },
}

const getters = {
    categoryView(state) {
        return state.detailInfo.categoryView ? state.detailInfo.categoryView : {}
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo ? state.detailInfo.skuInfo : {}
    },
    skuImageList(state) {
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}