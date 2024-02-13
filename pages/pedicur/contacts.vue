<template>
  <div class="container page-contacts">
    <UiTitle title="Как добраться" />
    <div class="page-contacts__content">
      <div class="page-contacts__info">
        <div v-for="(info, index) in infos" :key="index" class="page-contacts__info-block">
          <p class="page-contacts__info-block-title">{{ info.title }}</p>
          <p class="page-contacts__info-block-details">{{ info.details }}</p>
        </div>
      </div>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91608d1ad506ee104611d6e442566299d0d2aa8fda1b10d231b88d77346bf41b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe> 
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Контакты',
    ogTitle: 'Контакты',
    description: 'Контакты',
    ogDescription: 'Контакты',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
  type TInfo = {
    title: string,
    details: string,
  }
  const infos: TInfo[] = [
    {
      title: 'Адрес:',
      details: 'г. Пушкино, Московский проспект, 44. ТЦ Гелла'
    },
    {
      title: 'Остановка:',
      details: 'Школа'
    },
    {
      title: 'Автобусы:',
      details: '10, 22, 24'
    },
    {
      title: 'Маршрутки:',
      details: '11, 18к, 19'
    }
  ]
</script>
<style>
</style>