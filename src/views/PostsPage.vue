<template>
  <div class="post-container">
    <h1>Data Postingan</h1>
    <div class="select-container">
      <select id="user-select" v-model="selectedUser" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Judul</th>
          <th>Isi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td width="150">
            <button @click="editPost(post.id)">Edit</button>
            <button @click="deletePost(post.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      posts: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    },
    async fetchPosts() {
      if (this.selectedUser) {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
          this.posts = await response.json();
        } catch (error) {
          console.error('Failed to fetch posts:', error);
        }
      }
    },
    async editPost(postId) {
      const newTitle = prompt("Enter new title:");
      const newBody = prompt("Enter new body:");
      if (newTitle && newBody) {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: postId,
              title: newTitle,
              body: newBody,
              userId: this.selectedUser
            })
          });
          const updatedPost = await response.json();
          this.posts = this.posts.map(post => post.id === postId ? updatedPost : post);
        } catch (error) {
          console.error('Failed to edit post:', error);
        }
      }
    },
    async deletePost(postId) {
      if (confirm("Are you sure you want to delete this post?")) {
        try {
          await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
          });
          this.posts = this.posts.filter(post => post.id !== postId);
        } catch (error) {
          console.error('Failed to delete post:', error);
        }
      }
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.post-container {
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5dc;
  border: 1px solid #8b7355;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #18181a;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}

.select-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin: 0 auto;
}

h1 {
  color: #8b7355;
  font-size: 32px !important;
  font-weight: bold !important;
  margin-bottom: -10px;
}


select {
  padding: 8px;
  border: 1px solid #8b7355;
  border-radius: 4px;
  background-color: #ffffff;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td{
  border: 1px solid #8b7355;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #8b7355; 
  color: whitesmoke;
}

td {
  background-color: #f5f5dc;
  color: #8b7355;
}

button {
  padding: 8px 12px;
  margin-right: 5px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  background-color: #8b7355;
  color: #f5f5dc;
}

button:hover {
  background-color: #a9876a;
}
</style>
