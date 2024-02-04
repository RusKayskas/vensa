<template>
  <ul class="footer__nav">
    <li class="footer__nav-item" v-for="(item, index) in footernav" :key="index">
      <NuxtLink class="footer__nav-link" :to="item.to"  exactActiveClass="is-active">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  type TFooterNavItem = {
    to: string,
    name: string,
  } 
  import { defineProps } from 'vue';
  defineProps({
    footernav: {
      type: Array as () => TFooterNavItem[],
      default: () => [],
    }
  });
  
</script>

<style lang="scss">
  .footer__nav {
    display: flex;
    align-items: center;
    & > * {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
    &-link {
      font-size: 14px;
      line-height: 1.2;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      &.is-active {
        color: #cc6699;
      }
    }
  }
</style>