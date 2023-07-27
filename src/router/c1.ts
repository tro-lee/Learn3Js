import {RouteRecordRaw} from "vue-router";
import FirstScene from '../lesson/c1/index.vue'
import Light from '../lesson/c1/light.vue'
import Move from '../lesson/c1/index3.vue'
import Stat from '../lesson/c1/index4.vue'
import Control from '../lesson/c1/index5.vue'

export const c1: RouteRecordRaw[] = [
  {
    path: "/c1/1",
    component: FirstScene,
    meta: {
      title: "场景"
    }
  },
	{
		path: "/c1/2",
		component: Light,
		meta: {
			title: "光照"
		}
	},
	{
		path: "/c1/3",
		component: Move,
		meta: {
			title: "移动"
		}
	},
	{
		path: "/c1/4",
		component: Stat,
		meta: {
			title: "性能监控"
		}
	},
	{
		path: "/c1/5",
		component: Control,
		meta: {
			title: "交互控制"
		}
	}
]
