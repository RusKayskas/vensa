<template>
  <ul class="footer__nav">
    <li class="footer__nav-item" v-for="(item, index) in filteredFooteNav" :key="index">
      <NuxtLink class="footer__nav-link" :to="item.to"  exactActiveClass="is-active">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TMenuLink } from './menu';

  import { defineProps } from 'vue';
  const props = defineProps({
    footernav: {
      type: Array as () => TMenuLink[],
      default: () => [],
    }
  })
  const filteredFooteNav: Ref<TMenuLink[]> = computed(() => {
    return props.footernav.filter(item => !item.hide);
  })
</script>

<style lang="scss">
  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    gap: 15px;
    justify-content: center;
    align-items: flex-start;
    @include media-sm-min {
      gap: 30px;
      order: 2;
      justify-content: flex-start;
      padding-left: 40px;
      align-items: center;
    }
    &-link {
      font-size: 14px;
      line-height: 1.2;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      &.is-active {
        color: #999999;
      }
    }
  }
</style>