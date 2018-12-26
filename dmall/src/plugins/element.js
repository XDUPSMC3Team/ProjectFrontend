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
  Form,
  FormItem,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  Select,
  Option,
  InputNumber,
  Upload,
  Container,
  Aside,
  Main,
  Carousel,
  CarouselItem,
  Footer,
  Badge,
  Table,
  TableColumn,
  Dialog,
  Steps,
  Step,
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
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Card);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(InputNumber);
Vue.use(Upload);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Footer);
Vue.use(Badge);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Step);
Vue.use(Steps);
