// main.js
// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.min.js'

import 'bulma/css/bulma.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import '@fortawesome/fontawesome-free/css/all.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.use(Toast);
app.use(pinia)
app.use(router)

app.mount('#app')
