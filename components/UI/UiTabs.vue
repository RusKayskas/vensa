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

const tabNames = Object.keys(props.tab);
const activeTab = ref<string>(tabNames.length > 0 ? tabNames[0] : '');
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<style lang="scss">
  .UiTabs {
    width: 100%;
    @include media-sm-min {
      width: fit-content;
    }
    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 75px;
      gap: 14px;
    }
    &__body {
      width: 100%;
      &-tab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        line-height: 1.2;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #ffffff;
        @include media-sm-min {
          font-size: 16px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid #464a54;
          padding-bottom: 10px;
        }
        &:not(:first-child) {
          padding-top: 10px;
        }
        &-text {
          font-weight: 300;
          padding-right: 20px;
        }
        &-price {
          font-weight: 500;
        }
      }
    }
  }
</style>