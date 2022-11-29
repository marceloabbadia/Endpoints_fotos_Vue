import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Albums from './components/Albums.vue'
import Photos from './components/Photos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Albums },
    { path: "/albums/:id",name:"photos" , component: Photos },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app')
