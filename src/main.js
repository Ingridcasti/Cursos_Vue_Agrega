import { createApp } from 'vue'
//import vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//vue.config.productionTip=false

//import BaseForm from '@/components/BaseForm'


//vue.component('BaseForm',BaseForm);

//new vue({
  //  router,
  //  store,
  //  render: h => h(App)
//}).$mount('#app')

createApp(App).use(store).use(router).mount('#app')

