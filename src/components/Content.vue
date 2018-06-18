<template>
  <div class="container-fluid content">
    <div class="row">
      <containerimg v-if= "right" v-bind:linkimg ="img"></containerimg>
      <div class="col-sm-6">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <containerimg v-if= "!right" v-bind:linkimg ="img"></containerimg>
    </div>
  </div>
</template>

<script>
import Containerimg from './Containerimg'
export default {
//props : ['title', 'description','right': false]

props : {
  title : String,
  description : String,
  right : {
    type : Boolean,
    default : false
  },
  link : Array
},
components: {
    Containerimg
  },
data () {
    return {
      img: this.link
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