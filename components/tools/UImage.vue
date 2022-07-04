<template>
  <img :src="src" :alt="alt" :width="width" :height="height"  :class="className" :id="id">
</template>

<script>
export default {
  name: "UImage",
  props:["src","width","height","alt","className","id"]
}
</script>

<style scoped>

</style>
