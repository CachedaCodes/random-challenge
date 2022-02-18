<template>
  <div class="room">
    <input class="room__name-input" :value="room.name" />
    <div class="room__size">
      <span class="room__width">{{ room.width }}</span>
      x
      <span class="room__length">{{ room.length }}</span>
    </div>
    <span class="room__money">$ {{ room.money }}</span>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";
export default {
  name: 'Room',
  props: {
    room: Object
  },
  setup() {
    const store = useStore();

    const parameters = computed(() => store.state.parameters);

    return {
      parameters
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .room {
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    margin-top: 38px;
    padding: 16px 16px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &__name-input {
      font-size: 1em;
      border: none;
      border-bottom: 1px solid grey;
      outline: none;
      width: 200px;
      margin-right: 35px;
    }

    &__money {
      margin-left: 35px;
    }
  }
</style>
