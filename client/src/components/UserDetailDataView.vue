<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

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
    user: {
      type: Object as PropType<User>,
      required: true
    },
    closeDetails: {
      type: Object as PropType<() => Promise<void>>,
      required: true
    }
  }
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
    <v-card-text v-html="user.description">
    </v-card-text>
    <v-card-actions>
      <v-btn @click="closeDetails">
        Back To List
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
