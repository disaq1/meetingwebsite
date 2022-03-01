<template>
  <div class="MainModalWrapper">
    <MainModal
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import MainModal from '~/components/Modal/MainModal'

export default {
  name: 'MainModalWrapper',
  components: {
    MainModal
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
  .MainModalWrapper {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background:url(./assets/img/main-bg--mobile.png) no-repeat;
    background-size: cover;
    position: relative;
    &::after {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
    @media screen and (min-width: 970px) {
      background:url(./assets/img/main-bg.png) no-repeat;
      background-size: cover;
    }
  }
</style>
