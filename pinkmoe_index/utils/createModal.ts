/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-07-24 12:50:52
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-28 16:44:48
 * @FilePath: /pinkmoe_index/utils/createModal.ts
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * PinkMoe主题上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved.
 */
import type { Component } from 'vue'
import { createApp } from 'vue'

export function createModal(modalConstructor: Component, options?: any, resolve = null) {
  // 这里使用promise的方式，使我们在以函数的方式调用组件时，可以异步处理
  let app: any = null
  const container = document.createElement('div')
  document.body.appendChild(container)

  // 销毁元素
  function destroyNodes() {
    app?.unmount()
    document.body.removeChild(container)
  }

  // 定义close方法，通过props传递给组件
  function close(val) {
    destroyNodes()
    if (val)
      resolve(val)
  }

  // 定义ok方法，通过props传递给组件
  function ok() {
    destroyNodes()
  }

  // 使用createAPP方法生成vue实例，第一个参数modalConstructor为component类型，
  // 第二个参数为传递给modalConstructor组件的参数props

  app = createApp(modalConstructor, {
    close,
    ok,
    ...options,
  })

  return { app, container }
}

export function createDialogModal(modalConstructor: Component, options?: any) {
  // 这里使用promise的方式，使我们在以函数的方式调用组件时，可以异步处理

  return new Promise((resolve, reject) => {
    let app: any = null
    let instance: any = null
    const container = document.createElement('div')
    document.body.appendChild(container)

    // 销毁元素
    function destroyNodes() {
      instance = null
      app?.unmount()
      document.body.removeChild(container)
    }

    // 定义close方法，通过props传递给组件
    function close() {
      setTimeout(() => {
        destroyNodes()
        reject()
      }, 300)
    }

    // 定义ok方法，通过props传递给组件
    function ok(val?: any) {
      setTimeout(() => {
        destroyNodes()
        resolve(val)
      }, 300)
    }

    // 使用createAPP方法生成vue实例，第一个参数modalConstructor为component类型，
    // 第二个参数为传递给modalConstructor组件的参数props

    app = createApp(modalConstructor, {
      close,
      ok,
      ...options,
    })

    instance = app.mount(container) // 渲染到创建的div节点上
  })
}
