<script lang="ts">
import { defineComponent } from 'vue';
import UserDetails from './UserDetails.vue';

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  components: { UserDetails },
});
</script>

<template>
  <UserDetails :userId="userId" />
</template>
