<script setup lang="ts">
import demoStore from '@store/demo';

const store = demoStore();
</script>

<template lang="pug">
div
  button(@click="store.add")
    | +
  button(@click="store.sub")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}

div
  button(@click="store.reset")
    | Reset
</template>
