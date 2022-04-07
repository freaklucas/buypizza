export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
    },
  },
  mutations: {
    INCREMENT_COUNTER: function (state) {
      state.counter.count = state.counter.count + 1;
    },
    DECREMENT_COUNTER: function (state) {
      state.counter.count = state.counter.count - 1;
    },
    INCREMENT_COUNTER_BY: function (state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
  },
  actions: {
    incrementCounter: function ({ commit }) {
      return commit("INCREMENT_COUNTER");
    },
    decrementCounter: function ({ commit }) {
      return commit("DECREMENT_COUNTER");
    },
    incrementCounterBy: function ({ commit }, payload) {
      return commit("INCREMENT_COUNTER_BY", payload);
    },
  },
};
