import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (!onComplete && !onAbort) {
        return originPush.call(this, location).catch(error => {
            console.log(error.message)
        })
    } else {
        originPush.call(this, location, onComplete, onAbort)
    }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {

    if (!onComplete && !onAbort) {
        return originReplace.call(this, location).catch(error => {
            console.log('---replace', error.message)
        })
    } else {
        originReplace.call(this, location, onComplete, onAbort)
    }
}

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})