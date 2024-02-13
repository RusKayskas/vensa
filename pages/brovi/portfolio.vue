<template>
  <div class="page-masters">
    <div class="container">
      <UiTitle title="Мастера" />
    </div>
    <UiSlider :slides="portfolio" isTextIn isHoverTextIn />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Портфолио',
  ogTitle: 'Портфолио',
  description: 'Портфолио',
  ogDescription: 'Портфолио',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

const portfolio = [
  {
    img_src: '/portfolio/p1.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/portfolio/p2.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/portfolio/p3.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/portfolio/p4.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
  {
    img_src: '/portfolio/p1.jpg',
    details: 'Мастер:',
    name: 'Александра крылова',
    link_path: '/portfolio',
    link_name: 'Работы',
  },
]
</script>

<style>
</style>