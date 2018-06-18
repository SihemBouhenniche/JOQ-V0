<template>
  <div class="container-fluid freelancerform">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark nav-page">
      <a class="navbar-brand brand" href="#app">JOQ</a>
    </nav>
    <div class="content">
      <h1>Password Reset</h1>
      <form>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email address you're registred with" v-model = "email">
        </div>
        <button class="btn btn-info" v-on:click= "provideInfo">Send code</button>
        <div class="form-group">
          <label for="pwd">Code:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter the code you received in the email" v-model = "code">
        </div>
        <button type="submit" class="btn btn-info" v-on:click= "provideInfo">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email:{
        type : String,
        default : ''
     },
    code: {
      type : String,
      default : ''
    }
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods : {
    provideInfo: function (event) {
      console.log(this.email + this.code)
      var tab = new Array();
      tab.push(this.email)
      tab.push(this.code)
      console.log(tab)
      return tab
    }
  } ,
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
</style>