<template class="templateAccount">
    <div class="account">
        <div class="navCount">
            <a-menu v-model="currentNav" style="width: 256px;padding-top:50px" mode="vertical" @click="handleClick">
                <a-menu-item key="accountInfo">
                    <router-link to="/Account/AccountInfo" exact>
                        <a-icon type="mail" />
                        账户信息
                    </router-link>
                </a-menu-item>
                <a-menu-item key="pathManage">
                    <router-link to="/Account/PathManage">
                        <a-icon type="calendar" />
                        通道管理
                    </router-link>
                </a-menu-item>
                <a-menu-item key="manualExtension">
                    <router-link to="/Account/ManualExtension">
                        <a-icon type="mail" />
                        人工分机
                    </router-link>
                </a-menu-item>
                <a-menu-item key="apiInterface">
                    <router-link to="/Account/ApiInterface">
                        <a-icon type="calendar" />
                        API接口
                    </router-link>
                </a-menu-item>
            </a-menu>
        </div>

        <div class="content">
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
    data() {
        return {
            currentNav: ['accountInfo'],
        };
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
    .navCount ul{
        height: 100%;
    }
    .templateAccount{
        height: 100%;
    }
    .account{
        display: flex;
        height: 100%;
        flex: 3;
        background: #eee;
    }
    .account div.content{
        flex-grow:1;
        margin-left: 20px;
        padding-top: 65px;
        padding-right: 20px;
        /* background: #fff; */
    }
</style>
