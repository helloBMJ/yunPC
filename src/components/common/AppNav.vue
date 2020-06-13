<!-- 左侧菜单导航栏组件 -->

<template>
  <div class="app-nav-wrap">
    <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        :key="menu.route">
        <i class="el-icon-menu"></i>{{menu.name}}
      </el-menu-item>
    </el-menu> -->
    <el-menu
      background-color="#f0f0f0"
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
    >
      <el-submenu
        v-for="item in slidBar"
        :key="item.route"
        :index="item.index_"
      >
        <template slot="title">{{ item.name }}</template>
        <el-menu-item
          v-for="(item, index) in item.data"
          :key="index + 1"
          :index="item.route"
        >
          {{ item.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slidBar: [
        { index_: "1", name: "客户管理" },
        { index_: "2", name: "项目管理" },
        { index_: "3", name: "渠道管理" },
        {
          index_: "4",
          name: "订单管理",

          data: [
            { number: "1", name: "报备客户", route: "/reportClients" },
            { number: "2", name: "带看客户", route: "/visitClients" },
            { number: "3", name: "客户订单", route: "/orderClients" }
          ]
        },
        { index_: "5", name: "结佣退款审批" },
        { index_: "6", name: "内场管理" },
        { index_: "7", name: "结算管理" },
        { index_: "8", name: "统计报表" },
        { index_: "9", name: "看房" },
        { index_: "10", name: "广告管理" },
        { index_: "11", name: "知识库" },
        { index_: "12", name: "系统管理" }
      ]
    };
  },
  mounted() {
    // 刷新时以当前路由做为tab加入tabs
    if (
      this.$route.path !== "/" &&
      this.$route.path.indexOf("userInfo") == -1
    ) {
      // this.$store.commit("add_tabs", { route: "/", name: "客户管理" });
      this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.name
      });
      this.$store.commit("set_active_index", this.$route.path);
    } else {
      // this.$store.commit("add_tabs", { route: "/", name: "客户管理" });
      this.$store.commit("set_active_index", "/");
      this.$router.push("/");
    }
  },
  computed: {
    options() {
      return this.$store.state.options;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  text-align: end;
}
.el-menu-item.is-active {
  color: #fff;
  background: #005bac !important;
}
</style>
