<template>
  <button
    @click="toggleMenu"
    :class="[
      'burger',
      'header__burger',
      { 'burger--isActive': isMenuToggle },
    ]"
    type="button"
    title="Menu"
  >
    <span class="burger-bar burger-bar--1" />
    <span class="burger-bar burger-bar--2" />
    <span class="burger-bar burger-bar--3" />
  </button>
  <div :class="[
    'burger__mobile-overflow',
    {'burger__mobile-overflow--is-active': isMenuToggle}
    ]" 
    @click="toggleMenu"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const isMenuToggle = ref<boolean>(false);
  const emit = defineEmits(['menuToggle']);
  const toggleMenu = () => {
    isMenuToggle.value = !isMenuToggle.value;
    emit('menuToggle', isMenuToggle.value);
  };
</script>

<style lang="scss">
//burger
$transition: cubic-bezier(0.165, 0.84, 0.44, 1);
.burger {
  position: relative;
  height: 35px;
  cursor: pointer;
  width: 35px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s $transition;
  @include media-md-min {
    display: none;
  }
  &-bar {
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    right: 10px;
    left: 10px;
    height: 2px;
    width: 15px;
    margin-top: -1px;
    transition: transform 0.6s $transition, opacity 0.3s $transition,
      background-color 0.6s $transition;
    &--1 {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    &--2 {
      transform-origin: 100% 50%;
    }
    &--3 {
      transform: translateY(6px);
    }
  }
  &--isActive {
    transform: rotate(-180deg);
    .burger-bar--1 {
      transform: rotate(45deg);
    }
    .burger-bar--2 {
      opacity: 0;
    }
    .burger-bar--3 {
      transform: rotate(-45deg);
    }
  }
  &:hover {
    .burger-bar--2 {
      transform: scaleX(1);
    }
  }
  &__mobile-overflow {
    position: fixed;
    opacity: 0;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    transition: linear 0.2;
    background: rgba($color: #000000, $alpha: 0.6);
    &--is-active {
      opacity: 1;
      z-index: 5;
      left: 0;
      top: 0;
      pointer-events: all;
    }
  }
}
.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}
</style>