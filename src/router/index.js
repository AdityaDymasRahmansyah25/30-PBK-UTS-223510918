import { createRouter, createWebHistory } from 'vue-router';

import TodosPage from '../views/TodosPage.vue';
import PostsPage from '@/views/PostsPage.vue';
import AlbumsPage from '@/views/AlbumsPage.vue';
import PhotosPage from '@/views/PhotosPage.vue';

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: TodosPage,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: AlbumsPage,
  },
  {
    path: '/albums/:id',
    name: 'Photos',
    component: PhotosPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
