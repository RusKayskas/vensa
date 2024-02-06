<template>
  <div ref="modalOverflow" @click="closeModal" class="UiModal-overflow">
    <div class="UiModal">
      <button ref="modalClose" @click="closeModal">X</button>
      <form  enctype="multipart/form-data" method="post" id="form_callme" ref="formRef" @submit.prevent="submitForm">
        <input v-maska data-maska="+7 ### ###-##-##" v-model="formData.phone" placeholder="+7 ### ###-##-##">
        <input type="radio" name="messengerFF" value="GSM" id="GSM" checked>    
        <button type="submit">Submit</button>
        <input class="form-metka" type="hidden" name="metkaFF" value="">
        <input class="form-city" type="hidden" name="cityFF" value="">
        <input type="hidden" class="form-descr" name="descrFF" value="">
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import axios from 'axios';
const emit = defineEmits(['close']);
const modalOverflow = ref<HTMLElement | null>(null);
const modalClose = ref<HTMLElement | null>(null);
const formRef = ref<HTMLFormElement | null>(null); // Обновляем тип на HTMLFormElement

function closeModal(event: MouseEvent) {
  if (event.target === modalOverflow.value || event.target === modalClose.value) {
    emit('close');
  }
}

const formData = ref({
  phone: '',
  messengerFF: 'GSM',
  metkaFF: '',
  cityFF: '',
  descrFF: ''
});

const submitForm = async () => {
  try {
    if (formRef.value) { // Проверяем, существует ли formRef
      const formData = new FormData(formRef.value);
      const response = await axios.post('/contacts.php', formData);
      console.log('Form submitted successfully', response);
    }
  } catch (error) {
    console.error('Error submitting form', error);
  }
};
</script>

<style lang="scss">
  .UiModal-overflow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.6);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .UiModal {
    width: 100%;
    max-width: 600px;
    background: #fff;
    min-height: 300px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    z-index: 4;
  }
</style>