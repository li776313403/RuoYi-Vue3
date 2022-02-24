/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-23 11:06:48
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 12:04:33
 */
import { getDicts } from "@/api/system/dict/data";
import { ref, toRefs } from "vue";
import { Dic } from "@/entity/sysEntity";
/**
 * 获取字典数据
 */
function useDict(...args: string[]) {
  const res = ref({});
  return (() => {
    args.forEach((d) => {
      res.value[d] = [];
      getDicts(d).then((resp) => {
        const data = resp.data as Array<Dic>;
        res.value[d] = data.map((p) => ({
          label: p.dictLabel,
          value: p.dictValue,
          elTagType: p.listClass,
        }));
      });
    });
    return toRefs(res.value);
  })();
}

export { useDict };
