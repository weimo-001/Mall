<template lang="pug">
div.form-container
    h1 注册
    el-form(label-position="left" label-width='70px', :model='formLogin')
        el-tabs(v-model="signupBy")
            el-tab-pane(label='手机注册', name='phone')
                el-form-item(label='手机号')
                    el-input(v-model='formLogin.phone')
            el-tab-pane(label='邮箱注册', name='email')
                el-form-item(label='邮箱')
                    el-input(v-model='formLogin.email')
            el-form-item(label='密码')
                el-input(v-model='formLogin.password')
            el-form-item()
                el-input
                 el-button(slot="append") 发送验证码
            el-form-item
                el-button 立即注册
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      signupBy: 'phone',
      formLogin: {
        phone: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>