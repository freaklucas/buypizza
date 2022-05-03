export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
      countEspecial: 0,
    },
  },
  mutations: {
    INCREMENT_COUNTER: function (state) {
      state.counter.count = state.counter.count + 1;
    },
    INCREMENT_COUNTER_ESPECIAL: function (state) {
      state.counter.countEspecial = state.counter.countEspecial + 1;
    },
    DECREMENT_COUNTER_ESPECIAL: function (state) {
      state.counter.countEspecial = state.counter.countEspecial - 1;
    },

    DECREMENT_COUNTER: function (state) {
      state.counter.count = state.counter.count - 1;
    },
    INCREMENT_COUNTER_BY: function (state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
    RESET_COUNTER: function (state) {
      state.counter.count = 0;
    },
  },
  actions: {
    incrementCounter: function ({ commit }) {
      return commit("INCREMENT_COUNTER");
    },
    incrementCounterEspecial: function ({ commit }) {
      return commit("INCREMENT_COUNTER_ESPECIAL");
    },
    decrementCounterEspecial: function ({ commit }) {
      return commit("DECREMENT_COUNTER_ESPECIAL");
    },
    decrementCounter: function ({ commit }) {
      return commit("DECREMENT_COUNTER");
    },
    incrementCounterBy: function ({ commit }, payload) {
      return commit("INCREMENT_COUNTER_BY", payload);
    },
    resetCounter: function ({ commit }) {
      return commit("RESET_COUNTER");
    },
  },
};
