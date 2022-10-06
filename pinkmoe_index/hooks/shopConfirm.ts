/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-08-04 07:41:38
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-28 16:31:31
 * @FilePath: /pinkmoe_index/hooks/shopConfirm.ts
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * PinkMoe主题上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved.
 */
import { buyShop } from '../api/user'
import type { ReqUserBuyShop } from '../api/user/types'
import { createDialogModal } from '../utils/createModal'
import MsgConfirm from '/@/components/Msgconfirm/index.vue'

export const useShopConfirm = (props) => {
  const dialog = ref()
  const num = ref(1)
  const currentVip = ref()
  const key = ref()
  const showAnimate = ref<boolean>(false)
  const { proxy } = getCurrentInstance()
  const formParams: ReqUserBuyShop = reactive({
    shopType: '',
    priceType: '',
    shopCredit: 0,
  })

  async function submitShop() {
    const res = await createDialogModal(MsgConfirm, {
      msg: '确认购买此商品？',
    })
    if (res) {
      formParams.shopType = currentVip.value.shopType
      formParams.priceType = currentVip.value.priceType
      formParams.shopCredit = parseInt(currentVip.value.shopCredit)
      formParams.shopValue = currentVip.value.shopValue
      formParams.shopNum = num.value
      formParams.shopKey = key.value

      proxy.$message({
        successMsg: '购买成功',
        failedMsg: '购买失败',
        loadFun: async () => {
          const { code, message } = await buyShop(formParams)
          return { code, message }
        },
      }).then((res) => {
        if (res.code === 200)
          dialog.value.hide()
      })
    }
  }

  onMounted(() => {
    dialog.value.show()
    currentVip.value = props.authorShop
  })

  return {
    showAnimate,
    dialog,
    num,
    submitShop,
    currentVip,
    key,
  }
}
