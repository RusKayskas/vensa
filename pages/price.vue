<template>
  <div class="page-price">
    <div class="container">
      <UiTitle title="Цены" />
      <UiTabs :tab="tabs" />
      <div class="page-price__absolute">
        <img src="/img/price.png" alt="Цены">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 const tabs = {
  'Маникюр и покрытие': [
    { tab_text: 'Подбор дизайна с помощью нейросети', tab_price: 'Бесплатно' },
    { tab_text: 'Маникюр без покрытия', tab_price: 900 },
    { tab_text: 'Маникюр + покрытие гель-лаком «Beautix»', tab_price: 1800 },
    { tab_text: 'Маникюр + покрытие гель-лаком «Beautix» + укрепление Uni Gel System', tab_price: 2400 },
    { tab_text: 'Покрытие гель-лаком «Beautix»', tab_price: 900 },
    { tab_text: 'Мужской маникюр', tab_price: 1000 }
  ],
  'Снятие': [
    { tab_text: 'Content of Tab 2', tab_price: 'Бесплатно' },
    { tab_text: 'Content of Tab 2', tab_price: 900 },
    { tab_text: 'Content of Tab 3', tab_price: 29000 }
  ],
  'Дизайн': [
    { tab_text: 'Content of Tab 3', tab_price: 'freee' },
    { tab_text: 'Content of Tab 3', tab_price: 200002 },
    { tab_text: 'Content of Tab 3', tab_price: 100000 }
  ],
  'Наращивание': [
    { tab_text: 'Content of Tab 3', tab_price: 'freee' },
    { tab_text: 'Content of Tab 3', tab_price: 200002 },
    { tab_text: 'Content of Tab 3', tab_price: 100000 }
  ],
  'дополнительно': [
    { tab_text: 'Content of Tab 3', tab_price: 'freee' },
    { tab_text: 'Content of Tab 3', tab_price: 200002 },
    { tab_text: 'Content of Tab 3', tab_price: 100000 }
  ],
};
</script>

<style lang="scss">
  .page-price {
    &__absolute {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>