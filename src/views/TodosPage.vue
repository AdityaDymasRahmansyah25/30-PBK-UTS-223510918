<template>
  <div class="todos-container" id="todos">
    <h1>Daftar Kegiatan</h1>
    <div style="display: flex;">
      <input type="text" v-model="newTask" placeholder="">
      <button @click="addTask">Simpan</button>
    </div>

    <div v-for="(task, index) in incompleteTasks" :key="index" class="task" :class="{ 'completed': task.completed }">
      <div class="task-content">
        <input type="checkbox" v-model="task.completed" class="checkbox">
        <div v-if="!task.editing" class="task-text">{{ task.title }}</div>
        <div v-else class="edit-mode">
          <input v-model="task.title" class="edit-input">
          <div class="button-group">
            <button class="update-btn" @click="updateTask(index)">Perbarui</button>
            <button class="cancel-btn" @click="cancelTask(index)">Batal</button>
          </div>
        </div>
      </div>
      <div v-if="!task.editing" class="button-group">
        <button class="edit-btn" @click="editTask(index)">Ubah</button>
        <button class="delete-btn" @click="deleteTask(index)">Hapus</button>
      </div>
    </div>

    <button class="filter-btn" @click="showIncomplete = !showIncomplete">
      {{ showIncomplete ? 'Tampilkan Semua Catatan' : 'Tampilkan Catatan Yang Belum Selesai' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodosView',
  data() {
    return {
      tasks: [],
      newTask: '',
      showIncomplete: true,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ title: this.newTask, completed: false, editing: false });
        this.newTask = '';
      }
    },
    cancelTask(index) {
      this.tasks[index].editing = false;
    },
    editTask(index) {
      this.tasks[index].editing = true;
    },
    updateTask(index) {
      this.tasks[index].editing = false;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  computed: {
    incompleteTasks() {
      if (this.showIncomplete) {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks;
      }
    }
  }
};
</script>

<style scoped>
.todos-container {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #18181a;
  background-color: #f5f5dc;
  font-family: 'Times New Roman', Times, serif;
  margin: 50px auto;
  text-align: center;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-top: -20px;
  color: #8b7355;
  margin-bottom: -10px;
}

input[type="text"] {
  width: calc(100% - 95px);
  padding: 10px;
  border: 1px solid #8b7355;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-family: 'Courier New', Courier, monospace;
}

button {
  padding: 10px 15px;
  margin: 0 5px;
  background-color: #8b7355;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #a9876a;
}

.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5dc;
  color: #8b7355;
}

.task-content {
  display: flex;
  align-items: center;
}

.task input[type="checkbox"] {
  margin-right: 10px;
  color: #8b7355;
}

.task-text {
  flex: 1;
  cursor: pointer;
  color: #8b7355;
  font-weight: bold;
}

.edit-input {
  flex: 1;
  margin-right: 10px;
}

.edit-mode {
  display: flex;
  align-items: center;
}

.button-group {
  display: flex;
  align-items: center;
}

.edit-btn,
.delete-btn,
.cancel-btn {
  margin-left: 5px;
}

.update-btn {
  margin-right: 5px;
}

.completed .task-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.filter-btn {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #8b7355;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.filter-btn:hover {
  background-color: #a9876a; /* darker brown on hover */
}

.checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #8b7355; /* brown color */
  border-radius: 5px;
  margin-right: 5px;
}

.checkbox:checked {
  background-color: #8b7355; /* brown color */
}
</style>

