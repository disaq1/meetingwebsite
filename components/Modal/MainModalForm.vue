<template>
  <form class="form">
    <input
      v-model="fullname"
      class="form__input font-display--roboto"
      type="text"
      placeholder="Введите имя"
    >
    <input
      v-model="email"
      class="form__input font-display--roboto"
      type="text"
      placeholder="E-mail"
    >
    <input
      v-model="age"
      class="form__input font-display--roboto"
      type="text"
      placeholder="Выберите возраст"
    >
    <MainModalFormSelect
      :options="options"
      :selected="selected"
      @select="optionSelect"
    />
    <button class="form__btn" @click="closeModal">
      <p class="font-display--comfortaa">
        ПОДПИСАТЬСЯ
      </p>
    </button>
    <div class="form__eula">
      <label for="form_eula">
        <input id="form_eula" type="checkbox">
        <span class="font-display--roboto">
          При нажатии на кнопку вы соглашаетесь с условиями <a href="#">Политики конфиденциальности</a>
        </span>
      </label>
      <label for="form_notify">
        <input id="form_notify" type="checkbox">
        <span class="font-display--roboto">
          Я согласен получать уведомления и предложения
        </span>
      </label>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import MainModalFormSelect from '~/components/Modal/MainModalFormSelect'

export default {
  name: 'MainModalForm',
  components: {
    MainModalFormSelect
  },
  data () {
    return {
      fullname: '',
      email: '',
      age: '',
      options: [
        { name: '20-30', value: 1, isChecked: false },
        { name: '30-40', value: 2, isChecked: false },
        { name: '40-50', value: 3, isChecked: false }
      ],
      selected: 'Какого возраста хотите найти девушку?'
    }
  },
  methods: {
    optionSelect (option) {
      this.selected = option.name
    },
    closeModal () {
      this.$emit('closeModal')
    },
    async onSubscribe () {
      try {
        const { data } = await axios.post('https://dev.rusdat.net/api/test/crm/send_lead', { name: this.fullname, email: this.email, age: this.age })
        console.log(data)
      } catch (data) {
        console.log(data.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .font-display {
    &--comfortaa {
      font-family: 'Comfortaa', sans-serif;
    }
    &--roboto {
      font-family: 'Roboto', sans-serif;
    }
  }
  .form {
    margin: 0 0 12px;
    &__input {
      width: 100%;

      margin: 0 0 10px;
      padding: 14px 15px;

      outline: 1px solid rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 6px;
      box-sizing: border-box;

      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0;
      text-align: left;

      &:focus,
      &:active {
        outline: 1px solid #773344;
      }
      &::placeholder {
        font-size: 14px;
        line-height: 16px;
      }
    }
    &__btn {
      width: 100%;

      background: #773344;
      box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
      border: none;
      border-radius: 6px;

      cursor: pointer;
      & p {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0;
        text-align: center;

        color: #FFFFFF;
      }
    }
    &__eula {
      margin: 15px 0 0;
      & label {
        margin: 0 0 10px;
        display: flex;
        align-items: baseline;
        & input {

        }
        & span {
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 16px;
          letter-spacing: 0;
          text-align: left;
          & a {
            text-decoration: none;
            margin: 0;
            padding: 0;
            color: #773344;
          }
        }
        &:last-child {
          margin: 0;
        }
      }
    }
    @media screen and (min-width: 970px) {
      &__btn {
        max-width: 384px;
      }
    }
  }
</style>
