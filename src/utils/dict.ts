/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:06:48
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-24 18:53:45
 */
import { getDicts } from "@/api/system/dict/data";
import { ref, toRefs } from "vue";
import { ReturnResult, SysDictData } from "@/entity/sysEntity";
import { AxiosResponse } from "axios";
/**
 * 获取字典数据
 */
function useDict(...args: string[]) {
  const res = ref({});
  return (() => {
    args.forEach((d) => {
      res.value[d] = [];
      getDicts(d).then((result: AxiosResponse<ReturnResult<Array<SysDictData>>>) => {
        if (result.data.data) {
          res.value[d] = result.data.data.map((p) => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
          }));
        }
      });
    });
    return toRefs(res.value);
  })();
}

export { useDict };
