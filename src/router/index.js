import Vue from "vue";
import Router from "vue-router";
import orderClients from "@/components/slidNavs/orders/orderClients";
import reportClients from "@/components/slidNavs/orders/reportClients";
import visitClients from "@/components/slidNavs/orders/visitClients";
import login from "@/pages/login";
Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    // {
    //   path: "/",
    //   name: "login",
    //   component: login
    // },

    {
      path: "/orderClients",
      name: "客户订单",
      component: orderClients
    },
    {
      path: "/reportClients",
      name: "报备客户",
      component: reportClients
    },
    {
      path: "/visitClients",
      name: "带看客户",
      component: visitClients
    }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
});
