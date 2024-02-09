<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <div class="footer__left">
        <button @click="open" type="button" class="btn btn--pink">
          Записаться
        </button>
        <template v-for="item in menu" :key="item.main">
          <UiFooterNav v-if="isLinkActive(route.path, item.main)"  :footernav="item.main.submenu" />
        </template>
      </div>
      <div class="footer__right">
        <NuxtLink class="link" to="#" target="_blank">Положение о персональных данных</NuxtLink>
      </div>
      <teleport to="body">
        <UiModalForm v-if="isOpen" :activeLink="activeMenuLink"  @close="closeModal" />
      </teleport>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useRoute, type RouteLocationNormalized } from 'vue-router';
  import { menu, isLinkActive } from './UI/menu';
  import UiModalForm from '~/components/UI/UiModalForm.vue';
  
  const route: RouteLocationNormalized = useRoute();
  import { ref } from 'vue';
  const isOpen = ref<boolean>(false);
  const activeMenuLink: Ref<string | undefined> = computed(() => {
    const foundMenuItem = menu.find(item => {
      if (item.main.to === route.path) return true; // Проверка активной ссылки в главном меню
      if (item.main.submenu) {
        return item.main.submenu.some(subitem => subitem.to === route.path); // Проверка активной ссылки в подменю
      }
      return false;
    });

    return foundMenuItem?.main.name;
  });
  const open = () => {
    isOpen.value = true; 
  };
  function closeModal() {
    isOpen.value = false;
  }
</script>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    z-index: 2;
    left: 0;
    width: 100%;
    padding-bottom: 50px;
    &__left {
      display: flex;
      align-items: center;
    }
    &__right {
      .link {
        font-size: 10px;
        line-height: 1.2;
        font-weight: 300;
        text-decoration: underline;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #999999;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>