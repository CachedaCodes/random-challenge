<template>
  <div class="challenge-starter">
    <div class="challenge-starter__use-template">
      Use template
      <input type="checkbox" id="checkbox" v-model="useTemplate"
             @change="toggleTemplate($event.target.checked)">
    </div>
    <ChallengeParameterInput class="flex-gap" label="Number of Rooms" parameter="roomsNumber" :disabled="useTemplate"/>
    <div class="challenge-starter__inputs-wrapper">
      <div class="challenge-starter__size-inputs">
        <ChallengeParameterInput class="flex-column" label="Min. Size" parameter="minSize"/>
        <ChallengeParameterInput class="flex-column" label="Max. Size" parameter="maxSize"/>
      </div>
      <div class="challenge-starter__money-inputs">
        <ChallengeParameterInput class="flex-column" label="Min. Money" parameter="minMoney"/>
        <ChallengeParameterInput class="flex-column" label="Max. Money" parameter="maxMoney"/>
      </div>
    </div>
    <button class="challenge-starter__start-button" @click="generateRooms">Generate Rooms</button>
  </div>
</template>

<script>
import ChallengeParameterInput from "@/components/ChallengeParameterInput";
import {useStore} from "vuex";
import {computed, ref} from "@vue/reactivity";
export default {
  name: 'ChallengeStarter',
  components: {ChallengeParameterInput},
  props: {
  },
  setup() {
    const store = useStore();

    const useTemplate = ref(false);
    const parameters = computed(() => store.state.parameters);
    const generateRooms = () => {
      store.dispatch('generateRooms');
    };
    const toggleTemplate = (useTemplate) => {
      store.commit('setUseTemplate', useTemplate)
    }

    return {
      parameters,
      generateRooms,
      useTemplate,
      toggleTemplate
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .challenge-starter {
    max-width: 500px;
    font-size: 1.5em;
    margin: 0 auto;

    &__use-template {
      margin-bottom: 10px;
    }

    &__inputs-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    &__size-inputs, &__money-inputs {
      flex: 1;
    }

    &__money-inputs {
      border-left: 1px solid gray;
    }

    &__start-button {
      background-color: transparent;
      border: none;
      height: 50px;
      width: 100px;
      margin-top: 15px;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  .flex-gap {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: baseline;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
