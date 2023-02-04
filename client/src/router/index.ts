import { createRouter, createWebHistory } from 'vue-router';
import UserListPage from '@/views/UserListPage.vue';
import UserDetailsPage from '@/views/UserDetailsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: UserListPage
    },
    {
      path: '/user/:userId',
      name: 'user-details',
      props: true,
      component: UserDetailsPage
    }
  ]
})

export default router
