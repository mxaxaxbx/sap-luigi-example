<template>
  <div>
    <section class="fd-section">
      <div class="fd-section__header">
        <h1 class="fd-section__title">PareceDuro</h1>
      </div>
      <div class="fd-panel">
        Luigi ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </div>
      <div class="fd-panel">
        {{msg}}
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "sample1",
    data(){
        return{
            msg: 'muajajaja'
        }
    }
  }
</script>

<style scoped>
</style>
