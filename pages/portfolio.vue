<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <template v-for="slide in 10" :key="slide">
      <Slide>
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
    </template>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};

const breakpoints = {
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};
</script>
<style>
  .carousel__item {
    height: 100px;
    width: 100%;
    background: grey;
  }
</style>