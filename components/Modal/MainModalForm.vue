<template>
  <form class="form">
    <input
      class="form__input font-display--roboto"
      type="text"
      placeholder="Введите имя"
    >
    <input
      class="form__input font-display--roboto"
      type="text"
      placeholder="E-mail"
    >
    <input
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
  </form>
</template>

<script>
import MainModalFormSelect from '~/components/Modal/MainModalFormSelect'

export default {
  name: 'MainModalForm',
  components: {
    MainModalFormSelect
  },
  data () {
    return {
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
    @media screen and (min-width: 970px) {
      &__btn {
        max-width: 384px;
      }
    }
  }
</style>
