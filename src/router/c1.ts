import {RouteRecordRaw} from "vue-router";
import FirstScene from '../lesson/c1/index.vue'
export const c1: RouteRecordRaw[] = [
  {
    path: "/",
    component: FirstScene,
    meta: {
      title: "第一个场景"
    }
  }
]
