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
    padding-top: 50px;
    padding-bottom: 100px;
    @include media-sm-min {
      padding-top: 95px;
      padding-bottom: 230px;
    }
  }
</style>