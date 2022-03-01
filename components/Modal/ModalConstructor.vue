<template>
  <div>
    <h1
      v-if="info.title"
      class="modalConstructor__title font-display--comfortaa"
    >
      {{ info.title }}
    </h1>
    <h2
      v-if="info.subtitle"
      class="modalConstructor__subtitle font-display--comfortaa"
    >
      {{ info.subtitle }}
    </h2>
    <p
      v-if="info.text"
      class="modalConstructor__text font-display--roboto"
    >
      {{ info.text }}
    </p>
    <p
      v-if="info.textWithBorder"
      class="modalConstructor__text modalConstructor__text--withBorder font-display--roboto"
    >
      {{ info.textWithBorder }}
    </p>
    <p
      v-if="info.extraText"
      class="modalConstructor__text modalConstructor__text--withBorder font-display--roboto"
    >
      {{ info.extraText }}
    </p>
    <p
      v-if="info.doublueExtraText"
      class="modalConstructor__text modalConstructor__text--withBorder font-display--roboto"
    >
      {{ info.doublueExtraText }}
    </p>
    <p
      v-if="info.subspan"
      class="modalConstructor__subspan font-display--comfortaa"
    >
      {{ info.subspan }}
    </p>
    <p
      v-if="info.span"
      class="modalConstructor__span font-display--comfortaa"
    >
      {{ info.span }}
    </p>
    <div class="modalConstructor__btns">
      <button
        v-if="info.btnNextContent"
        class="modalConstructor__btn modalConstructor__btn--red"
        @click="nextStep()"
      >
        <p class="font-display--comfortaa">
          {{ info.btnNextContent }}
        </p>
      </button>
      <button
        v-if="info.btnPrevContent"
        class="modalConstructor__btn modalConstructor__btn"
        @click="prevStep()"
      >
        <p class="font-display--comfortaa">
          {{ info.btnPrevContent }}
        </p>
      </button>
    </div>
    <p
      v-if="info.alertMessage"
      class="modalConstructor__alert font-display--roboto"
    >
      {{ info.alertMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ModalConstructor',
  props: {
    info: {
      type: Object,
      default () {
        return {}
      }
    },
    status: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    nextStep () {
      this.$emit('nextStep')
    },
    prevStep () {
      this.$emit('prevStep')
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
  .modalConstructor {
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
      margin: 8px 0 16px;
      padding: 0;

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
    }
    &__btn {
      margin: 0 6px 12px;
      padding: 14px 0;

      width: 100%;
      outline: 1px solid #773344;
      background: transparent;
      box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
      border: none;
      border-radius: 6px;
      cursor: pointer;

      transition: all 0.3s ease-in-out;
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
      &:hover {
        background: #FFFFFF;
      }
      &--red {
        background: #773344;
        & p {
          color: white;
        }
        &:hover {
          background: #ff002d;
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
      &__subspan {
        margin: 10px 0 35px;
        padding: 0;

        font-size: 16px;
        line-height: 19px;
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
      }
      &__btn {
        margin: 0 10px 0;
        max-width: 225px;
        padding: 18px 0;
        & p {
          font-size: 16px;
          line-height: 18px;
        }
      }
      &__alert {
        margin: 20px 0 0;

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
