import { App } from 'vue'
import Button from './Button.vue';
import Select from './Select.vue';

const install = function (app: App<Element>) {
  app.component('LangButton', Button)
  app.component('LangSelect', Select)
}

export default install