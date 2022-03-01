<template>
  <div class="mainModal">
    <div v-if="counter === 0">
      <ModalConstructor
        :info="modalsState.firstScreen"
        @nextStep="nextStep"
      />
    </div>
    <div v-if="counter === 1">
      <ModalConstructor
        :info="modalsState.firstStep"
        @nextStep="nextStep"
      />
    </div>
    <div v-if="counter === 2">
      <ModalConstructor
        :info="modalsState.secondStep"
        @nextStep="nextStep"
        @prevStep="prevStep"
      />
    </div>
    <div v-if="counter === 3">
      <ModalConstructor
        :info="modalsState.thirdStep"
        @nextStep="nextStep"
        @prevStep="prevStep"
      />
    </div>
    <div v-if="counter === 4">
      <ModalConstructor
        :info="modalsState.fourthStep"
        @nextStep="nextStep"
        @prevStep="prevStep"
      />
    </div>
    <div v-if="counter === 5">
      <ModalConstructor
        :info="modalsState.congratulations"
        @nextStep="nextStep"
        @prevStep="prevStep"
      />
    </div>
    <div v-if="counter === 6">
      <h1 class="mainModal__title font-display--comfortaa">
        Заполните форму:
      </h1>
      <MainModalForm
        @closeModal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import MainModalForm from '~/components/Modal/MainModalForm'
import ModalConstructor from '~/components/Modal/ModalConstructor'

export default {
  name: 'MainModal',
  components: {
    MainModalForm,
    ModalConstructor
  },
  data: () => {
    return {
      counter: 0,
      modalsState: []
    }
  },
  mounted () {
    this.modalsState = this.$store.state.modals
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    nextStep () {
      this.counter += 1
    },
    prevStep () {
      this.counter -= 1
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
      &__title {
        margin: 0 0 35px;

        font-size: 36px;
        line-height: 40px;
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
