<template>
  <div class="page-masters">
    <div class="container">
      <UiTitle title="Мастера" />
    </div>
    <Carousel :settings="settings" :breakpoints="settings.breakpoints" :wrap-around="true">
      <template v-for="slide in 10" :key="slide">
        <Slide v-for="master in masters" :key="master.name">
          <UiCard :card="master" :isTextIn="true" />
        </Slide>
      </template>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Мастера',
  ogTitle: 'Мастера',
  description: 'Мастера',
  ogDescription: 'Мастера',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  breakpoints: {
    700: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    1100: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
  },
});
const masters = [
  {
    img_src: '/masters/master.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/masters/master.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/masters/master.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/masters/master.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/masters/master.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
]
</script>
<style>
  .carousel__item {
    height: 100px;
    width: 100%;
    background: grey;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>