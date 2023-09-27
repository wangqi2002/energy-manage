<template>
  <div class="login" v-loading="loading">
    <el-form
      class="login-content"
      :model="loginForm"
      ref="loginForm"
      :rules="rules"
    >
      <img class="logo1" src="../../../static/images/icon.png" alt />
      <div class="title">IShow</div>
      <el-form-item class="login-content-item" label="账号" prop="account">
        <el-input
          v-model="loginForm.account"
          style="width: 240px"
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item class="login-content-item" label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          style="width: 240px"
          maxlength="6"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item class="login-content-item">
        <el-button
          style="width: 300px; margin-top: 30px"
          type="primary"
          @click="submitForm('loginForm')"
          >登录</el-button
        >
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
      }
      //  else {
      //   if (this.loginForm.password.length !== 6) {
      //     callback(new Error("请输入6位数密码"));
      //   } else if (this.loginForm.password !== '111111') {
      //     callback(new Error("密码错误"));
      //   }
      //   callback();
      // }
      callback();
    };
    return {
      loading: false,
      loginForm: {
        account: "IShow",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { validator: validatorPassword, required: true, trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.$store.commit("UPDATEISLOGIN", false);
  },
  methods: {
    submitForm(loginForm) {
      const _self = this;
      // console.log(this.$refs[loginForm])
      this.$refs[loginForm].validate((valid) => {
        console.log({
          name: _self.loginForm.account,
          password: _self.loginForm.password,
        });
        if (valid) {
          $.ajax({
            url: _self.baseURL.serverSrc + "login", // 后端地址
            type: "post",
            data: {
              name: _self.loginForm.account,
              password: _self.loginForm.password,
            },
            dataType: "json",
            success: function (data) {
              //后端返回的json数据（此处data为json对象）
              console.log("成功");
              console.log(data);
              if (data[0].code == 200) {
                _self.loading = true;
                setTimeout(() => {
                  _self.$store.commit("UPDATEISLOGIN", true);
                  _self.$store.commit("UPDATEUSERINFO", {
                    name: data[2].value.name,
                    role: data[2].value.role,
                  });
                  _self.$router.push({ name: "integratedScreen" });
                  _self.loading = false;
                }, 1000);
              } else if (data[0].code == 300) {
                console.log(data[1].msg);
                _self.$notify({
                  title: "提示",
                  message: data[1].msg,
                  type: "warning",
                  duration: 1500,
                });
              } else if (data[0].code == 400) {
                console.log(data[1].msg);
                _self.$notify({
                  title: "提示",
                  message: data[1].msg,
                  type: "error",
                  duration: 1500,
                });
              }
            },
            error: function () {
              alert("异常");
            },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


<style scoped>
.logo1 {
  width: 1.4rem;
}

.title {
  font-size: 0.2rem;
  margin-top: 0.1rem;
  margin-bottom: 0.3rem;
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