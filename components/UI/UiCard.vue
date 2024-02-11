<template>
  <div :class="[
    'UiCard',
    { 'UiCard--content-in': isTextIn },
    { 'UiCard--content-in--hover': isTextIn },
    ]
  ">
    <div class="UiCard__img-wrapper">
      <img :src="`/img/${card.img_src}`" :alt="altName" width="356" height="357">
    </div>
    <div class="UiCard__content">
      <div class="UiCard__content-text">
        <p class="UiCard__content-text-details">{{ card.details }}</p>
        <p v-if="card.name" class="UiCard__content-text-name">{{ card.name }}</p>
      </div>
      <NuxtLink 
        v-if="card.link_path" 
        :to="card.link_path" 
        :class="[
          'btn', 
          'btn--card', 
          { 'btn--pink-text': isTextIn }
        ]"
      >
        {{ card.link_name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue';
  export type TCard = {
    img_src: string,
    details: string,
    name?: string, 
    link_path?: string,
    link_name?: string,
  }
  const props = defineProps({
    card: {
      type: Object as PropType<TCard>,
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
  });
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
    &--content-in {
      max-width: 100%;
      padding: 0 10px;
      .UiCard__img-wrapper {
        margin-bottom: 0;
      }
      .UiCard__content {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(45, 48, 56, 0.75);
        width: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: space-between;
        gap: 30px;
        padding: 25px;
      }
      p {
        margin: 0;
        font-size: 14px;
        line-height: 1.2;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #ffffff;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
        &.UiCard__content-text-name {
          font-weight: 700;
        }
      }
      &--hover {
        .UiCard__content {
          opacity: 0;
          transition: linear 0.2s;
        }
        &:hover {
          .UiCard__content {
            opacity: 1;
          }
        }
      }
    }
  }
</style>