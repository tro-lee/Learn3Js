<template>
<div ref="containRef" class="containRef"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {
	AxesHelper, BoxGeometry,
	Color,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	PlaneGeometry,
	Scene, SphereGeometry,
	WebGLRenderer
} from "three";

const containRef = ref<HTMLDivElement>();

// <-------基本需要------->
// 场景引入
const scene = new Scene();
// 摄像机引入
const perspectiveCamera = new PerspectiveCamera(45, window.innerHeight/window.innerWidth);
perspectiveCamera.position.set(-30, 40, 40);
perspectiveCamera.lookAt(scene.position);


// <---------生命周期需要---------->
// 渲染器渲染
const webGLRenderer = new WebGLRenderer();
webGLRenderer.setClearColor(new Color(0, 100, 10));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

// <---------更多部件------------>
// 坐标系
const axesHelper = new AxesHelper(20);
scene.add(axesHelper);
// 物体
const planeGeometry = new PlaneGeometry(60, 20);
const pMesh = new MeshBasicMaterial({color: new Color(10, 0, 50)});
const plane = new Mesh(planeGeometry, pMesh);
plane.rotation.z = 0.1 * Math.PI;

// 方块几何体
const boxGeometry = new BoxGeometry(4, 4, 4);
const bMesh = new MeshBasicMaterial({color: new Color(0, 0, 0), wireframe: true});
const mesh = new Mesh(boxGeometry, bMesh);
mesh.position.set(10, 10,10);
scene.add(mesh);

// 球体几何体
const sphereGeometry = new SphereGeometry(4);
const mesh1 = new Mesh(sphereGeometry, bMesh);
mesh1.position.set(-10, 0, 10);
scene.add(mesh1);

onMounted(() => {
  containRef.value?.appendChild(webGLRenderer.domElement);
  webGLRenderer.render(scene, perspectiveCamera);
})

</script>

<style scoped>

</style>
