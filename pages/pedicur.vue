<template>
  <div class="index-page">
    <div class="container index-page__wrapper">
      <UiTitle title="умный Маникюр"/>
      <h2 class="sub-title"><span>с генерацией дизайна<br/>
        в нейросети</span> <NuxtLink to="/howItWork" class="btn">как это работает</NuxtLink></h2>
      <div class="index-page__grid grid">
        <div v-for="(item, index) in itemGrid" :key="index" class="grid__item">
          <img :src="item.src" :alt="item.alt" width="55" height="57">
          <span v-html="item.text" />
        </div>
      </div>
    </div>
    <div class="index-page__abs">
      <picture>
        <source srcset="/img/indexPic.webp" type="image/webp">
        <source srcset="/img/indexPic.png" type="image/png"> 
        <img src="/img/indexPic.png" width="910" height="724" alt="умный Маникюр">
      </picture>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Главная',
    ogTitle: 'Главная',
    description: 'Главная',
    ogDescription: 'Главная',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
  type TItemGrid = {
    src: string,
    alt: string,
    text: string,
  }
  const itemGrid: TItemGrid[] = [
    {
      src: '/img/index/i1.png',
      alt: 'Альтернативный текст',
      text: 'учитывает все <br/>твои пожелания',
    },
    {
      src: '/img/index/i2.png',
      alt: 'Альтернативный текст',
      text: 'уникальный дизайн <br/>без копий до тебя',
    },
    {
      src: '/img/index/i3.png',
      alt: 'Альтернативный текст',
      text: 'знает все тренды <br/>за всю историю',
    },
    {
      src: '/img/index/i4.png',
      alt: 'Альтернативный текст',
      text: 'подчеркивает твою <br/>индивидуальность',
    }
  ];
</script>