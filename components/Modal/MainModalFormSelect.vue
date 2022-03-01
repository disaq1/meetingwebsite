<template>
  <div class="select">
    <p
      class="select__selected font-display"
      @click="isVisible =! isVisible"
    >
      {{ selected }}
    </p>
    <div
      v-if="isVisible"
      class="select__options"
    >
      <p
        v-for="option in options"
        :key="option.value"
        class="select__option font-display"
        @click="selectOption(option)"
      >
        <label>
          <input
            type="radio"
          > {{ option.name }}
        </label>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainModalFormSelect',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.addEventListener('click', this.hideSelect)
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.hideSelect()
    },
    hideSelect () {
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .font-display {
    font-family: 'Roboto', sans-serif;
  }
  .select {
    position: relative;
    width: 100%;
    &__selected {
      margin: 0 0 12px;
      padding: 14px 30px 14px 15px;
      color: rgba(0, 0, 0, 0.5);
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      box-sizing: border-box;

      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0;
      text-align: left;
    }
    &__options {
      position: absolute;
      top: 90%;
      left: 0;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
    }
    &__option {
      margin: 0;
      padding: 15px 14px;
      color: rgba(0, 0, 0, 0.5);
      background: #FFFFFF;
      border-top: 1px solid rgba(0, 0, 0, 0.5);
      box-sizing: border-box;

      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0;
      text-align: left;

      cursor: pointer;
    }
    &::after {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      content: url("../../assets/img/modal-arrow.svg");
    }
  }
</style>
