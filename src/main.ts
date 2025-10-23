import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './styles/main.scss'

const app = createApp(App)

app.use(router)

const redir = sessionStorage.redirect;
if (redir) {
  sessionStorage.removeItem('redirect');
  router.replace(redir);
}

app.mount('#app')
