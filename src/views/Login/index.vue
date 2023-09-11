<template>
  <div class="login" v-loading="loading">
    <el-form class="login-content" :model="loginForm" ref="loginForm" :rules="rules">
      <img class="logo1" src="../../../static/images/logo2.png" alt />
      <div class="title">企业综合信息管理平台</div>
      <el-form-item class="login-content-item" label="账号" prop="account">
        <el-input v-model="loginForm.account" style="width:240px;" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item class="login-content-item" label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" style="width:240px;" maxlength="6" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item class="login-content-item">
        <el-button style="width:300px;margin-top:30px;" type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validatorPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.password.length !== 6) {
          callback(new Error("请输入6位数密码"));
        } else if (this.loginForm.password !== '111111') {
          callback(new Error("密码错误"));
        }
        callback();
      }
    };
    return {
      loading: false,
      loginForm: {
        account: "SIEMENS",
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { validator: validatorPassword, required: true, trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', false);
  },
  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.$store.commit('UPDATEISLOGIN', true);
            this.$store.commit('UPDATEUSERINFO', {
              user_name: 'Tom',
              user_avatar: '1.png',
              user_stand: '0'
            });
            this.$router.push({ name: 'integratedScreen' })
            this.loading = false;
          }, 1000)

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>


<style scoped>
.logo1 {
  width: 1.4rem;
}

.title {
  font-size: 0.3rem;
  margin-top: 0.1rem;
  margin-bottom: .3rem;
  font-weight: bold;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-content {
  margin-top: 100px;
  width: 350px;
  height: 400px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-content-item {
  display: flex;
  width: 300px;
}
</style>