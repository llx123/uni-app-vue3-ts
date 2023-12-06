<script setup lang="ts">
const login = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>

<template>
  <view class="index">index</view>
  <uni-card
    title="基础卡片"
    sub-title="副标题"
    extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  >
    <text @tap="login">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>
</template>

<style lang="scss">
//
</style>
