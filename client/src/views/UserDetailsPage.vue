<script lang="ts">
import UserDetailsView, { type User } from '@/components/UserDetailsView.vue';
import type { UserService } from '@/services/user.service';
import { defineComponent } from 'vue';

interface UserDetailsPageState {
  state: 'loading' | 'success' | 'failure';
  user: User | undefined;
  errorMessage: string;
}

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  inject: {
    users: {
      from: 'user-service',
    }
  },
  data() {
    return {
      state: 'loading',
      user: undefined,
      errorMessage: ''
    } as UserDetailsPageState;
  },
  mounted() {
    this.state = 'loading';
    this.user = undefined;
    this.errorMessage = '';

    (this.users as UserService).getUserDetailById(this.userId)
      .then(user => {
        this.state = 'success';
        this.user = user;
      })
      .catch((message) => {
        this.state = 'failure';
        this.errorMessage = message;
      });
  },
  methods: {
    async closeDetails() {
      await this.$router.push({ name: "user-list" });
    }
  },
  components: { UserDetailsView }
});
</script>

<template>
  <UserDetailsView 
    :state="state"
    :user="user"
    :error-message="errorMessage"
    :closeDetails="closeDetails"
  />
</template>
