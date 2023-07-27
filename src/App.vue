<script setup lang="ts">
</script>

<template>
    <a-menu mode="horizontal" style="position: fixed">
        <a-sub-menu key="demo1">
            <template #title>第一章节</template>
            <a-menu-item key="1">
                <router-view to="/">第一个场景</router-view>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/c1/2">材料和光照</router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <router-link to="/c1/3">移动</router-link>
            </a-menu-item>
            <a-menu-item key="4">
                <router-link to="/c1/4">统计</router-link>
            </a-menu-item>
            <a-menu-item key="5">
                <router-link to="/c1/5">交互</router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="demo2">
            <template #title>第二章节</template>
            <a-menu-item key="c21">
                <router-view to="/c2/1">场景</router-view>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
  <router-view/>
</template>

<style scoped>
</style>
