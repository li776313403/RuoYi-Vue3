/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:17:44
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:19:25
 */
import { ElMessage, ElMessageBox, ElNotification, ElLoading, MessageParamsTyped, NotificationParamsTyped } from 'element-plus'
import { VNode, RendererNode, RendererElement } from 'vue-demi';

let loadingInstance: any;

export default {
    // 消息提示
    msg(content: MessageParamsTyped | undefined) {
        ElMessage.info(content)
    },
    // 错误消息
    msgError(content: MessageParamsTyped | undefined) {
        ElMessage.error(content)
    },
    // 成功消息
    msgSuccess(content: MessageParamsTyped | undefined) {
        ElMessage.success(content)
    },
    // 警告消息
    msgWarning(content: MessageParamsTyped | undefined) {
        ElMessage.warning(content)
    },
    // 弹出提示
    alert(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        ElMessageBox.alert(content, "系统提示")
    },
    // 错误提示
    alertError(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        ElMessageBox.alert(content, "系统提示", { type: 'error' })
    },
    // 成功提示
    alertSuccess(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        ElMessageBox.alert(content, "系统提示", { type: 'success' })
    },
    // 警告提示
    alertWarning(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        ElMessageBox.alert(content, "系统提示", { type: 'warning' })
    },
    // 通知提示
    notify(content: NotificationParamsTyped | undefined) {
        ElNotification.info(content)
    },
    // 错误通知
    notifyError(content: NotificationParamsTyped | undefined) {
        ElNotification.error(content);
    },
    // 成功通知
    notifySuccess(content: NotificationParamsTyped | undefined) {
        ElNotification.success(content)
    },
    // 警告通知
    notifyWarning(content: NotificationParamsTyped | undefined) {
        ElNotification.warning(content)
    },
    // 确认窗体
    confirm(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        return ElMessageBox.confirm(content, "系统提示", {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: "warning",
        })
    },
    // 提交内容
    prompt(content: string | VNode<RendererNode, RendererElement, { [key: string]: any; }> | undefined) {
        return ElMessageBox.prompt(content, "系统提示", {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: "warning",
        })
    },
    // 打开遮罩层
    loading(content: any) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: content,
            background: "rgba(0, 0, 0, 0.7)",
        })
    },
    // 关闭遮罩层
    closeLoading() {
        loadingInstance.close();
    }
}
