<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import UserListItemView from './UserListItemView.vue';
import type { UserListItem } from '../services/user';

export default defineComponent({
  props: {
    state: {
      type: String as PropType<'loading' | 'success' | 'failure'>,
      required: true
    },
    userItems: {
      type: Object as PropType<UserListItem[]>,
      required: true
    },
    errorMessage: {
      type: String
    },
    openDetails: {
      type: Function as PropType<(id: string) => Promise<void>>,
      required: true
    }
  },
  components: { UserListItemView },
});
</script>

<template>
  <template v-if="state === 'loading'">
    <v-progress-linear indeterminate color="green"></v-progress-linear>
  </template>
  <template v-if="state === 'success'">
    <UserListItemView
      v-for="userItem in userItems"
      :key="userItem.id"
      :user="userItem"
      :openDetails="() => openDetails(userItem.id)"      
    />
  </template>
  <template v-if="state === 'failure'">
    <h2>Could not fetch list of users</h2>
  </template>
</template>