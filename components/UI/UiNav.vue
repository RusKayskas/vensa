<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="(link, index) in menu" :key="index">
        <NuxtLink :to="link.main.to" class="nav__list-link btn" exactActiveClass="is-active" :class="{ 'is-active': isLinkActive(route.path, link.main) }">{{ link.main.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { menu, isLinkActive } from './menu'
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>

<style lang="scss">
  .nav {
    &__list {
      padding-left: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
      @include media-sm-min {
        padding-left: 30px;
      }
    }
  }
</style>