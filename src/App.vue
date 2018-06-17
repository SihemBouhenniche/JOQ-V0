<template>
  <div id="app">
    <headerpage></headerpage>
    <div class="container-fluid main-page">
      <div class="transparent-block"></div>
      <img src="./img/logo.png">
      <h1 class="brand-title"><span class="brand-color">J</span>eune <span class="brand-color">O</span>ffre un service de <span class="brand-color">Q</span>ualité</h1>
      <button type="button" class="btn btn-dark btn-main-1 btn-lg">Client</button>
      <button type="button" class="btn btn-light btn-main-2 btn-lg">Freelancer</button>
    </div>
    <content v-for= "item in tabContent" :id="item.ID" v-bind:title="item.title" v-bind:description = "item.description" v-bind:style="{backgroundColor : item.color}" v-bind:right = "item.right"></content>
</template>

<script>
import Hello from './components/Hello'
import Headerpage from './components/Headerpage'
import Content from './components/Content'
export default {
  data ()  { return {
    tabContent : [

  {ID : 'about', title : 'About Us', description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' , color : '#F0EDE5', right : false
},
  {ID : 'how', title : 'How It Works', description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',color : '#B4B7BA',right : true}
  ]
  }},
  components: {
    Hello,
    Headerpage,
    Content
  }
}
</script>

<style>

.main-page{
  margin-top: 70px;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
  position: relative;
  background: rgba(23, 162, 184, 0.3);
  font-family: 'Oswald', sans-serif;
}
.transparent-block{
  background-image: url(./img/back1.jpg);
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.5;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}
.brand-title{
  margin-top: 30px;
}
.brand-color{
  color: #17a2b8;
}
.btn-main-2{
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 150px;
}
.btn-main-1{
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  width: 150px;
}
</style>
<style src = "./bootstrap/bootstrap.min.css"></style>
