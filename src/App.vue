<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="head">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail"><router-link to="/MyProject"><a-icon type="mail" />我的项目</router-link></a-menu-item>
        <a-menu-item key="app"><router-link to="/DialectSquare"><a-icon type="appstore" />话术广场</router-link></a-menu-item>
        <a-menu-item key="alipay"><router-link to="/CloudIconLibrary"><a-icon type="mail" />云意图库</router-link></a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />通话记录</span
          >
            <a-menu-item key="setting:1"><router-link to="/Dialogues">对话视图</router-link></a-menu-item>
            <a-menu-item key="setting:2"><router-link to="/DataView">数据视图</router-link></a-menu-item>
        </a-sub-menu>
        
      </a-menu>
      <div class="user-wrapper">
        <div class="content-box">
          <a-dropdown>
            <span class="action ant-dropdown-link user-dropdown-menu">
              <a-avatar class="avatar" size="small" :src="url"/>
              <span class="nameText">{{ nickname }}</span>
              <span class="action">
                <a-icon type="down" />
              </span>
            </span>
            <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
              <a-menu-item key="0">
                <router-link to="/Account/AccountInfo">
                  <div>
                    
                    <a-icon type="user"/>
                    <span>个人中心</span>
                  </div>
                </router-link>
              </a-menu-item>
              <a-menu-divider/>
              <a-menu-item key="3">
                <a href="javascript:;" @click="handleLogout">
                  <a-icon type="logout"/>
                  <span>退出登录</span>
                </a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      current: ['mail'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      nickname: "青苔虾"
    };
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>

<style >
  @import "./assets/css/global.scss";
</style>
