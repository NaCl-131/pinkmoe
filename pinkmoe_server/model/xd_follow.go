/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-06-22 11:13:07
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-07 08:55:49
 * @FilePath: /pinkmoe_server/model/xd_follow.go
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * xanaduCms程序上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved.
 */
package model

import (
	"server/global"

	uuid "github.com/satori/go.uuid"
)

type XdFollow struct {
	global.XD_MODEL
	FormUid         uuid.UUID `json:"formUid" form:"formUid" gorm:"comment:关注来源用户"` // 关注来源用户
	ToUid           uuid.UUID `json:"toUid" form:"toUid" gorm:"comment:关注目标用户"`     // 关注目标用户
	FormUidRelation XdUser    `json:"formUidRelation" form:"formUidRelation" gorm:"foreignKey:FormUid;references:UUID"`
	ToUidRelation   XdUser    `json:"toUidRelation" form:"toUidRelation" gorm:"foreignKey:ToUid;references:UUID"`
}
