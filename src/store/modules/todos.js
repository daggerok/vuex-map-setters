import Todo from '../../types/Todo';

export default ({
  namespaced: true,
  state: {
    current: '',
    todos: [],
  },
  mutations: {
    current: (state, value) => state.current = value,
    prependTodos: (state, todo) => state.todos = [todo, ...state.todos],
  },
  getters: {
    getTodos: (state, getters) => state.todos,
    getCurrent: (state, getters) => state.current,
  },
  actions: {
    setCurrent: ({ dispatch, commit }, value) =>
      commit('current', value),
    addTodo: ({ dispatch, commit }, task) => {
      const todo = new Todo(task);
      commit('prependTodos', todo);
      dispatch('setCurrent', '');
    },
  },
});
