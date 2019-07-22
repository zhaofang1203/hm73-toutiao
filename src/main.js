import Vue from 'vue'
import App from './App.vue'
// 导入ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router.js'
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
