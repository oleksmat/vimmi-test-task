import { createApp } from 'vue'
import { vuetify  } from './plugins'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { UserService } from './services/user.service'

const app = createApp(App)

app.use(router);
app.use(vuetify);

app.provide('user-service', new UserService());

app.mount('#app');
