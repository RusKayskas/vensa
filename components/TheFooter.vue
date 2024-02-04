<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <div class="footer__left">
        <button type="button" class="btn btn--pink">
          Записаться
        </button>
        <UiFooterNav v-if="isLinkActive(route.path, menu[0].main)"  :footernav="menu[0].main.submenu" />
        <UiFooterNav v-if="isLinkActive(route.path, menu[1].main)"  :footernav="menu[1].main.submenu" />
      </div>
      <div class="footer__right">
        <NuxtLink class="link" to="#" target="_blank">Положение о персональных данных</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { menu, isLinkActive } from './UI/menu';
  const route = useRoute();
</script>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 0;
    width: 100%;
    padding-bottom: 50px;
    &__left {
      display: flex;
      align-items: center;
    }
    &__right {
      .link {
        font-size: 10px;
        line-height: 1.2;
        font-weight: 300;
        text-decoration: underline;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #999999;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>