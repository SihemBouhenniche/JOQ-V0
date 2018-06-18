import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
var page = document.getElementById('app')
console.log(page)
var btnSignUp = page.querySelectorAll('.main-page button')
console.log(btnSignUp)
var sections = page.querySelectorAll('.content')
console.log(sections)