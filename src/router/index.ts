import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {c1} from "./c1.ts";

const routes: RouteRecordRaw[] = [
  ...c1,
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
