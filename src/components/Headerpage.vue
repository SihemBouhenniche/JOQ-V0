<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top nav-page">
        <a class="navbar-brand brand" href="#">JOQ</a>
        <div class="separator"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#how">How it works</a>
          </li>
        </ul>
        <button type="button" class="btn btn-info btn-page">Client</button>
        <button type="button" class="btn btn-info btn-page">Freelancer</button>
  </nav>
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