<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { User } from '@/services/user';

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<template>
  <v-card class="user-item-card">
    <v-card-title>
      {{ user.name }}
    </v-card-title>
    <v-card-subtitle>
      {{ user.email }} | {{ user.city }}
    </v-card-subtitle>
    <v-card-text v-html="user.description" />
    <v-card-actions>
      <v-btn @click="$emit('closeDetails')">
        Back To List
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
