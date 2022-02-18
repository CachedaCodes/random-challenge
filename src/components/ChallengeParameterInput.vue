<template>
  <div class="challenge-parameter-input"
       :class="disabled ? 'challenge-parameter-input--disabled' : ''">
    <span class="challenge-parameter-input">
      {{ label }}
    </span>
    <input @input="mutateParameter($event.target.value)"
           class="challenge-parameter-input__input"
           type="number"
           min="1"
           :disabled="disabled"
    />
  </div>
</template>

<script>
import { ref} from "@vue/reactivity";
import {useStore} from "vuex";

export default {
  name: 'ChallengeParameterInput',
  props: {
    label: String,
    parameter: String,
    disabled: Boolean
  },
  setup(props) {
    const store = useStore();

    const reactiveParameter = ref('');
    const mutateParameter = (value) => {
      store.commit(`${props.parameter}Set`, parseInt(value));
    };

    return {
      reactiveParameter,
      mutateParameter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .challenge-parameter-input {
    margin-bottom: 15px;
    position: relative;

    &__input {
      border: none;
      border-bottom: 1px solid gray;
      text-align: center;
      font-size: 1em;
      width: 100px;
      -moz-appearance: textfield;
      outline: none;


      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &--disabled {
      &:after {
        content: '';
        width: 310px;
        border-bottom: 1px solid gray;
        position: absolute;
        top: 36%;
      }
    }
  }
</style>
