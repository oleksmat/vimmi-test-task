<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import UserDetailData from './UserDetailsData.vue';
import type { UserService } from '@/services/user.service';

export interface User {
  id: string;
  name: string;
  email: string;
  city: string;
  description: string;
}

interface UserDetailsState {
  state: 'loading' | 'success' | 'failure';
  user: User | undefined;
  errorMessage: string;
}

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  inject: {
    users: {
      from: 'user-service',
    },
  },
  data() {
    return {
      state: 'loading',
      user: undefined,
      errorMessage: '',
    } as UserDetailsState;
  },
  mounted() {
    this.getUserDetailsById(this.userId);
  },
  methods: {
    async closeDetails() {
      await this.$router.push({ name: 'user-list' });
    },
    setLoadingState() {
      this.state = 'loading';
      this.user = undefined;
      this.errorMessage = '';
    },
    setSuccessState(user: User) {
      this.state = 'success';
      this.user = user;
      this.errorMessage = '';
    },
    setFailureState(message: string) {
      this.state = 'failure';
      this.user = undefined;
      this.errorMessage = message;
    },
    async fetchUserDetailsById(userId: string) {
      const userService = this.users as UserService;

      return userService.getUserDetailById(userId);
    },
    async getUserDetailsById(userId: string) {
      this.setLoadingState();

      try {
        const user = await this.fetchUserDetailsById(userId);

        this.setSuccessState(user);
      } catch(err) {
        this.setFailureState(err as string);
      }
    }
  },
  components: { UserDetailData },
});
</script>

<template>
  <template v-if="state === 'loading'">
    <v-progress-linear indeterminate color="green" />
  </template>
  <template v-if="state === 'success' && !!user">
    <UserDetailData :user="user" @closeDetails="closeDetails" />
  </template>
  <template v-if="state === 'failure'">
    <h2>{{ errorMessage }}</h2>
  </template>
</template>
