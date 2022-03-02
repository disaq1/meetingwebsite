<template>
  <div class="questionnaireCard">
    <div class="questionnaireCard__image-wrapper">
      <img
        :src="profile.avatar"
        alt=""
        class="questionnaireCard__image"
      >
    </div>
    <div class="questionnaireCard__info">
      <h3 class="questionnaireCard__name font-display--comfortaa">
        {{ profile.name }}
      </h3>
      <div class="questionnaireCard__place font-display--roboto">
        <p>
          {{ profile.country }}
        </p>
        /
        <p>
          {{ profile.city }}
        </p>
      </div>
      <div class="questionnaireCard__email">
        <img
          src="~assets/img/mail.svg"
          alt="mail icon"
        >
        <a href="mailto:profile@mail.ru" class="font-display--roboto">
          profile@mail.ru
        </a>
      </div>
      <p class="questionnaireCard__description font-display--roboto">
        {{ profile.about }}
      </p>
      <a href="mailto:profile@mail.ru" class="questionnaireCard__btn">
        <p class="font-display--comfortaa">
          НАПИСАТЬ
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireCard',
  props: {
    profile: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin smooth {
    transition: all .3s ease-in-out;
  }
  .font-display {
    &--comfortaa {
      font-family: 'Comfortaa', sans-serif;
    }
    &--roboto {
      font-family: 'Roboto', sans-serif;
    }
  }
  .questionnaireCard {
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #F5E9E2;
    box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    @include smooth;
    &__info {
      margin: 16px 0 0;

      display: grid;
      grid-template-areas:
      "_name"
      "_place"
      "_email"
      "."
      "_description"
      "."
      "_btn";
      grid-template-rows: 26px 24px 18px 18px 120px 16px 44px;
    }
    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;

      @include smooth;
      &-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        max-width: 340px;
        width: 100%;
        height: 300px;
      }
    }
    &__name {
      grid-area: _name;

      margin: 0;
      padding: 0;

      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
    }
    &__place {
      grid-area: _place;

      display: flex;
      align-items: center;
      & p {
        margin: 0;
        padding: 0;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0;
        text-align: left;

        white-space: nowrap;
      }
    }
    &__email {
      grid-area: _email;

      display: flex;
      align-items: center;
      & img {
        width: 17px;
        height: 12px;
      }
      & a {
        margin: 0 0 0 8px;
        padding: 0;

        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 16px;
        letter-spacing: 0;
        text-align: left;

        color: #000;

        @include smooth;
        &:hover {
          color: rgb(4, 15, 200);
        }
      }
    }
    &__description {
      grid-area: _description;
      overflow-y: auto;

      margin: 0;
      padding: 0;

      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0;
      text-align: left;
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #E3B5A4;
        border-radius: 100px;
      }
    }
    &__btn {
      grid-area: _btn;
      padding: 14px 0;

      background: #773344;
      box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
      border: none;
      border-radius: 6px;

      text-decoration: none;

      cursor: pointer;

      @include smooth;
      & p {
        margin: 0;
        padding: 0;

        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0;
        text-align: center;

        color: #FFFFFF;
      }
      &:hover {
        background: #ff002d;
      }
    }
    &:hover {
      box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.5);
      .questionnaireCard__image {
        transform: scale(1.1);
      }
    }
    @media screen and (min-width: 970px) {
      padding: 25px;
      &__info {
        grid-template-areas:
        "_name _place"
        ". ."
        "_email _email"
        ". ."
        "_description _description"
        ". ."
        "_btn _btn";
        grid-template-rows: 26px 16px 18px 18px 120px 16px 44px;
      }
      &__name {
        grid-area: _name;

        margin: 0;
        padding: 0;

        font-size: 24px;
        line-height: 27px;
      }
      &__place {
        justify-content: flex-end;
        & p {
          margin: 0;
          padding: 0;

          font-size: 16px;
          line-height: 19px;
        }
      }
      &__email {
        grid-area: _email;

        display: flex;
        align-items: center;
        & img {
          width: 21px;
          height: 15px;
        }
        & a {
          margin: 0 0 0 9px;
          padding: 0;

          font-size: 16px;
          line-height: 19px;
        }
      }
      &__description {
        font-size: 16px;
        line-height: 22px;
      }
      &__btn {
        width: 157px;
        & p {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
  }
</style>
