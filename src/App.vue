<template>
  <div class="mark-app">
    <router-view/>
  </div>
</template>

<script>
require("@/assets/sass/main.scss");

// import DropDown from '@/components/DropDown.vue';

export default {
  components: {
    // DropDown
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Ubuntu");

html {
  box-sizing: border-box;
}
.mark-app {
}
</style>
