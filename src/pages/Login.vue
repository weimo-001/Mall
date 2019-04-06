<template lang="pug">
div.form-container
    h1 登陆
    el-form(label-position="left" label-width='70px', :model='formLogin')
        el-tabs(v-model="loginBy")
            el-tab-pane(label='账号登陆', name='account')
                el-form-item(label='用户名')
                    el-input(v-model='formLogin.username')
                el-form-item(label='密码')
                    el-input(v-model='formLogin.password')
                el-form-item
                    el-button 立即登陆
                    router-link.forgotpwd(to="/") 忘记密码?
            el-tab-pane(label='手机登陆', name='phone')
                el-form-item(label='手机号')
                    el-input(v-model='formLogin.phone')
                el-form-item(label="验证码")
                    el-input 
                        el-button(slot="append") 发送验证码
                el-form-item
                    el-button 立即登陆
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginBy: "account",
      formLogin: {
        username: "",
        password: "",
        phone: ""
      }
    };
  }
};
</script>
<style lang="scss">
.form-container {
  max-width: 450px;
  margin-top: 2em;
  h1 {
    margin-bottom: 1em;
  }
}
.el-form .el-form-item {
  .el-form-item__label {
    vertical-align: top;
    line-height: 1.2;
  }
}
.forgotpwd,
.forgotpwd:visited {
  color: #409eff;
}
.forgotpwd {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  margin-left: 1em;
}
.forgotpwd:hover {
  text-decoration: underline;
}
.el-tabs__header{
    margin-bottom: 2em;
}
</style>
