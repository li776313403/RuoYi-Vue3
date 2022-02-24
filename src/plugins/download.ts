/*
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-24 10:11:48
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 10:16:38
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { FileSaverOptions, saveAs } from 'file-saver'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import { blobValidate } from '@/utils/ruoyi'

const baseURL = import.meta.env.VITE_APP_BASE_API

export default {
    name(name: string, isDelete: boolean = true) {
        var url = baseURL + "/common/download?fileName=" + encodeURI(name) + "&delete=" + isDelete
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data])
                this.saveAs(blob, decodeURI(res.headers['download-filename']), undefined)
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    resource(resource: string) {
        var url = baseURL + "/common/download/resource?resource=" + encodeURI(resource);
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data])
                this.saveAs(blob, decodeURI(res.headers['download-filename']), undefined)
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    zip(url, name) {
        var url = baseURL + url
        axios({
            method: 'get',
            url: url,
            responseType: 'blob',
            headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(async (res) => {
            const isLogin = await blobValidate(res.data);
            if (isLogin) {
                const blob = new Blob([res.data], { type: 'application/zip' })
                this.saveAs(blob, name, undefined);
            } else {
                this.printErrMsg(res.data);
            }
        })
    },
    saveAs(text: string | Blob, name: string | undefined, opts: FileSaverOptions | undefined) {
        saveAs(text, name, opts);
    },
    async printErrMsg(data: { text: () => any }) {
        const resText = await data.text();
        const rspObj = JSON.parse(resText);
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
        ElMessage.error(errMsg);
    }
}

