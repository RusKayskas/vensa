<template>
  <header class="header">
    <div class="container header__wrapper">
      <div class="logo header__logo">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" alt="Logo" width="195" height="59" />
        </NuxtLink>        
        <p class="logo__details">Премиум салон-красоты<br/>
          <b class="pink">в Пушкино</b></p>
      </div>
      <div :class="['header__mobile-nav', {'header__mobile-nav--is-active': showMenu}]">
        <UiNav class="header__nav"/>
        <div class="header__socials">
          <UiPhone/>
          <UiSocial/>
        </div>
      </div>
      <UiBurger @menuToggle="menuToggle" />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const showMenu = ref<boolean>(false);
  const menuToggle = (event: boolean) => {
    showMenu.value = event;
  }
</script>

<style lang="scss">
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 3;
    background: #2d3038;
    padding-top: 34px;
    left: 0;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__mobile-nav {
      position: fixed;
      right: -100%;
      z-index: 10;
      height: 100%;
      top: 0;
      display: flex;
      transition: linear 0.2s;
      flex-direction: column;
      &--is-active {
        right: 0;
        width: 75%;
        background: #2d3038;
        padding: 100px 20px 20px 30px;
      }
      @include media-sm-min {
        width: 100%;
        position: relative;
        right: auto;
        flex-direction: row;
      }
    }
    &__nav {
      flex: 1;
    }
    &__socials {
      display: flex;
      align-items: center;
      & > * {
        &:not(:last-child) {
          margin-right: 35px;
        }
      }
    }
  }
  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    @include media-sm-min {
      flex-direction: row;
    }
    &__details {
      font-size: 12px;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      white-space: nowrap;
      @include media-sm-min {
        margin-left: 35px;
      }
      b {
        color: #cc6699;
      }
    }
  }
</style>