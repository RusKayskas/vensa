<template>
  <div :class="[
    'UiCard',
    { 'UiCard--text-in': isTextIn }
    ]
  ">
    <div class="UiCard__img-wrapper">
      <img :src="`/img/howItWork/${card.img_src}`" :alt="altName" width="356" height="357">
    </div>
    <div class="UiCard__content">
      <div class="UiCard__content-text">
        <p class="UiCard__content-text-details">{{ card.details }}</p>
        <p v-if="card.name" class="UiCard__content-text-name">{{ card.name }}</p>
      </div>
      <NuxtLink v-if="card.link_path" :to="card.link_path" class="btn btn--card">{{ card.link_name }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  type TCard = {
    img_src: string,
    details: string,
    name?: string, 
    link_path?: string,
    link_name?: string,
  }

  const props = defineProps<{
    card: TCard,
    isTextIn?: {
      type: boolean,
      dafault: false,
    }
  }>();

  const altName = computed(() => {
    return props.card.name ? props.card.name : props.card.details
  })
</script>

<style lang="scss">
  .UiCard {
    position: relative;
    max-width: 356px;
    width: 100%;
    &__img-wrapper {
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
      &-text {
        font-size: 16px;
        line-height: 1.2;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #ffffff;
      }
    }
  }
</style>