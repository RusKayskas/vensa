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
      <div class="header__mobile-nav">
        <UiNav class="header__nav"/>
        <div class="header__socials">
          <UiPhone/>
          <UiSocial/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .header {
    text-align: center;
    padding-top: 34px;
    @include media-sm-min {
      position: fixed;
      width: 100%;
      text-align: left;
      top: 0;
      z-index: 3;
      background: #2d3038;
      left: 0;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      @include media-sm-min {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
    
    &__mobile-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      @include media-sm-min {
        flex-direction: row;
        margin-top: 0;
        flex: 1;
      }
    }
    &__nav {
      flex: 1;
      margin-top: 20px;
      order: 2;
      @include media-sm-min {
        order: 1;
        margin-top: 0;
      }
    }
    &__socials {
      display: flex;
      align-items: center;
      @include media-sm-min {
        order: 2;
      }
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