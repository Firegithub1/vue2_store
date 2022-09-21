<template>
  <div class="hello">
    <div>
      <el-row gutter="5">
        <el-col :span="8" col="2"
          ><div class="grid-content">
            <el-input
              placeholder="请选择日期"
              suffix-icon="el-icon-date"
              v-model="input1"
            >
            </el-input></div
        ></el-col>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-user"
              v-model="input2"
            >
            </el-input></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <h1>{{ msg }}</h1>

    <div class="demo-input-suffix"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: {
    input1: "",
  },
};
</script >
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
  background: hsl(215, 96%, 65%);
}
.bg-purple {
  background: hsl(212, 79%, 30%);
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
</style>