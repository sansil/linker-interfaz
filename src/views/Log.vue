<template>
  <div class="about">
    <h1>LOG Linker</h1>
    <p>{{log}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "about",
  data() {
    return {
      log: ""
    };
  },
  components: {
    // HelloWorld
  },
  sockets: {
    log: function(data) {
      console.log(data);
      this.log = data.log + "\n\r" + this.log;
    }
  }
};
</script>