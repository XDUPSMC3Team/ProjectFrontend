import Vue from 'vue';
import { Button } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(Button);

// TODO:需要关注怎么去适合多页面应用
