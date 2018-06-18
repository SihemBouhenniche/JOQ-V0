<template>
  <footer class="container-fluid footerpage">
    <div class="container-fluid iconlist">
      <div class="row">
        <div class="col-sm-8">
          <h1>Get connected with us on social networks ! </h1>
        </div>
        <div class="col-sm-4">
            <a href="#"><i class="fab fa-facebook-square fa-2x"></i></a>
            <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
            <a href="#"><i class="fab fa-twitter-square fa-2x"></i></a>
            <a href="#"><i class="fab fa-google-plus-square fa-2x"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 col-content">
        <h1>Company Name</h1>
        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="col-sm-3 col-content">
        <h1>Products</h1>
        <ul>
          <li>MDBootstrap</li>
          <li>MDWordPress</li>
          <li>BrandFlow</li>
          <li>Bootstrap Angular</li>
        </ul>
      </div>
      <div class="col-sm-3 col-content">
        <h1>Useful Links</h1>
        <ul>
          <li>Your Account</li>
          <li>Become an Affiliate</li>
          <li>Shipping Rates</li>
          <li>Help</li> 
        </ul>
      </div>
      <div class="col-sm-3 col-content">
        <h1>Contact</h1>
      </div>
    </div>
    <div class="container-fluid copyright">© 2018 Copyright: JOQ.com</div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerpage{
  padding:0;
  background-color: #F0EDE5;
  font-family: 'Oswald', sans-serif;
}
.iconlist{
  background-color: #17a2b8;
  color: #fff;
  padding: 10px;
}
.iconlist  a{
  padding-right: 15px;
  padding-left: 15px;
}
.iconlist i{
  color: #fff;
}
h1{
  font-size: 1.5em;
  font-weight: 400;
}
.col-content{
  padding: 20px 25px;
}
.col-content h1 {
  color: #17a2b8;
  border-bottom: solid 1px #B4B7BA;
  padding-bottom: 10px;
}
.col-content p {
  padding-top: 30px;
  text-align: justify;
  line-height: 1.5;
}
.col-content ul{
  list-style: none;
  padding-top: 30px;
  line-height: 2;
}
.copyright{
  text-align: center;
  font-weight: lighter;
  background-color: #B4B7BA;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>