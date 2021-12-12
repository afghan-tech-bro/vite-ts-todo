<script setup lang="ts">
import demoStore from '@store/demo';

const store = demoStore();
</script>

<template lang="pug">
div
  button(@click.prevent="store.add")
    | +
  button(@click.prevent="store.sub")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}

div
  button(@click="store.reset")
    | Reset
</template>
