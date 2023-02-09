<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { UserListItem } from '../../services/user';

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserListItem>,
      required: true,
    }
  },
});
</script>

<template>
  <v-card>
    <v-card-title>
      {{ user.name }}
    </v-card-title>
    <v-card-subtitle>
      {{ user.email }} | {{ user.city }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click="$emit('openDetails', user.id)">
        More Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
