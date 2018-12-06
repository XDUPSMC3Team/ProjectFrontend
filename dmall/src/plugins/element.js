import Vue from 'vue';
import {
  // 这里填写通用组件所需Element组件
  Button,
  Tag,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Row,
  Col,
  Card,
  Input,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);
Vue.use(Tag);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Input);

// TODO:需要关注怎么去适合多页面应用
// 答：因为可能业务组件是三个页面都要使用的，
// 为了防止element的组件导入缺失，就在整个项目的层面上维护该文件即可
