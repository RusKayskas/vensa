<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps({
    title: {
      type: String,
      default: ''
    }
  })
</script>

<style>
  .page-title {
    font-size: 70px;
    line-height: 1.2;
    margin-top: 130px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #cc6699;
  }
</style>