import Vue from 'vue'
import App from './App.vue'
import router from './router';
// TWO
// import router to work

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
