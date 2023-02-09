import UserDetailsPage from "./UserDetailsView.vue";

export default [
  {
    path: '/user/:userId',
    name: 'user-details',
    props: true,
    component: UserDetailsPage,
  }
];
