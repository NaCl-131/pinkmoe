/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-04-26 00:39:36
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-07 09:25:44
 * @FilePath: /pinkmoe_admin/src/views/system/api/columns.ts
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * xanaduCms程序上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved. 
 */
import { h } from 'vue';
import { NTag } from 'naive-ui';

export const columns = [
  {
    title: 'api路径',
    key: 'path',
  },
  {
    title: 'api描述',
    key: 'description',
  },
  {
    title: '方法',
    key: 'method',
    render(row) {
      return h(
        NTag,
        {},
        {
          default: () => (row.method ? row.method : '暂无'),
        }
      );
    },
  },
  {
    title: 'api分组',
    key: 'apiGroup',
  },
];
