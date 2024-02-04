<template>
  <TheHeader />
  <div class="content">
    <slot />
  </div>
  <TheFooter />
</template>

<script setup>

</script>

<style lang="scss">
  .content {
    padding-top: 95px;
    padding-bottom: 230px;
  }
</style>