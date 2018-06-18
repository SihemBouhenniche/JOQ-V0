<template>
  <div id="headerpage">
    <div class="navP" v-if = "show">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top nav-page">
        <a class="navbar-brand brand" href="#app">JOQ</a>
        <div class="separator"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#how">How it works</a>
          </li>
        </ul>
        <button type="button" class="btn btn-info btn-page" v-on:click="clientF">Client</button>
        <button type="button" class="btn btn-info btn-page" v-on:click="freeF">Freelancer</button>
      </nav>
    </div>
    <div class="clientdiv" v-if = "clientShow">
      <client></client>
    </div>
    <div class="freediv" v-if = "freeShow">
      <freelancerform></freelancerform>
    </div>
  </div>
</template>

<script>
  import Freelancerform from './Freelancerform'
  import client from './client'
export default {
  props: {
      show:{
        type : Boolean,
        default : true
      },
      clientShow: {
        type : Boolean,
        default : false
      },
      freeShow: {
        type : Boolean,
        default : false
      }
    },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods : {
    clientF: function (event) {
      this.show = false
      this.$parent.show = false
      this.clientShow = true
    },
    freeF: function (event) {
      this.show = false
      this.$parent.show = false
      this.freeShow = true
    }
  },
  components: {
    Freelancerform,
    client
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-page{
    font-family: 'Oswald', sans-serif;
    font-size: 1.3em;
  }
  .brand{
    letter-spacing: 2px;
    font-size: 1.5em;
    font-weight: 700;
  }
  .separator{
    width: 58%;
  }
  .btn-page{
    margin-left: 15px;
    width: 100px;
  }
</style>