import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
const firebaseConfig = {
  apiKey: 'AIzaSyCjpUAeWw8aoVXvpSA-L0PCa9vweVYVwqA',
  authDomain: 'coursework-pizza.firebaseapp.com',
  databaseURL: 'https://coursework-pizza.firebaseio.com',
  projectId: 'coursework-pizza',
  storageBucket: 'coursework-pizza.appspot.com',
  messagingSenderId: '223918924999',
  appId: '1:223918924999:web:01ee1e599f441e298f8ae2'
}
firebase.initializeApp(firebaseConfig)

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
