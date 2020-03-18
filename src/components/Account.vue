<template class="aa">
    <div class="aa">
        <div class="aa">
            <a-menu style="width: 256px;padding-top:50px" mode="vertical" @click="handleClick">
                <a-menu-item key="5">
                    <router-link to="/Account/AccountInfo" exact>
                        <a-icon type="mail" />
                        账户信息
                    </router-link>
                </a-menu-item>
                <a-menu-item key="6">
                    <router-link to="/Account/PathManage">
                        <a-icon type="calendar" />
                        通道管理
                    </router-link>
                </a-menu-item>
                <a-menu-item key="7">
                    <router-link to="/Account/ManualExtension">
                        <a-icon type="mail" />
                        人工分机
                    </router-link>
                </a-menu-item>
                <a-menu-item key="8">
                    <router-link to="/Account/ApiInterface">
                        <a-icon type="calendar" />
                        API接口
                    </router-link>
                </a-menu-item>
            </a-menu>
        </div>

        <div class="">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Account',
  props: {
    msg: String
  },
  methods: {
      handleClick(e) {
        console.log('click ', e);
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .aa{
        height: 100%;
    }
    .aa ul{
        height: 100%;
    }

</style>
