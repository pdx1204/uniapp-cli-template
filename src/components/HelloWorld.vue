<script setup lang="ts">
import {useHelloWorld} from "@/composables/useHelloWorld";

const {sayHello, msg} = useHelloWorld();
</script>

<template>
  <view>{{ msg}}</view>
</template>

<style scoped>

</style>