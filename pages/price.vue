<template>
  <div class="page-price">
    <div class="container">
      <UiTitle title="Цены" />
      <div class="UiTabs">
        <div class="UiTabs__head">
          <button 
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ 'active': activeTab === index }"
            @click="setActiveTab(index)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="UiTabs__body">
          <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
            {{ tab.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const tabs = [
    { label: 'Tab 1', content: 'Content of Tab 1' },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' }
  ];
  const activeTab = ref<number>(0);
  function setActiveTab(index: number) {
      activeTab.value = index;
    }
</script>

<style scoped>

</style>