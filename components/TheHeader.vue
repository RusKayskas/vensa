<template>
  <header class="header">
    <div class="container header__wrapper">
      <div class="logo header__logo">
        <img src="@/assets/img/logo.png" alt="Logo" />
        <p class="logo__details">Премиум салон-красоты
          <b class="pink">в Пушкино</b></p>
      </div>
      <UiNav/>
      <div class="header__socials">
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
    left: 0;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    &__details {
      margin-left: 35px;
    }
  }
</style>