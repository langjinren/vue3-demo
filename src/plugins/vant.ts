import {
  Tabbar,
  TabbarItem,
  // Toast,
  // Dialog
  Button,
  Step,
  Steps,
  NoticeBar,
  Cell,
  CellGroup,
  Popup,
  Picker,
  Field,
  SwipeCell
} from "vant"
import { createApp } from "vue"
// import 'vant/lib/cell/index.less';

/**
 * @description 手动注册组件,达到按需加载目的
 * @description Automatically register components under Button, such as Button.Group
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */
export default function loadComponent(app: ReturnType<typeof createApp>) {
  app.use(Tabbar)
  app.use(TabbarItem)
  // app.use(Toast)
  // app.use(Dialog)
  app.use(Button)
  app.use(Step)
  app.use(Steps)
  app.use(NoticeBar)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Popup)
  app.use(Picker)
  app.use(Field)
  app.use(SwipeCell)
}