<template>
  <div class="page-masters">
    <div class="container">
      <UiTitle title="Мастера" />
    </div>
    <UiSlider :slides="masters" isTextIn />
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
<style lang="scss">
</style>