<template>
  <div class="container-fluid signinfree">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark nav-page">
      <a class="navbar-brand brand" href="#app">JOQ</a>
    </nav>
    <h1>Sign In</h1>
    <div class="content">
      <h2>Tabs</h2>
      <nav class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="profile" aria-expanded="false">Profile</a>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" aria-expanded="true">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" aria-expanded="false">
          <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.</p>
        </div>
      </div>
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
  .signinfree{
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
    margin: 50px 200px;
    border: solid 1px #B4B7BA;
    border-radius: 20px;
    text-align: left;
    background-color: #fff;
  }
  h1 {
    margin-top: 30px;
    color: #17a2b8;
    text-align: center;
  }
</style>