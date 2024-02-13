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

<style lang="scss">
  .page-title {
    font-size: 34px;
    line-height: 1.2;
    margin-top: 130px;
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #cc6699;
    text-align: center;
    margin-bottom: 35px;
    @include media-sm-min {
      text-align: left;
      font-size: 70px;
    }
  }
</style>