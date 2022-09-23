<template>
  <!-- 列表组件，用于首页、全部商品页面的商品列表 -->
  <div id="myList" class="myList">
    <ul>
      <li v-for="item in list" :key="item.product_id">
        <el-popover placement="top">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 10px 0 0">
            <el-button
              type="primary"
              size="mini"
              @click="deleteCollect(item.product_id)"
              >确定</el-button
            >
          </div>
          <i
            class="el-icon-close delete"
            slot="reference"
            v-show="isDelete"
          ></i>
        </el-popover>
        <router-link
          :to="{
            path: '/goods/details',
            query: { productID: item.product_id },
          }"
        >
          <img :src="$target + item.product_picture" alt />
          <h2>{{ item.product_name }}</h2>
          <h3>{{ item.product_title }}</h3>
          <p>
            <span>{{ item.product_selling_price }}元</span>
            <span
              v-show="item.product_price != item.product_selling_price"
              class="del"
              >{{ item.product_price }}元</span
            >
          </p>
        </router-link>
      </li>
      <li v-show="isMore && list.length >= 1" id="more">
        <router-link
          :to="{
            path: '/goods',
            query: {
              categoryID: categoryID,
            },
          }"
          >浏览更多</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyList",
  // list为父组件传过来的商品列表
  // isMore为是否显示浏览更多
  props: ["list", "isMore", "isDelete"],
  data() {
    return {};
  },
  computed: {
    //通过list获取当前显示的商品的分类ID,用于"浏览更多"链接的参数
    categoryID: function () {
      let categoryID = [];
      if (this.list != "") {
        for (let i = 0; i < this.list.length; i++) {
          const id = this.list[i].category_id;
          if (!categoryID.includes(id)) {
            categoryID.push(id);
          }
        }
      }
    },
  },
};
</script>

<style>
</style>