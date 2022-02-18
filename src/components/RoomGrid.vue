<template>
  <div class="room-grid">
    <Room v-for="(room, index) in rooms" :room="room" :key="index"/>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "@vue/reactivity";
import Room from "@/components/Room";
export default {
  name: 'RoomGrid',
  components: {Room},
  props: {
  },
  setup() {
    const store = useStore();

    const rooms = computed(() => store.state.rooms);

    return {
      rooms
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .room-grid {
    max-width: 650px;
    margin: 0 auto;
  }
</style>
