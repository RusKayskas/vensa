<template>
  <a class="phone" href="tel:+79163132220">
    <img class="phone__icon" src="/img/phone.png" alt="Номер Телефона" width="20" height="20">
    <span class="phone__text">+7 916 313 22 20</span>
  </a>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  .phone {
    display: flex;
    align-items: center;
    white-space: nowrap;
    &__icon {
      margin-right: 8px;
    }
    &__text {
      position: relative;
      transition: linear 0.2s;
      &:after {
        content: '\00a0'; /* Неразрывный пробел */
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, rgba(45, 48, 56, 0), #2d3038 70%, #2d3038); 
        pointer-events: none; /* Предотвращаем взаимодействие с подложкой */
        z-index: 1;
      }
    }
    &:hover {
      .phone__text {
        color: #cc6699;
        &::after {
          background: none;
        }
      }
    }
  }
</style>