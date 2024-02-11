<template>
  <div class="UiTabs">
    <div class="UiTabs__head">
      <button 
        v-for="(tabName, tabId) in tabNames"
        :key="tabId"
        @click="setActiveTab(tabName)"
        :class="['btn', 'UiTabs__head-btn', { 'is-active': activeTab === tabName }]"
      >
        {{ tabName }}
      </button>
    </div>
    <div class="UiTabs__body">
      <div class="UiTabs__body-tabContent" v-for="(tabContent, tabId) in tab" :key="tabId">
        <div class="UiTabs__body-tab" v-for="(tab, idx) in tabContent" :key="idx" v-show="activeTab === tabId">
          <span class="UiTabs__body-tab-text">{{ tab.tab_text }}</span>
          <span class="UiTabs__body-tab-price">{{ tab.tab_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

type TabContent = { tab_text: string, tab_price: string | number };
type TabsContent = Record<string, TabContent[]>;

const props = defineProps<{
  tab: TabsContent
}>();

const activeTab = ref<string>('Маникюр и покрытие');
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
};

const tabNames = Object.keys(props.tab);
</script>

<style lang="scss">
  .UiTabs {
    width: fit-content;
    &__head {
      display: flex;
      align-items: center;
      margin-bottom: 75px;
      &-btn {
        &:not(:last-child) {
          margin-right: 14px;
        }
      }
    }
    &__body {
      width: 100%;
      &-tab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
          border-bottom: 1px solid #464a54;
          padding-bottom: 10px;
        }
        &:not(:first-child) {
          padding-top: 10px;
        }
        &-text {
          font-size: 16px;
          line-height: 1.2;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
        }
        &-price {
          font-size: 16px;
          line-height: 1.2;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
        }
      }
    }
  }
</style>