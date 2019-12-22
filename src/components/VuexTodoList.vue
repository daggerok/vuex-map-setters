<template>
  <div class="todos">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="current" @keypress="save">
    <button @click="save">save</button>
    <div v-for="(todo, index) in getTodos" :key="index">
      <Todo :todo="todo"/>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Todo from './Todo';

  export default {
    name: 'VuexTodoList',
    components: { Todo },
    props: {
      msg: String,
    },
    methods: {
      ...mapActions({
        setCurrent: 'todos/setCurrent',
        addTodo: 'todos/addTodo',
      }),
      save(e) {
        if (!this.current.trim()) return;
        if (e.key === undefined || e.key === 'Enter') {
          this.addTodo(this.current);
        }
      },
    },
    computed: {
      ...mapGetters({
        getTodos: 'todos/getTodos',
        getCurrent: 'todos/getCurrent',
      }),
      current: {
        get() {
          return this.getCurrent;
        },
        set(value) {
          this.setCurrent(value);
        },
      },
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
