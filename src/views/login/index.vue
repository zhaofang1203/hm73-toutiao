<template>
  <div class="my-login">
    <el-card class="login-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form :model="roulerForm" label-width="80px">
        <el-form-item label="手机号：">
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <el-input style="width:200px" placeholder="请输入验证码"></el-input>
          <el-button type="primary" plain style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" style="margin-right:10px"></el-checkbox>我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-button style="width:100%" type="primary">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roulerForm: {},
      checked: true
    }
  }
}
</script>

<style scoped lang="less">
.my-login {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login-card {
    width: 450px;
    height: 380px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      margin: 20px auto;
    }
  }
}
</style>
