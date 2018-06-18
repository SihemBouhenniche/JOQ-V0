<template>
  <div class="col-sm-6 containerimg">
    <img v-bind:src="linkimg[0]" class="rounded img-1">
    <img v-bind:src="linkimg[1]" class="rounded img-2">
  </div>
</template>

<script>
export default {
  props : {
    linkimg : Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerimg{
  position: relative;
}
img {
  position: absolute;
  height: 80%;
  width: 50%;
}
.img-1{
  top: 0px;
  left: 100px;
}
.img-2{
  top: 80px;
  left: 200px;
}
</style>