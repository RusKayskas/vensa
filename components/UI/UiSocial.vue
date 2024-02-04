<template>
  <div class="social">
    <a class="social__link" v-for="item in social" :key="item.alt" :href="item.href" target="_blank">
      <img :src="`/img/${item.path}`" :alt="item.alt">
    </a>
  </div>
</template>

<script setup lang="ts">
  type ISocial = {
    href: string,
    path: string,
    alt: string
  }
  const social: ISocial[] = [
    {
      href: '#',
      path: '/tg.png',
      alt: 'Telega'
    },
    {
      href: '#',
      path: '/whats.png',
      alt: 'WhatsApp'
    }
  ];
</script>

<style lang="scss">
  .social {
    display: flex;
    align-items: center;
    &__link {
      display: block;
      &:hover {
        opacity: 0.7;
      }
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
</style>