<template>
  <div id="freelancerform">
    <div class="container-fluid freelancerform" v-if = "show">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark nav-page">
        <a class="navbar-brand brand" href="#app">JOQ</a>
      </nav>
      <div class="content">
        <h1>Welcome back JOQ'ER</h1>
        <form>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model = "email">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your password" v-model = "password">
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> Remember me
            </label>
          </div>
          <div class="form-group">
            <a href="#" v-on:click = "forgot">Forgot your password ?</a>
            <a href="#" style="float: right;" v-on:click = "sign">Be a JOQ'ER</a>
          </div>
          <button type="submit" class="btn btn-info" v-on:click= "provideInfo">Submit</button>
        </form>
      </div>
    </div>
    <div v-if = "forgotp"> 
      <forgotpwd></forgotpwd>
    </div>
    <div v-if = "signin">
      <signinfree></signinfree>
    </div>
  </div>
</template>

<script>
  import Forgotpwd from './Forgotpwd'
  import Signinfree from './Signinfree'
export default {
  props: {
    email:{
        type : String,
        default : ''
     },
    password: {
      type : String,
      default : ''
    }, 
    show : {
      type : Boolean,
      default : true
    },
    forgotp : {
      type : Boolean,
      default : false
    },
    signin : {
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
    provideInfo: function (event) {
      console.log(this.email + this.password)
      var tab = new Array();
      tab.push(this.email)
      tab.push(this.password)
      console.log(tab)
      return tab
    },
    forgot : function (event) {
      this.show = false
      this.forgotp = true
    },
    sign : function (event) {
      this.show = false
      this.signin = true
    }
  },
  components: {
    Forgotpwd,
    Signinfree
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .brand{
    letter-spacing: 2px;
    font-size: 1.5em;
    font-weight: 700;
  }
  .freelancerform{
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 1.3em;
    padding: 0;
    background-color: #F0EDE5;
    min-height: 100vh;
    overflow: hidden;
  }
  .content{
    padding: 40px;
    margin: 100px 200px;
    border: solid 1px #B4B7BA;
    border-radius: 20px;
    text-align: left;
    background-color: #fff;
  }
  h1 {
    color: #17a2b8;
    text-align: center;
  }
  a{
    color: #17a2b8;
  }
</style>