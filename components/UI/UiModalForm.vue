<template>
  <div ref="modalOverflow" @click="closeModal" class="UiModal-overflow">
    <div class="UiModal">
      <button ref="modalClose" class="UiModal__close" @click="closeModal">X</button>
      <form class="UiModal__form" enctype="multipart/form-data" method="post" id="form_callme" ref="formRef" @submit.prevent="submitForm">
        <span class="UiModal__title">Укажи свой номер:</span>

        <input class="UiModal__phone" v-maska data-maska="+7 ### ###-##-##" name="telFF" v-model="formValues.phone" placeholder="+7 ### ###-##-##">
        <p>Где тебе удобнее общаться:</p>
        <div class="UiModal__radio-buttons">
          <div class="labelInputs" :class="{ 'labelInputs': true, 'is-active': formValues.messenger === 'GSM' }">
            <img src="~/assets/img/phne.png" alt="">
            <input v-model="formValues.messenger" type="radio" name="messengerFF" value="GSM" id="GSM" checked>
            <label for="GSM">Телефон</label>
          </div>

          <div class="labelInputs" :class="{ 'labelInputs': true, 'is-active': formValues.messenger === 'WhatsApp' }">
            <img src="~/assets/img/wap.png" alt="">
            <input v-model="formValues.messenger" type="radio" name="messengerFF" value="WhatsApp" id="WhatsApp">
            <label for="WhatsApp">WhatsApp</label>
          </div>

          <div class="labelInputs" :class="{ 'labelInputs': true, 'is-active': formValues.messenger === 'Viber' }">
            <img src="~/assets/img/viber1.png" alt="">
            <input v-model="formValues.messenger" type="radio" name="messengerFF" value="Viber" id="Viber">
            <label for="Viber">Viber</label>
          </div>

          <div class="labelInputs" :class="{ 'labelInputs': true, 'is-active': formValues.messenger === 'Telegram' }">
            <img src="~/assets/img//telega.png" alt="">
            <input v-model="formValues.messenger" type="radio" name="messengerFF" value="Telegram" id="Telegram">
            <label for="Telegram">Telegram</label>
          </div>
        </div>

        <button :disabled="!isPhoneNumberValid" class="UiModal__button btn btn--pink" type="submit">Отправить</button>
        <input v-model="formValues.metkaFF" class="form-metka" type="hidden" name="metkaFF">
        <input class="form-city" type="hidden" name="cityFF">
        <input type="hidden" class="form-descr" name="descrFF">
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import axios from 'axios';
import { defineProps } from 'vue';
const emit = defineEmits(['close']);
const modalOverflow = ref<HTMLElement | null>(null);
const modalClose = ref<HTMLElement | null>(null);
const formRef = ref<HTMLFormElement | null>(null);
const props = defineProps({
  activeLink: {
    type: String,
    default: '',
  },
});
function closeModal(event: MouseEvent) {
  if (event.target === modalOverflow.value || event.target === modalClose.value) {
    emit('close');
  }
}
interface TFormValues  {
  phone: number | null,
  messenger: string,
  metkaFF: string,
  cityFF: string,
  descrFF: string
}
const formValues = ref<TFormValues>({
  phone: null,
  messenger: 'GSM',
  metkaFF: props.activeLink,
  cityFF: '',
  descrFF: ''
});


const submitForm = async () => {
  try {
    if (formRef.value) {
      const formData = new FormData(formRef.value);
      const response = await axios.post('/contacts.php', formData);
    }
  } catch (error) {
    console.error('Error submitting form', error);
  }
};
// Вычисляемое свойство для проверки соответствия номера телефона маске
const isPhoneNumberValid = computed(() => {
  const phonePattern = /^(\+7\s\d{3}\s\d{3}-\d{2}-\d{2})$/;
  if (formValues.value.phone !== null) {
    return phonePattern.test(String(formValues.value.phone));
  }
  return false; // Возвращаем false, если номер телефона равен null
});
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
    max-width: fit-content;
    background: #2d3038;
    min-height: 300px;
    padding: 40px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    z-index: 4;
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__title {
      display: block;
      font-size: 20px;
      margin-bottom: 10px;
    }
    &__phone {
      width: 100%;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 300;
      color: #242424;
      max-width: 220px;
      background: #f8f9fb;
      border: 1px solid transparent;
      border-radius: 5px;
      -webkit-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
    }
    &__close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
      width: 50px;
      height: 50px;
    }
    p {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 18px;
    }
    &__radio-buttons {
      display: flex;
      & > * {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
      .labelInputs {
        position: relative;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        width: 80px;
        height: 80px;
        align-items: center;
        padding-left: 10px;
        padding: 10px;
        font-size: 13px;
        border-radius: 10px;
        border: 1px solid transparent;
        padding-right: 10px;
        label {
          margin-top: 5px;
        }
        &.is-active {
          border-color: #666666;
        }
        input {
          position: absolute;
          cursor: pointer;
          width: 100%;
          opacity: 0;
          height: 100%;
          left: 0;
          top: 0;
        }
      }
    }
    &__button {
      margin-top: 30px;
      &:disabled {
        cursor: no-drop;
        background: grey;
      }
    }
  }
</style>