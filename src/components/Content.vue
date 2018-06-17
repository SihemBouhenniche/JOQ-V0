<template>
  <div class="container-fluid content">
    <div class="row">
      <div class="col-sm-6" v-if = "right"></div>
      <div class="col-sm-6">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//props : ['title', 'description','right': false]
props : {
  title : String,
  description : String,
  right : {
    type : Boolean,
    default : false
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding: 100px 40px 100px 40px;
  font-family: 'Oswald', sans-serif;
}
h1 {
  color: #17a2b8;
}
p{
  font-size: 1.2em;
}
</style>