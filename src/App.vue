<template>
  <h1>Sims Randomized Challenge</h1>
  <ChallengeStarter/>
  <RoomGrid />
  <AddRoomButton />
</template>

<script>
import ChallengeStarter from './components/ChallengeStarter.vue'
import RoomGrid from "@/components/RoomGrid";
import AddRoomButton from "@/components/AddRoomButton";

export default {
  name: 'App',
  components: {
    AddRoomButton,
    RoomGrid,
    ChallengeStarter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
