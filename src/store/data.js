import { MUTATE, QUERY } from "../api/index";

export default {
  state: {
    isLoggedIn: false,
    user: {},

    inputArgs: {},
    doctors: [],
    nurses: [],
    hospital: [],
    docname: [],
  },

  getters: {
    getDoctors: (state) => state.doctors,
    getNurses: (state) => state.nurses,
    getHospital: (state) => state.hospital,
    getDocname: (state) => state.docname,
  },

  mutations: {
    set: (state, { type, data }) => {
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = keys[i] === type ? data : state[keys[i]];
      }
      return state;
    },
    setAuth(state) {
      state.isLoggedIn = true;
    },
    resetDefault: (state, { value, type }) => {
      const keys = Object.keys(state);
      let data = keys.find((x) => {
        return x == value;
      });
      let object = state[data];
      let setAll = (obj, val) =>
        Object.keys(obj).forEach((k) => (obj[k] = val));
      setAll(object, type);
    },
    setSuccess({}, { message, value, type }) {
      toast.success(message, {
        position: "bottom",
        duration: 3000,
      });
      this.commit("resetDefault", { value, type });
    },
  },
  actions: {
    // Service helps to determine what graphql server to point to.
    mutate: ({ commit, dispatch }, { endpoint, data }) =>
      MUTATE(endpoint, data),

    setQuery: ({ commit, dispatch }, { endpoint, data }) =>
      QUERY(endpoint, data),

    query: ({ commit, dispatch }, { endpoint, payload, storeKey }) => {
      commit("set", {
        type: "loading",
        data: true,
      });
      return QUERY(endpoint, payload)
        .then((res) => {
          commit("set", {
            type: "loading",
            data: false,
          });
          commit("set", {
            type: storeKey,
            data: res,
          });
          console.log(storeKey, "/", res);
        })
        .catch((err) => {
          console.log(err, " The Error");
        });
    },
  },
};
