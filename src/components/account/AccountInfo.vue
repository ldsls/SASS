<template>
<div>
  <div class="accountInfo">
    <div class="accountInfoText">
       账户信息
    </div>
    <div>
      <a-card :body-style="{padding: '24px 0px'}" :bordered="false">
        <a-form @submit="handleSubmit" :form="form">
          <a-form-item
            label="头像"
            :labelCol="{lg: {span: 2}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <a-button type="primary" style="margin-left:20px">选择头像</a-button>
          </a-form-item>
          <a-form-item
            label="企业名称"
            :labelCol="{lg: {span: 2}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
            <a-input
              v-decorator="[
                'name',
                {rules: [{ required: false, message: '请输入企业名称' }]}
              ]"
              name="name"
              placeholder="请输入企业名称" />
          </a-form-item>
          <a-form-item
            label="企业简介"
            :labelCol="{lg: {span: 2}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
            <a-textarea
              rows="4"
              placeholder="企业简介"
              v-decorator="[
                'type',
                {rules: [{ required: false, message: '企业简介' }]}
              ]" />
          </a-form-item>
           <a-form-item
            label="项目权限"
            :labelCol="{lg: {span: 2}, sm: {span: 6}}"
            :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          >
            <a-select
              placeholder="请选择项目权限"
              v-decorator="['paymentUser', { rules: [{required: false, message: ''}] }]">
              <!-- <a-select-option value="">请选择</a-select-option> -->
              <a-select-option value="1">仅下载权限</a-select-option>
              <a-select-option value="2">仅自己可见</a-select-option>
              <a-select-option value="3">仅查看</a-select-option>
              <a-select-option value="4">可查看并且可修改</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :wrapperCol="{ span: 2 }"
            style="text-align: right"
          >
            <a-button htmlType="submit" type="primary">提交</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
   <div class="personalInfo" style="margin-top:10px">
    <div class="personalInfoText">
       个人信息
    </div>
    <div>
      <a-card :body-style="{padding: '24px 0px'}" :bordered="false">
        <div style="padding:0px 20px 20px">
          <a-row type="flex" justify="start">
            <a-col :span="2">账号ID</a-col>
            <a-col :span="4">xsdsadsd23213123144</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">手机号</a-col>
            <a-col :span="4">15618900000</a-col>
            <a-col :span="3">更换</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">绑定微信号</a-col>
            <a-col :span="4">15618900000</a-col>
            <a-col :span="3">更换</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">登陆密码</a-col>
            <a-col :span="4">******</a-col>
            <a-col :span="3">更改密码</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">注册时间</a-col>
            <a-col :span="4">2020年3月1日</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">授权通道</a-col>
            <a-col :span="4">25</a-col>
          </a-row>
          <a-row type="flex" justify="start">
            <a-col :span="2">截至有效日期</a-col>
            <a-col :span="4">2020年12月31日</a-col>
            <a-col :span="3">已过期</a-col>
          </a-row>
        </div>
      </a-card>
    </div>
  </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { FormModel } from 'ant-design-vue';
// Vue.use(FormModel);
export default {
  name: 'AccountInfo',
  props: {
    msg: String
  },
  data () {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,

      // form
      form: this.$form.createForm(this)

    }
  },
  methods: {

    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .accountInfo{
    width: 100%;
    /* height: 600px; */
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    padding: 20px 20px  0;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .accountInfoText{
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #ccc;
      height: 65px;
      line-height: 40px;
  }
  .personalInfo{
    width: 100%;
    /* height: 600px; */
    border-radius: 5px;
    /* border: 1px solid red; */
    background: #fff;
    padding: 20px 20px  0;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  .personalInfoText{
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    height: 65px;
    line-height: 40px;
  }
  .personalInfo div.ant-row-flex{
    margin-top: 7px;
  }
</style>
