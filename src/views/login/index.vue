<template>
  <div class="my-login">
    <el-card class="login-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form status-icon ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
        <el-form-item label="手机号："  prop="mobile" >
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input v-model="loginForm.code" style="width:200px" placeholder="请输入验证码"></el-input>
          <el-button type="primary" plain style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" style="margin-right:10px"></el-checkbox>我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-button style="width:100%" @click="Login()" type="primary">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkModlie = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      rules: {
        modlie: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkModlie, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    Login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.axios
            .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
            )
            .then((res) => {
              this.$router.push('/')
            }).catch(() => {
              this.$message.error('用户名或密码错误')
            })
        }
      })
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
