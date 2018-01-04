import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'


import App from './App'
import router from './router'

import * as firebase from 'firebase'

import {store} from './store'

Vue.use(Vuetify, 
  { theme: {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCTz2tfDi4VlQZSD_iYxXiXVTjRxTFu_Pw",
      authDomain: "meetup-kiev.firebaseapp.com",
      databaseURL: "https://meetup-kiev.firebaseio.com",
      projectId: "meetup-kiev",
      storageBucket: "meetup-kiev.appspot.com",
      messagingSenderId: "1086581149055"
    })
  }
})
