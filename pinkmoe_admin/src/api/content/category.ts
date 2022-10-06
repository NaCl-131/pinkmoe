/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-05-06 14:55:21
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-07 09:14:02
 * @FilePath: /pinkmoe_admin/src/api/content/category.ts
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * xanaduCms程序上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved. 
 */
import { http } from '@/utils/http/axios';
import { BasicResponseModel } from '@/api/common';

/**
 * @description: 获取分类列表
 * @param params
 */
export function getCategoryList(params?) {
  return http.request<BasicResponseModel>(
    {
      url: '/Admin/Category/CategoryList',
      method: 'GET',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 更新分类
 * @param params
 */
export function updateCategory(params) {
  return http.request(
    {
      url: `/Admin/Category/CategoryUpdate`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 创建分类
 * @param params
 */
export function createCategory(params) {
  return http.request(
    {
      url: `/Admin/Category/CategoryCreate`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 删除分类
 * @param params
 */
export function deleteCategory(params) {
  return http.request(
    {
      url: `/Admin/Category/CategoryDelete`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}
