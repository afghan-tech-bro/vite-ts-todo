<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello');

const logMessage = () => console.log('%cApp.vue line:6 value.value', 'color: #007acc;', value.value);
</script>

<template lang="pug">
div
  button(@click="logMessage")
    | {{ value }}
router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
