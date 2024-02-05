<template>
  <header class="header">
    <div class="container header__wrapper">
      <div class="logo header__logo">
        <img src="@/assets/img/logo.png" alt="Logo" width="195" height="59" />
        <p class="logo__details">Премиум салон-красоты<br/>
          <b class="pink">в Пушкино</b></p>
      </div>
      <UiNav class="header__nav"/>
      <div class="header__socials">
        <UiPhone/>
        <UiSocial/>
      </div>
    </div>
  </header>
</template>

<script setup>

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
    &__details {
      margin-left: 35px;
      font-size: 12px;
      line-height: 1.2;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      b {
        color: #cc6699;
      }
    }
  }
</style>