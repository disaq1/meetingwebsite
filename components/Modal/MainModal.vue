<template>
  <div class="mainModal">
    <div v-if="firstScreen">
      <h1 class="mainModal__title font-display--comfortaa">
        Внимание!
      </h1>
      <p class="mainModal__text font-display--roboto">
        Наши девушки прошли проверку модератором и мы действительно хотим,
        чтобы люди находили друг друга и встречались в реальной жизни,
        а не бесконечно лайкали друг друга онлайн.
      </p>
      <p class="mainModal__span font-display--comfortaa">
        Вы готовы к этому?
      </p>
      <button class="mainModal__btn mainModal__btn--red" @click="firstScreen = false; firstStep = true">
        <p class="font-display--comfortaa">
          ПРОДОЛЖИТЬ
        </p>
      </button>
      <p class="mainModal__alert font-display--roboto">
        Мы не берем данных ваших кредитных карт
      </p>
    </div>
    <div v-if="firstStep">
      <h1 class="mainModal__title font-display--comfortaa">
        Шаг 1
      </h1>
      <p class="mainModal__text font-display--roboto">
        Мы должны быть уверены, что вы ищите серьезные отношения.
      </p>
      <button class="mainModal__btn mainModal__btn--red" @click="firstStep = false; secondStep = true">
        <p class="font-display--comfortaa">
          ПРОДОЛЖИТЬ
        </p>
      </button>
    </div>
    <div v-if="secondStep">
      <h1 class="mainModal__title font-display--comfortaa">
        Шаг 2
      </h1>
      <p class="mainModal__text font-display--roboto">
        Вы действительно готовы к реальным знакомствам?
      </p>
      <div class="mainModal__btns">
        <button class="mainModal__btn mainModal__btn--red" @click="secondStep = false; thirdStep = true">
          <p class="font-display--comfortaa">
            Да
          </p>
        </button>
        <button class="mainModal__btn" @click="secondStep = false; firstStep = true">
          <p class="font-display--comfortaa">
            Нет
          </p>
        </button>
      </div>
    </div>
    <div v-if="thirdStep">
      <h1 class="mainModal__title font-display--comfortaa">
        Шаг 3
      </h1>
      <p class="mainModal__text font-display--roboto">
        Вы не будете оскорблять или писать негативного девушкам, членам нашего клуба, вы согласны?
      </p>
      <div class="mainModal__btns">
        <button class="mainModal__btn mainModal__btn--red" @click="thirdStep = false; fourthStep = true">
          <p class="font-display--comfortaa">
            Да
          </p>
        </button>
        <button class="mainModal__btn" @click="thirdStep = false; secondStep = true">
          <p class="font-display--comfortaa">
            Нет
          </p>
        </button>
      </div>
    </div>
    <div v-if="fourthStep">
      <h1 class="mainModal__title font-display--comfortaa">
        Шаг 4
      </h1>
      <p class="mainModal__text font-display--roboto">
        Вы несете ответсвенность за информацию, которую размещаете на нашем сайте?
      </p>
      <div class="mainModal__btns">
        <button class="mainModal__btn mainModal__btn--red" @click="fourthStep = false; congratulations = true">
          <p class="font-display--comfortaa">
            Да
          </p>
        </button>
        <button class="mainModal__btn" @click="fourthStep = false; thirdStep = true">
          <p class="font-display--comfortaa">
            Нет
          </p>
        </button>
      </div>
    </div>
    <div v-if="congratulations">
      <h1 class="mainModal__title font-display--comfortaa">
        Поздравляем!
      </h1>
      <h2 class="mainModal__subtitle font-display--comfortaa">
        Вы имеете право на наш сайт!
      </h2>
      <p class="mainModal__text mainModal__text--withBorder font-display--roboto">
        Мы тщательно подходим к подбору девушек и все они проверены нашим модератором
      </p>
      <p class="mainModal__text mainModal__text--withBorder font-display--roboto">
        Наш сервис абсолютно бесплатен для вас,  мы не берем данных ваших кредитных карт и не устраиваем простой флирт на камеру
      </p>
      <p class="mainModal__text mainModal__text--withBorder font-display--roboto">
        Мы даем личные контакты девушек, которые активно ищут
        мужчину, чтобы вам было удобнее связаться друг другом,
        а ваша переписка была действительно тайна без третьих лиц
      </p>
      <p class="mainModal__subspan font-display--comfortaa">
        Мы против каких либо оскорблений, унижений и угроз.
      </p>
      <p class="mainModal__span font-display--comfortaa">
        Вы согласны с этим?
      </p>
      <button class="mainModal__btn mainModal__btn--red" @click="congratulations = false; form = true">
        <p class="font-display--comfortaa">
          Я СОГЛАСЕН
        </p>
      </button>
    </div>
    <div v-if="form">
      <h1 class="mainModal__title font-display--comfortaa">
        Заполните форму:
      </h1>
      <MainModalForm
        @closeModal="closeModal"
      />
      <div class="mainModal__eula">
        <label for="modal_eula">
          <input id="modal_eula" type="checkbox">
          <span class="font-display--roboto">
            При нажатии на кнопку вы соглашаетесь с условиями <a href="#">Политики конфиденциальности</a>
          </span>
        </label>
      </div>
      <div class="mainModal__eula">
        <label for="modal_notify">
          <input id="modal_notify" type="checkbox">
          <span class="font-display--roboto">
            Я согласен получать уведомления и предложения
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import MainModalForm from '~/components/Modal/MainModalForm'

export default {
  name: 'MainModal',
  components: {
    MainModalForm
  },
  data: () => {
    return {
      firstScreen: true,
      firstStep: false,
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
      congratulations: false,
      form: false
    }
  },
  methods: {
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
  .mainModal {
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;

    padding: 36px 16px;
    box-sizing: border-box;

    border: 5px solid #773344;
    border-radius: 6px;
    background: #F5E9E2;

    overflow: auto;
    &__title {
      margin: 0 55px 16px;

      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0;
      text-align: center;
    }
    &__subtitle {
      margin: 0 0 16px;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0;
      text-align: center;
    }
    &__text {
      margin: 0 0 16px;

      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0;
      text-align: center;
      &--withBorder {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);

          width: 70px;
          height: 1px;
          background: #773344;
        }
      }
    }
    &__subspan {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0;
      text-align: center;
    }
    &__span {
      margin: 0 0 16px;

      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0;
      text-align: center;
    }
    &__btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .mainModal__btn:last-child {
        margin-left: 12px;
      }
    }
    &__btn {
      margin: 0 auto 12px;
      padding: 14px 0;

      width: 100%;
      outline: 1px solid #773344;
      background: transparent;
      box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      & p {
        margin: 0;

        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0;
        text-align: center;

        color: #773344;
      }
      &--red {
        background: #773344;
        & p {
          color: white;
        }
      }
    }
    &__alert {
      margin: 0 50px;

      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 14px;
      letter-spacing: 0;
      text-align: center;
    }
    &__eula {
      & label {
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
      }
    }
    &::after {
      position: absolute;
      top: -6px;
      right: -6px;
      content: url("../../assets/img/modal-hearts.svg");
      transform: scale(0.5);
    }
    @media screen and (min-width: 970px) {
      padding: 80px 100px;
      max-width: 590px;
      & div {
        display: flex;
        flex-direction: column;
      }
      &__title {
        margin: 0 0 35px;

        font-size: 36px;
        line-height: 40px;
      }
      &__subtitle {
        margin: 0 0 25px;

        font-size: 18px;
        line-height: 20px;
      }
      &__text {
        margin: 0 0 25px;

        font-size: 16px;
        line-height: 22px;
      }
      &__span {
        margin: 0 0 35px;

        font-size: 18px;
        line-height: 20px;
      }
      &__btns {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row !important;
        & .mainModal__btn:last-child {
          margin-left: 20px;
        }
      }
      &__btn {
        max-width: 225px;
        padding: 18px 0;
        & p {
          font-size: 16px;
          line-height: 18px;
        }
      }
      &__alert {
        margin: 8px 0 0;

        font-size: 14px;
        line-height: 16px;
      }
      &::after {
        position: absolute;
        top: 21px;
        right: 21px;
        content: url("../../assets/img/modal-hearts.svg");
        transform: scale(1);
      }
    }
  }
</style>
