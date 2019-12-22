<template>
  <div class="todo" :key="todo.id">
    <Checked v-if="todo.completed" class="check" />
    <Unchecked v-else class="check" />
    {{ todo.task }}
    <Remove class="delete" />
  </div>
</template>

<script>
  import Todo from '../types/Todo';
  import Unchecked from './Unchecked';
  import Remove from './Remove';
  import Checked from './Checked';

  export default {
    name: 'Todo',
    components: { Checked, Remove, Unchecked },
    props: {
      todo: {
        type: Todo,
        validator: (value) => !!value.task,
      },
    },
  };
</script>

<style scoped>
  .todo {
    display: inline;
  }
  .check {
    position: absolute;
    left: 1.1em;
  }
  .delete {
    position: absolute;
    right: 1.1em;
  }
</style>
