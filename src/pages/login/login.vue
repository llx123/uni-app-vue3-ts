<script setup lang="ts">
import { ref } from 'vue'

import { onLoad } from '@dcloudio/uni-app'
import { postLoginWx } from '@/services/login'
// 获取code 登录凭证
let code = ''
onLoad(async () => {
  const res = await uni.login()
  console.log('====================================')
  console.log(res, 233)
  code = res.code
  console.log('====================================')
})
const detail = ref()
const onGetPhoneNumber: UniHelper.ButtonOnGetphonenumber = (ev) => {
  const encryptedData = ev.detail!.encryptedData!
  const iv = ev.detail?.iv!
  detail.value = ev.detail
  postLoginWx<String>({
    encryptedData,
    code,
    iv,
  })
}
</script>

<template>
  <view class="login">login</view>
  <button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
    <text class="icon icon-phone"></text>
    手机号快捷登录
  </button>
  <view>{{ JSON.stringify(detail) }}</view>
</template>

<style lang="scss">
//
</style>
