<template>
  <div class="c-header">
    <span class="title">VUE-MEETUP</span>

    <div class="menu">
      <router-link class="menu-item" to="/">Home</router-link>
      <router-link class="menu-item" to="/about">About</router-link>
    </div>

    <c-sidebar />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CSidebar from '@/components/CSidebar'
import MatchMedia from '../mixins/matchMedia'

export default {
  name: 'c-header',

  components: { CSidebar },

  mixins: [ MatchMedia ],

  computed: mapState({ isMobile: state => state.matchMedia.isMobile })
}
</script>

<style lang="scss">
.c-header {
  width: 100%;
  height: 70px;
  background-color: red;

  display: flex;
  justify-content: space-between;

  & > .title {
    display: flex;
    align-items: center;

    padding: 20px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  & > .menu {
    height: 100%;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > .menu-item {
      color: white;
      font-size: 20px;
      margin-left: 20px;
      text-decoration: none;
    }

    & > .router-link-exact-active { font-weight: bold; }
  }
}
</style>
