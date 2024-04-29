<template>
  <div class="container">
      <h1>DAFTAR KEGIATAN</h1>
      <ul class="todo-list">
          <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.completed }">
              {{ todo.text }}
              <button @click="completeTodo(todo)">Selesai</button>
              <button @click="deleteTodo(todo)">Hapus</button>
          </li>
      </ul>
      <input type="text" v-model="newTodoText" @keyup.enter="addTodo">
      <button @click="addTodo">Tambahkan Kegiatan</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          todos: [
              { id: 1, text: 'Beli Susu', completed: false },
              { id: 2, text: 'Beli Baju', completed: false },
              // Add more todos here
          ],
          newTodoText: ''
      }
  },
  methods: {
      addTodo() {
          if (this.newTodoText) {
              this.todos.push({ id: this.todos.length + 1, text: this.newTodoText, completed: false });
              this.newTodoText = '';
          }
      },
      completeTodo(todo) {
          todo.completed = true;
      },
      deleteTodo(todo) {
          this.todos = this.todos.filter(t => t.id !== todo.id);
      }
  }
}
</script>
<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

.container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list li.done {
  text-decoration: line-through;
  color: #ccc;
}

.todo-list li.done::before {
  content: "\2713";
  font-size: 18px;
  color: #ccc;
  margin-right: 10px;
}
</style>