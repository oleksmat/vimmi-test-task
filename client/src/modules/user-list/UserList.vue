<script lang="ts">
import { defineComponent } from 'vue';
import type { UserListItem } from '@/services/user';
import type { UserService } from '@/services/user.service';

interface UserListState {
  state: 'loading' | 'success' | 'failure';
  userItems: UserListItem[];
  errorMessage: string;
}

export default defineComponent({
  inject: {
    users: {
      from: 'user-service',
    },
  },
  data() {
    return {
      state: 'loading',
      userItems: [],
      errorMessage: '',
    } as UserListState;
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async openDetails(userId: string) {
      await this.$router.push({ name: 'user-details', params: { userId } });
    },
    setLoadingState() {
      this.state = 'loading';
      this.userItems = [];
      this.errorMessage = '';
    },
    setSuccessState(userItems: UserListItem[]) {
      this.state = 'success';
      this.userItems = userItems;
    },
    setFailureState(message: string) {
      this.state = 'failure';
      this.errorMessage = message;
    },
    async fetchUsers(): Promise<UserListItem[]> {
      const userService = this.users as UserService;

      return userService.getAllUsers();
    },
    async getAllUsers() {
      this.setLoadingState();

      try {
        const userItems = await this.fetchUsers();

        this.setSuccessState(userItems);
      } catch(message) {
        this.setFailureState(message as string);
      }
    }
  },
});
</script>

<template>
  <template v-if="state === 'loading'">
    <v-progress-linear indeterminate color="green" />
  </template>
  <template v-if="state === 'success'">
    <UserListItemView
      v-for="userItem in userItems"
      :key="userItem.id"
      :user="userItem"
      @openDetails="openDetails"
    />
  </template>
  <template v-if="state === 'failure'">
    <h2>Could not fetch list of users</h2>
  </template>
</template>
