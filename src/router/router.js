import Vue from 'vue';
import VueRouter from 'vue-router';

import CloudIconLibrary from '../components/CloudIconLibrary.vue';
import DataView from '../components/DataView.vue';
import DialectSquare from '../components/DialectSquare.vue';
import Dialogues from '../components/Dialogues.vue';
import MyProject from '../components/MyProject.vue';
import Login from '../components/Login.vue';

import Account from '../components/Account.vue';
  import AccountInfo from '../components/account/AccountInfo.vue';
  import ApiInterface from '../components/account/ApiInterface.vue';
  import ManualExtension from '../components/account/ManualExtension.vue';
  import PathManage from '../components/account/PathManage.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/MyProject' },
    { path: '/CloudIconLibrary', component: CloudIconLibrary },
    { path: '/DataView', component: DataView },
    { path: '/DialectSquare', component: DialectSquare },
    { path: '/Dialogues', component: Dialogues },
    { path: '/MyProject', component: MyProject },
    { path: '/Login', component: Login },
    { path: '/Account', 
      component: Account,
      children:[
        { path: '/', redirect: 'AccountInfo' },
        { path: 'AccountInfo', component: AccountInfo },
        { path: 'ApiInterface', component: ApiInterface },
        { path: 'ManualExtension', component: ManualExtension },
        { path: 'PathManage', component: PathManage },
      ]
  
    },
  ]
  
  const router = new VueRouter({
    routes
  })

  export default router;