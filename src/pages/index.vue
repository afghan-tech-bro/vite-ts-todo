<template lang="pug">
p {{ text }}
DemoComponent
</template>

<script lang="ts" setup>
const text = 'Hello world! This is a Vue 3 Template!';
</script>

<route lang="yaml">
name: 'home-page'
</route>
