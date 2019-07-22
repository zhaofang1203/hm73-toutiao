<template>
  <el-container class="my-home">
    <!-- 左侧边栏 -->
    <el-aside class="home-aside" :width="collapse?'64px':'200px'">
      <div class="home-box" :class="{close:collapse}" ></div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="rgb(9, 8, 66)"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="collapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-comment"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-user-solid"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="home-header">
        <span class="el-icon-s-fold" @click="toggleMenu"></span>
        <span>江苏传值播客教育有限公司</span>
        <el-dropdown style="float:right">
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.jpg" alt />
            黑马小哥
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu>
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
          <!-- 二级路由展示 -->
          <router-view></router-view>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style scoped lang="less">
.my-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .home-aside {
    height: 100%;
    background: rgb(9, 8, 66);
    .home-box {
     width: 100%;
      height: 60px;
      background: #002840 url(../../assets/images/logo_admin.png) no-repeat
        center / 140px auto;
    }
    .close{
        background-image: url(../../assets/images/logo_admin_01.png);
        background-size: 34px auto;
    }
  }
  .home-header {
    line-height: 60px;
    font-size: 24px;
    img {
      width: 20px;
      vertical-align: middle;
    }
  }
}
</style>
