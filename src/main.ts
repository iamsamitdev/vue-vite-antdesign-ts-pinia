import { createApp } from 'vue'

// Import Ant Design
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

// Import Root Component
import App from './App.vue'

// Import Router
import router from './router/index'

// Import Pinia
import { createPinia } from 'pinia'

// Import CKEditor 5
import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
app.use(Antd)
app.use(CKEditor)
app.use(createPinia())
app.use(router)
app.mount('#app')
