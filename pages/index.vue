<template>
  <div class="wrapper">
    <MainModalWrapper v-if="modalOpen" @closeModal="closeModal" />
    <QuestionnairesWrapper v-if="questionnairesOpen" />
  </div>
</template>

<script>
import MainModalWrapper from '~/components/Modal/MainModalWrapper'
import QuestionnairesWrapper from '~/components/Questionnaires/QuestionnairesWrapper'

export default {
  name: 'IndexPage',
  components: {
    MainModalWrapper,
    QuestionnairesWrapper
  },
  data () {
    return {
      modalOpen: true,
      questionnairesOpen: false
    }
  },
  methods: {
    closeModal () {
      this.modalOpen = false
      this.questionnairesOpen = true
    }
  }
}
</script>

<style lang="scss">
  html,
  body {
    margin: 0;
    right: 0;
    box-sizing: border-box;
  }
  .wrapper {
    width: 100vw;
    min-height: 100vh;

    background: #E3B5A4;
    position: relative;
    box-sizing: border-box;
  }
</style>
