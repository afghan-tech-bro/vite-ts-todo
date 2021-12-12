<script setup lang="ts">
import demoStore from '@store/index';

const store = demoStore();

const handleAdd = () => store.add();
const handleSub = () => store.sub();
const handleReset = () => store.reset();
</script>

<template lang="pug">
div
  button(@click="handleAdd")
    | +
  button(@click="handleSub")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}

div
  button(@click="handleReset")
    | Reset
router-view
</template>
