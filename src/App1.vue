<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "@/pages/home";
export default {
  components: { Home }
};
</script>

<style lang="scss">
.div {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
  }
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  .app-header {
    color: #fff;
    flex: 0 0 60px;
    background: #324057;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    .title {
      font-size: 24px;
    }
  }
  .app-content {
    flex: 1;
    display: flex;
    flex-flow: row;
    .app-nav {
      flex: 0 0 200px;
      background: #eff2f7;
    }
    .app-wrap {
      flex: 1;
      padding: 10px 20px;
      overflow: auto;
      .content-wrap {
        height: 90%;
        border: 1px solid #d1dbe5;
        border-top: none;
        padding: 0 20px;
      }
    }
  }
}
</style>
