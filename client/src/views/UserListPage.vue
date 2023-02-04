<script lang="ts">
import { defineComponent } from 'vue'
import UserListView from '@/components/UserListView.vue';
import type { UserListItem } from '@/services/user';
import type { UserService } from '@/services/user.service';

interface UserListPageState {
  state: 'loading' | 'success' | 'failure';
  userItems: UserListItem[];
  errorMessage: string;
}

export default defineComponent({
  inject: {
    users: {
      from: 'user-service',
    }
  },
  data() {
    return {
      state: 'loading',
      userItems: [],
      errorMessage: ''
    } as UserListPageState
  },
  mounted() {
    this.state = 'loading';
    this.userItems = [];
    this.errorMessage = '';

    (this.users as UserService).getAllUsers()
      .then(userItems => {
        this.state = 'success';
        this.userItems = userItems;
      })
      .catch((message) => {
        this.state = 'failure';
        this.errorMessage = message;
      });
  },
  methods: {
    async openDetails(userId: string) {
      await this.$router.push({ name: 'user-details', params: { userId } });
    }
  },
  components: { UserListView },
});
</script>

<template>
  <UserListView
    :state="state"
    :userItems="userItems"
    :errorMessage="errorMessage"
    :openDetails="openDetails"
  />
</template>
