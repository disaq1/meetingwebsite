<template>
  <div class="questionnaires">
    <h1 class="questionnaires__title font-display--comfortaa">
      Анкеты
    </h1>
    <section class="questionnaires__items">
      <QuestionnaireCard
        v-for="user of users.data"
        :key="user.id"
        :profile="user"
        class="questionnaires__item"
      />
    </section>
  </div>
</template>

<script>
import QuestionnaireCard from '~/components/Questionnaires/QuestionnaireCard'

export default {
  name: 'QuestionnairesWrapper',
  components: {
    QuestionnaireCard
  },
  data: () => ({
    users: []
  }),
  async mounted () {
    this.users = await this.$axios.$get('https://dev.rusdat.net/api/test/profiles')
  }
  // async fetch ({ store }) {
  //   if (store.getters['users/users'].length === 0) {
  //     await store.dispatch('users/fetch')
  //   }
  // },
  // computed: {
  //   users () {
  //     return this.$store.getters['users/users']
  //   }
  // }
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
  .questionnaires {
    padding: 36px 0;
    &__title {
      margin: 0;
      padding: 0;

      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0;
      text-align: center;

      color: #FFFFFF;
    }
    &__items {
      max-width: 1201px;
      margin: 24px auto 0;
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(387px, 1fr) );
      grid-gap: 12px;
      justify-content: center;
    }
    @media screen and (min-width: 890px) {
      &__title {
        font-size: 48px;
        line-height: 54px;
      }
      &__items {
        margin: 50px auto 0;
        grid-template-columns: repeat( auto-fit, 387px );
        grid-gap: 43px 20px;
      }
    }
  }
</style>
