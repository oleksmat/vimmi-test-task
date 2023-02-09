<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  methods: {
    openList() {
      this.$router.push({ name: 'user-list' });
    },
  },
  components: { RouterView },
});
</script>

<template>
  <v-app>
    <v-app-bar color="green">
      <v-toolbar-title @click="openList()">User List</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
