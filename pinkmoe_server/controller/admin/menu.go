/*
 * @Author: coderzhaolu && izhaicy@163.com
 * @Date: 2022-06-22 11:13:07
 * @LastEditors: coderzhaolu && izhaicy@163.com
 * @LastEditTime: 2022-08-07 09:01:58
 * @FilePath: /pinkmoe_server/controller/admin/menu.go
 * @Description: https://github.com/Coder-ZhaoLu/pinkmoe 
 * 问题反馈qq群:749150798
 * xanaduCms程序上所有内容(包括但不限于 文字，图片，代码等)均为指针科技原创所有，采用请注意许可
 * 请遵循 “非商业用途” 协议。商业网站或未授权媒体不得复制内容，如需用于商业用途或者二开，请联系作者捐助任意金额即可，我们将保存所有权利。
 * Copyright (c) 2022 by 指针科技, All Rights Reserved.
 */
package admin

import (
	"server/controller"
	adminLogic "server/logic/admin"
	"server/model"
	"server/model/request"
	"server/model/response"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func init() {
	controller.Register(&Menu{})
}

type Menu struct{}

func (menu *Menu) AuthMenuGet(c *gin.Context) {
	if userMenu, err := adminLogic.GetMenu(c); err != nil {
		zap.L().Error("adminLogic.GetMenu err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.OkWithData(userMenu, c)
	}
}

func (menu *Menu) AuthAllMenuGet(c *gin.Context) {
	if err, list, _ := adminLogic.GetMenuList(); err != nil {
		zap.L().Error("adminLogic.GetMenuList err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.OkWithData(list, c)
	}
}

func (menu *Menu) AuthMenuListGet(c *gin.Context) {
	var p request.PageInfo
	if err := c.ShouldBindQuery(&p); err != nil {
		// 记录日志
		zap.L().Error("request.PageInfo with invalid param", zap.Error(err))
		response.FailWithMessage(response.CodeInvalidParam.Msg(), c)
		return
	}
	if err, list, total := adminLogic.GetMenuList(); err != nil {
		zap.L().Error("adminLogic.GetMenuList err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.OkWithData(response.PageResult{
			List:      list,
			PageCount: total,
			Page:      p.Page,
			PageSize:  p.PageSize,
		}, c)
	}
}

func (menu *Menu) AuthMenuCreate(c *gin.Context) {
	var p model.XdBaseMenu
	if err := c.ShouldBindJSON(&p); err != nil {
		// 记录日志
		zap.L().Error("model.XdBaseMenu with invalid param", zap.Error(err))
		response.FailWithMessage(response.CodeInvalidParam.Msg(), c)
	}
	if err := adminLogic.CreateMenu(p); err != nil {
		zap.L().Error("adminLogic.CreateMenu err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.Ok(c)
	}
}

func (menu *Menu) AuthMenuUpdate(c *gin.Context) {
	var p model.XdBaseMenu
	if err := c.ShouldBindJSON(&p); err != nil {
		// 记录日志
		zap.L().Error("model.XdBaseMenu with invalid param", zap.Error(err))
		response.FailWithMessage(response.CodeInvalidParam.Msg(), c)
		return
	}
	if err := adminLogic.UpdateMenu(p); err != nil {
		zap.L().Error("adminLogic.UpdateMenu err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.Ok(c)
	}
}

func (menu *Menu) AuthMenuDelete(c *gin.Context) {
	var p request.GetById
	if err := c.ShouldBindJSON(&p); err != nil {
		// 记录日志
		zap.L().Error("request.GetById with invalid param", zap.Error(err))
		response.FailWithMessage(response.CodeInvalidParam.Msg(), c)
		return
	}
	if err := adminLogic.DeleteMenu(p); err != nil {
		zap.L().Error("adminLogic.DeleteMenu err", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	} else {
		response.Ok(c)
	}
}
