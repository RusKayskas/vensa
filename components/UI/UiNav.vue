<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="(link, index) in menu" :key="index">
        <NuxtLink :to="link.to" class="nav__list-link" exactActiveClass="nav__list-link--is-active">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  type TMenu = {
    to: string,
    name: string
  }
  const menu: TMenu[] = [
    {
      to: '/',
      name: 'Маникюр'
    },
    {
      to: '/pedicur',
      name: 'педикюр'
    },
    {
      to: '/brovi',
      name: 'Брови'
    },
  ] 
</script>

<style lang="scss">
  .nav {
    &__list {
      display: flex;
      align-items: center;
      &-item {
        &:not(:last-child) {
          margin-right: 14px;
        }
      }
      &-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 41px;
        padding: 0 24px;
        color: #999999;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 12px;
        border: 2px solid #999999;
        border-radius: 20px;
        &:hover {
          border-color: #cc6699;
        }
        &--is-active {
          border-color: #cc6699;
          color: #ffffff;
        }
      }
    }
  }
</style>