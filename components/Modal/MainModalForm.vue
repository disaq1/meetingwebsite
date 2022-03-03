<template>
  <form class="form" @submit.prevent="onSubscribe">
    <div class="form__input-wrapper">
      <input
        v-model="fullname"
        class="form__input font-display--roboto"
        type="text"
        placeholder="Введите имя"
      >
      <p v-if="!nameIsValid" class="form__input-error">
        The name field is required.
      </p>
    </div>
    <div class="form__input-wrapper">
      <input
        v-model="email"
        class="form__input font-display--roboto"
        type="text"
        placeholder="E-mail"
      >
      <p v-if="!emailIsValid" class="form__input-error">
        The email field is required and must be valid (ex: test@test.com).
      </p>
    </div>
    <div class="form__input-wrapper">
      <input
        v-model.number="age"
        class="form__input font-display--roboto"
        type="text"
        placeholder="Выберите возраст"
      >
      <p v-if="!ageIsValid" class="form__input-error">
        The age field is required.
      </p>
      <p v-if="!ageIsValidType" class="form__input-error">
        Input type must be a number.
      </p>
      <p v-if="!ageIsValidMinAge" class="form__input-error">
        Min age is 18
      </p>
      <p v-if="!ageIsValidMaxAge" class="form__input-error">
        Max age is 120
      </p>
    </div>
    <MainModalFormSelect
      :options="options"
      :selected="selected"
      @select="optionSelect"
    />
    <button
      type="submit"
      class="form__btn"
    >
      <p class="font-display--comfortaa">
        ПОДПИСАТЬСЯ
      </p>
    </button>
    <div class="form__eula">
      <label for="form_eula">
        <input id="form_eula" type="checkbox" checked @click="eula =! eula">
        <span class="font-display--roboto">
          При нажатии на кнопку вы соглашаетесь с условиями <a href="#">Политики конфиденциальности</a>
        </span>
      </label>
      <label for="form_notify">
        <input id="form_notify" type="checkbox" checked @click="notify =! notify">
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
      eula: true,
      notify: true,
      options: [
        { name: '20-30', value: 1 },
        { name: '30-40', value: 2 },
        { name: '40-50', value: 3 }
      ],
      selected: 'Какого возраста хотите найти девушку?'
    }
  },
  computed: {
    nameIsValid () {
      return !!this.fullname
    },
    emailIsValid () {
      return !!this.email
    },
    ageIsValid () {
      return this.ageIsValidType && this.ageIsValidMinAge && this.ageIsValidMaxAge
    },
    ageIsValidType () {
      return typeof this.age === 'number'
    },
    ageIsValidMinAge () {
      return this.age > 17
    },
    ageIsValidMaxAge () {
      return this.age < 121
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
        const data = await axios.post('https://dev.rusdat.net/api/test/crm/send_lead', { name: this.fullname, email: this.email, age: this.age, lang: document.documentElement.lang })
        if (data.status === 201 && this.eula && this.notify) {
          this.closeModal()
        }
      } catch (data) {
        console.log(data)
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

      &-error {
        margin: -5px 0 5px;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 14px;
        letter-spacing: 0;
        text-align: left;
        color: #ff002d;
      }
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

      transition: all 0.3s ease-in-out;
      & p {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0;
        text-align: center;

        color: #FFFFFF;
      }
      &:hover {
        background: #ff002d;
      }
    }
    &__eula {
      margin: 15px 0 0;
      & label {
        margin: 0 0 10px;
        display: flex;
        align-items: baseline;
        cursor: pointer;
        & input {
          cursor: pointer;
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
