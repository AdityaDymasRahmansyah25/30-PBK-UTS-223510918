<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header" align="center">
      <q-toolbar>
        <q-btn-group flat class="rout-nav" align="center">
          <router-link to="/">
            <q-btn flat :outline="!isActive('/')" label="Todos" />
          </router-link>
          <router-link to="/posts">
            <q-btn flat :outline="!isActive('/posts')" label="Posts" />
          </router-link>
          <router-link to="/albums">
            <q-btn flat :outline="!isActive('/albums')" label="Albums" />
          </router-link>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return {
      isActive
    };
  }
};
</script>

<style>
* {
  font-family: 'Times New Roman', Times, serif;
}

body {
  background-color: #f5f5dc; 
}

.header {
  background-color: #f5f5dc !important;
  color: #6b4226 !important;
  padding: 10px;
  box-shadow: 5px 5px 5px #d3c0a5;
  width: 100%;
}

.rout-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.rout-nav button {
  color: #6b4226;
  text-align: center;
  font-size: 16px;
}
</style>
