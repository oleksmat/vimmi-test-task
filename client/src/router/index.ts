import { createRouter, createWebHistory } from 'vue-router';
import UserListRoute from '@/modules/user-list/UserListRoute';
import UserDetailsRoute from '@/modules/user-details/UserDetailsRoute';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...UserListRoute,
    ...UserDetailsRoute,
  ],
});

export default router;
