   <template>
  <div class="container">
    <div class="main">
      <div class="loginbox">
        <div class="loginbox-in">
          <div class="userbox">
            <el-row>
              <el-col :span="8"
                ><div class="grid-content bg-purple">1ffffffsfasasaafa11</div
              ></el-col>
              <el-col :span="8"
                ><div class="grid-content bg-purple-light">111</div
              ></el-col>
              <el-col :span="8"
                ><div class="grid-content bg-purple">111</div
              ></el-col>

            </el-row>
          </div>
          <br />
          <el-input
            type="text"
            v-model="user_list.name"
            maxlength="10"
            show-word-limit
            prefix-icon="el-icon-user"
            placeholder="请输入内容"
          >
          </el-input>
          <br />
          <el-input
            :span="12"
            placeholder="请输入密码"
            prefix-icon='el-icon-lock'
            v-model="user_list.pwd"
            show-password
          ></el-input>
          <el-row size="medium">
            <router-link @click="register" to="/register">注册账号</router-link>
            <el-button span="3" size="mini" type="primary" round
              >登录</el-button
            >
          </el-row>
        </div>
        <div class="background">
          <div class="title">Welcome to ZL System Management Center</div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user_list: {
        name: "",
        pwd: "",
      },
    };
  },
  methods: {
    login() {
      alert("login");
    },
    register() {
      alert("11");
    },
  },
};
</script>

<style lang='less'>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.loginbox {
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  /* transform: translateX(-50%);
  transform: translateY(-50%); */
  transform: translate(-50%, -50%);
  background-color: lavender;
}
.loginbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4e655d;
}
.loginbox-in {
  background-color: #89ab9e;
  width: 240px;
}
.userbox {
  margin-top: 120px;
  height: 30px;
  width: 230px;
  display: flex;
  margin-left: 25px;
}
.pwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
}

.background {
  width: 570px;
  background-image: url("https://cdn.homecrux.com/wp-content/uploads/2019/11/tabletop-Christmas-tree_4.jpg");
  background-size: cover;
  font-family: sans-serif;
}
.title {
  margin-top: 320px;
  font-weight: bold;
  font-size: 20px;
  color: #4e655d;
}
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

input {
  outline-style: none;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
  background-color: transparent;
  height: 20px;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
/* input::-webkit-input-placeholder{
    color:#E9E9E9;
 } */
input:focus {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
input:hover {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}

input:-webkit-autofill {
  /* 修改默认背景框的颜色 */
  box-shadow: 0 0 0px 1000px #89ab9e inset !important;
  /* 修改默认字体的颜色 */
  -webkit-text-fill-color: #445b53;
}

input:-webkit-autofill::first-line {
  /* 修改默认字体的大小 */
  font-size: 15px;
  /* 修改默认字体的样式 */
  font-weight: bold;
}
.log-box {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 190px;
  margin-left: 30px;
  color: #4e655d;
  margin-top: -5px;
  align-items: center;
}
.log-box-text {
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
}
.login_btn {
  background-color: #5f8276; /* Green */
  border: none;
  color: #fafafa;
  padding: 5px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  border-radius: 20px;
  outline: none;
}
.login_btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  background-color: #0b5137;
  transition: all 0.2s ease-in;
}

.warn {
  margin-top: 60px;
  /* margin-right:120px; */
  margin-left: -120px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
}

.register_btn {
  background-color: transparent; /* Green */
  border: none;
  text-decoration: none;
  font-size: 12px;
  /* border-radius: 20px;   */
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
  display: flex;
  justify-content: space-around;
  outline: none;
}
.login:hover {
  font-weight: bold;
  cursor: pointer;
}
.icon-key:before {
  content: "\e775";
}

.icon-account:before {
  content: "\e817";
}
</style>
