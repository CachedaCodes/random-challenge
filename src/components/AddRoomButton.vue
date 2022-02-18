<template>
  <div class="add-room-button" @click="addNewRoom">
    +
  </div>
</template>

<script>
import {useStore} from "vuex";
export default {
  name: 'AddRoomButton',
  setup() {
    const store = useStore();

    const addNewRoom = () => {
      store.dispatch('addNewRoom');
    };

    return {
      addNewRoom,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .add-room-button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    cursor: pointer;
  }
</style>
