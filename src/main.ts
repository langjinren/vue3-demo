import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseComponents from './components/base'
import BaseDirective from './directive'
import { loadAllPlugins } from './plugins'

import './assets/css/base.css'
import './assets/css/main.styl'

const app = createApp(App)

loadAllPlugins(app)

app.use(BaseComponents)
app.use(BaseDirective)

app
.use(store)
.use(router)
.mount('#app')
