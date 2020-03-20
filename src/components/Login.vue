<template>
  <div class="login">
     <a-tabs defaultActiveKey="2" style="">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="apple" />
          Tab 1
        </span>
        Tab 1
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="android" />
          Tab 2
        </span>
        Tab 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    padding-top: 50px;
  }
</style>
