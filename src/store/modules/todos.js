import TodoItem from '../../types/TodoItem';

import { createHelpers } from 'vuex-map-fields'; // vuex-map-fields 1
const { getTodosFields, updateTodosFields } = createHelpers({
  getterType: 'getTodosFields',
  mutationType: 'updateTodosFields',
});

export default ({
  namespaced: true,
  state: {
    current: '',
    todos: [],
  },
  mutations: {
    updateTodosFields, // vuex-map-fields 2
  },
  getters: {
    getTodosFields, // vuex-map-fields: 3
  },
  actions: {},
});
