<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import UserDetailDataView from './UserDetailDataView.vue';

export interface User {
  id: string;
  name: string;
  email: string;
  city: string;
  description: string;
}

export type UserDetailsPageLink = () => Promise<void>;

export default defineComponent({
  props: {
    state: {
      type: String as PropType<'loading' | 'success' | 'failure'>,
      required: true
    },
    user: {
      type: Object as PropType<User>
    },
    errorMessage: {
      type: String
    },
    closeDetails: {
      type: Object as PropType<() => Promise<void>>,
      required: true
    }
  },
  components: { UserDetailDataView }
});
</script>

<template>
  <template v-if="state === 'loading'">
    <v-progress-linear indeterminate color="green"></v-progress-linear>
  </template>
  <template v-if="state === 'success' && !!user">
    <UserDetailDataView :user="user" :closeDetails="closeDetails" />
  </template>
  <template v-if="state === 'failure'">
    <h2>{{ errorMessage }}</h2>
  </template>
</template>
