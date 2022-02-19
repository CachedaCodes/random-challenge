import { createStore } from 'vuex'
import { randomBetweenRangeAndMultiple } from "@/utils/randomBetweenRange";

export const store = createStore({
  state() {
    return {
      parameters: {
        roomsNumber: 0,
        minSize: 0,
        maxSize: 0,
        minMoney: 0,
        maxMoney: 0
      },
      rooms: [],
      roomsTemplate: [
          'Recibidor',
          'Cocina',
          'Comedor',
          'Salón',
          'Baño',
          'Estudio',
          'Recibidor Sup',
          'Habitación 1',
          'Habitación 2',
          'Habitación 3',
          'Baño 1',
          'Baño 2',
          'Balcón'
      ],
        useTemplate: false
    }
  },
  getters: {
  },
  mutations: {
    roomsNumberSet: (state, roomsNumber) => state.parameters.roomsNumber = roomsNumber,
    minSizeSet: (state, minSize) => state.parameters.minSize = minSize,
    maxSizeSet: (state, maxSize) => state.parameters.maxSize = maxSize,
    minMoneySet: (state, minMoney) => state.parameters.minMoney = minMoney,
    maxMoneySet: (state, maxMoney) => state.parameters.maxMoney = maxMoney,
    setUseTemplate: (state, useTemplate) => state.useTemplate = useTemplate
  },
  actions: {
    generateRooms ({state}) {
      state.rooms = [];

      const array = state.useTemplate ? state.roomsTemplate : [...Array(state.parameters.roomsNumber).keys()];

      array.forEach((current) => {
        state.rooms.push({
          name: state.useTemplate ? current : `room_${current + 1}`,
          width: randomBetweenRangeAndMultiple(state.parameters.minSize, state.parameters.maxSize),
          length: randomBetweenRangeAndMultiple(state.parameters.maxSize, state.parameters.maxSize),
          money: randomBetweenRangeAndMultiple(state.parameters.minMoney, state.parameters.maxMoney, 100),
        });
      })
    },
  addNewRoom ({state}) {
      state.rooms.push({
          name: 'New Room',
          width: randomBetweenRangeAndMultiple(state.parameters.minSize, state.parameters.maxSize),
          length: randomBetweenRangeAndMultiple(state.parameters.maxSize, state.parameters.maxSize),
          money: randomBetweenRangeAndMultiple(state.parameters.minMoney, state.parameters.maxMoney, 100),
      });
    }
  },
  modules: {
  }
})
