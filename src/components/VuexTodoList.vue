<template>
  <div class="todos">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="current" @keypress="save">
    <button @click="save">save</button>
    <div v-for="(todo, index) in todos" :key="index">
      <Todo :todo="todo"/>
    </div>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields'; // vuex-map-fields: 4
  import TodoItem from '../types/TodoItem.js';
  const { mapFields } = createHelpers({
    getterType: 'getTodosFields',
    mutationType: 'updateTodosFields',
  });

  import Todo from './Todo';

  export default {
    name: 'VuexTodoList',
    components: { Todo },
    props: {
      msg: String,
    },
    data() {
      return {
        todos: [],
        current: '',
      }
    },
    methods: {
      save(e) {
        if (!this.current.trim()) return;
        if (e.key === undefined || e.key === 'Enter') {
          this.todos = [...this.todos, new TodoItem(this.current)];
          this.current = '';
        }
      },
    },
    computed: {
      ...mapFields([
        'todos/todos', // vuex-map-fields: 5
        'todos/current', // vuex-map-fields: 6
      ]),
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todos {
    margin: 0 auto;
  }

  input {
    width: 93%;
    border: 1px solid lightgray;
    font-size: 1.3em;
  }

  button {
    margin: 2em 0 2em;
    background-color: #55c796;
    padding: 1em;
    border-radius: 15px 15px 15px 15px;
    width: 95%;
  }
</style>
