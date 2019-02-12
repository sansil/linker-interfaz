<template>
  <div class="mark-app">
    <div class="contendor-app-ppal"></div>
    <div class="backround-color-ppal"></div>
    <div class="loader-cont" v-if="loading">
      <div class="mark-loader"></div>
      <div class="spinner">
        <h1>Conectando...</h1>
        <rise-loader color="#009de8" :loading="loading" size="2rem"></rise-loader>
      </div>
    </div>
    <div class="field drop-down-switch" v-if="!conectado && !loading">
      <input
        id="switchExample"
        type="checkbox"
        class="switch is-info"
        :checked="checked"
        @click="checked=!checked"
      >
      <label style="color:white;" for="switchExample">
        <b>MANUAL</b>
      </label>
    </div>
    <div class="contenido">
      <!-- <drop-down></drop-down> -->
      <div class="m-input w3-border" v-if="!conectado && !loading">
        <input type="text" placeholder="ESCRIBIR PUERTO" v-model="puerto" :disabled="!checked">
        <a @click="onConectar" class="button is-info is-outlined" style="border-radius:0;">CONECTAR</a>
      </div>
      <div class="conectado" v-if="conectado">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Conectado</h1>
              <!-- <h2 class="subtitle">Hero subtitle</h2> -->
            </div>
          </div>
        </section>
        <a
          @click="onDesconectar"
          class="button is-info is-outlined"
          style="border-radius:0;"
        >DESCONECTAR</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
require("@/assets/sass/main.scss");

// import DropDown from '@/components/DropDown.vue';
import axios from "axios";
import RiseLoader from "vue-spinner/src/RiseLoader.vue";

export default {
  components: {
    // DropDown
    RiseLoader
  },
  data() {
    return {
      puerto: "",
      loading: false,
      conectado: false,
      checked: false
    };
  },
  methods: {
    onDesconectar() {
      axios
        .post("http://localhost:8081/desconectar", {})
        .then(response => {
          console.log(response);
          this.loading = false;
          this.conectado = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onConectar() {
      console.log("conectando");
      this.loading = true;
      var connection_port = this.puerto;
      if (!checked) connection_port = "";
      axios
        .post("http://localhost:8081/conectar", {
          puerto: connection_port
        })
        .then(response => {
          console.log(response);
          this.loading = false;
          this.conectado = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Ubuntu");

html {
  box-sizing: border-box;
}
.mark-app {
}
.contendor-app-ppal {
  background-image: url("./assets/background-img.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: center right;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  position: fixed;
  z-index: -2;
}
.drop-down-switch {
  position: absolute;
  top: 3rem;
  left: 3rem;
  display: inline;
  margin: 0;
  margin-right: 2rem;
}
.drop-down-switch label {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}

.loader-cont {
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.loader-cont h1 {
  font-size: 1.2rem;
  font-weight: 400;
  padding: 2rem;
  z-index: 300;
  color: whitesmoke;
}
.spinner {
  z-index: 300;
  opacity: 1;
}
.mark-loader {
  z-index: 200;
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: rgb(131, 131, 131);
  opacity: 0.6;
  position: fixed;
}

.conectado {
  text-align: center;
}

.conectado h1,
a {
  color: white;
  display: inline;
  margin-left: 1rem;
}
.backround-color-ppal {
  background-color: #193f5d;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  opacity: 0.8;
}

.contenido {
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
}

.m-input input {
  height: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  margin-right: 1rem;
  /* width: 50%; */
  /* border-radius: 0.5rem; */
}

.m-input input:focus {
  height: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  border-color: #009de8;
  box-shadow: none;
  outline-color: #009de8;
  /* border-radius: 0.5rem; */
}
</style>
