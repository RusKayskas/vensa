<template>
  <div class="how-it-work">
    <div class="container">
      <UiTitle title="Как это работает"/>
      <div class="how-it-work__content">
        <UiCard :card="card.indicate" />
        <img class="how-it-work__content-arrow" src="/img/arr-pink.png" alt="Стралка" width="43" height="76">
        <UiCard :card="card.generate" />
        <img class="how-it-work__content-arrow" src="/img/arr-pink.png" alt="Стралка" width="43" height="76">
        <UiCard :card="card.result" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Как это работает',
    ogTitle: 'Как это работает',
    description: 'Как это работает',
    ogDescription: 'Как это работает',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
  const card = {
    indicate: {
      img_src: '/howItWork/w1.jpg',
      details: 'Указываешь текстом все свои предпочтения'
    },
    generate: {
      img_src: '/howItWork/w2.jpg',
      details: 'Нейросеть неограниченно генерирует варианты'
    },
    result: {
      img_src: '/howItWork/w3.jpg',
      details: 'выбираешь дизайн и воплощаешь идею с мастером'
    }
  };
</script>

<style lang="scss">
  .how-it-work {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      @include media-sm-min {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }
      &-arrow {
        transform: rotate(90deg);
        @include media-sm-min {
          transform: rotate(0deg);
          margin-top: 140px;
        }
      }
    }
  }
</style>