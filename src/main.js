import Vue from "vue";
import App from "./App.vue";
import "../lib/css/modules.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import LayoutMaster from "../pack/modules/layout";
// Vue.use(LayoutMaster)
// import FloatBox from "../pack/modules/float";
// Vue.use(FloatBox)
// import InfiniteScroll from "../pack/modules/scroll";
// Vue.use(InfiniteScroll)

import { GatUI } from '../pack/modules/index.js';
Vue.use(GatUI);

// import Scroll from "../pack/modules/scroll/index.js";
// Vue.use(Scroll)

new Vue({
    render: (h) => h(App),
}).$mount("#app");