/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-07-24 12:29:08
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-21 10:27:40
 * @FilePath: /pinkmoe_vitesse/src/components/Search/index.ts
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * PinkMoe主题上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved.
 */
import { createModal } from '/@/utils/createModal'
// import dragScroll from 'drag-scroll-vue3'
import Search from './index.vue'

function SearchDia(options = {}) {
  const res = createModal(Search, options)
  // res.app.directive('drag-scroll', dragScroll)
  const $inst = res.app.mount(res.container)
  return $inst
}
SearchDia.install = (app) => {
  app.component('SearchDia', Search)
  app.config.globalProperties.$search = SearchDia
  // app.provide('subDialog', V3Popup)
}
export default SearchDia
