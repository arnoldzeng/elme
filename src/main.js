// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
//这里要在WEBPACK.base里面设置成common
import 'common/scss/index.scss'

Vue.use(VueRouter)

let app = Vue.extend(App)

//修改点击后的class
let router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')
//当进入页面之后是空白的，给他一个自动进入页面
router.go('/goods')
