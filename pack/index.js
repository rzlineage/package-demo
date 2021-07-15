import LayoutMaster from "./modules/layout/index.js";
import FloatBox from "./modules/float/index.js";
import InfiniteScroll from "./modules/scroll/index.js";

const components = [
    LayoutMaster,
    FloatBox,
    InfiniteScroll
];

//定义install方法
const install = Vue => {
    if (install.installed) return;
    install.installed = true;
    // components.map(component => Vue.component(component.name, component));
    components.forEach(function (item) {
        if (item.install) {
          Vue.use(item);
        } else if (item.name) {
          Vue.component(item.name, item);
        }
    });
};

// function install(Vue) {
//     var components = [ActionSheet, AddressEdit, AddressList, Area, Badge, Button, Calendar, Card, Cascader, Cell, CellGroup, Checkbox, CheckboxGroup, Circle, Col, Collapse, CollapseItem, ContactCard, ContactEdit, ContactList, CountDown, Coupon, CouponCell, CouponList, DatetimePicker, Dialog, Divider, DropdownItem, DropdownMenu, Empty, Field, Form, GoodsAction, GoodsActionButton, GoodsActionIcon, Grid, GridItem, Icon, Image, ImagePreview, IndexAnchor, IndexBar, Info, List, Loading, Locale, NavBar, NoticeBar, Notify, NumberKeyboard, Overlay, Pagination, Panel, PasswordInput, Picker, Popover, Popup, Progress, PullRefresh, Radio, RadioGroup, Rate, Row, Search, ShareSheet, Sidebar, SidebarItem, Skeleton, Sku, Slider, Step, Stepper, Steps, Sticky, SubmitBar, Swipe, SwipeCell, SwipeItem, Switch, SwitchCell, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, TreeSelect, Uploader];
//     components.forEach(function (item) {
//       if (item.install) {
//         Vue.use(item);
//       } else if (item.name) {
//         Vue.component(item.name, item);
//       }
//     });
//   }

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    LayoutMaster,
    FloatBox,
    InfiniteScroll
};