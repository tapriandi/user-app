import { createStore, action } from "easy-peasy";

const store = createStore({
  users: [],
  setUsers: action((state, payload) => {
    state.users = payload;
  }),
});

export default store;