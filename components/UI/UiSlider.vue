<template>
  <Carousel :settings="settings" :breakpoints="settings.breakpoints" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.name">
        <UiCard :card="slide" :isTextIn="isTextIn" :isHoverTextIn="isHoverTextIn" />
      </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">

import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import type { TCard } from './UiCard.vue';

defineProps({
  slides: {
    type: Array as () => TCard[],
    required: true,
  },
  isTextIn: {
    type: Boolean,
    default: false,
  },
  isHoverTextIn: {
    type: Boolean,
    default: false,
  },
})
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

</script>
<style lang="scss">
  .carousel__item {
    height: 100px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .carousel__prev, .carousel__next {
    width: 76px;
    height: 134px;
    svg {
      width: 100%;
      height: 100%;
      fill: #ffffff;
    }
  }
</style>