<template>
  <div id="app">
    <c-header></c-header>

    <router-view/>
  </div>
</template>

<script>
import CHeader from './components/CHeader'

export default {
  name: 'app',

  components: { CHeader }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
