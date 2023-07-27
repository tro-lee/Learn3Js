<template>
<div ref="statsRef"></div>
<div ref="containRef" class="containRef"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {
	AxesHelper, BoxGeometry,
	Color,
	Mesh,
	MeshBasicMaterial, MeshLambertMaterial,
	PerspectiveCamera,
	PlaneGeometry,
	Scene, SphereGeometry, SpotLight,
	WebGLRenderer
} from "three";
import Stats from "stats.js"
import * as dat from "dat.gui"

const containRef = ref<HTMLDivElement>();
const statsRef = ref<HTMLDivElement>();

// <---------交互初始化---------->
const controlRef = ref({
  rotationSpeed: 0.02,
  bouncingSpeed: 0.03
});

(function initGui() {

})()

// <-------性能统计------->
const stats = new Stats();
stats.showPanel(0);


// <-------基本需要------->
// 场景引入
const scene = new Scene();
// 摄像机引入
const perspectiveCamera = new PerspectiveCamera(45, window.innerWidth/ window.innerHeight);
perspectiveCamera.position.set(30, 40, 60);
perspectiveCamera.lookAt(scene.position);


// <---------生命周期需要---------->
// 渲染器渲染
const webGLRenderer = new WebGLRenderer();
webGLRenderer.setClearColor(new Color('#ffffff'));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);
webGLRenderer.shadowMap.enabled = true;

// <---------光照-------->
const spotLight = new SpotLight();
spotLight.castShadow = true;
spotLight.position.set(60, 10, 60);
scene.add(spotLight)


// <-----------其他部件-------->

// 平面集合体
const planeGeometry = new PlaneGeometry(100, 200);
const planeMeshLambertMaterial = new MeshLambertMaterial({color: new Color('#cccccccc')});
const mesh2 = new Mesh(planeGeometry, planeMeshLambertMaterial);
scene.add(mesh2);
mesh2.receiveShadow = true;
mesh2.rotation.x = -0.5 * Math.PI;

// 坐标轴
const axesHelper = new AxesHelper(60);
scene.add(axesHelper);

// 方块几何体
const boxGeometry = new BoxGeometry(4, 4, 4);
const bMesh = new MeshLambertMaterial({color: new Color('rgba(255,0,0,0.07)')});
const mesh = new Mesh(boxGeometry, bMesh);
mesh.castShadow = true;
scene.add(mesh);

// 球体几何体
const sphereGeometry = new SphereGeometry(4);
const mesh1 = new Mesh(sphereGeometry, bMesh);
mesh1.position.set(10, 0, 10);
mesh1.castShadow = true;
scene.add(mesh1);

let step = 0;
// <---------移动------------->
(function renderScene() {
	stats.update();

	mesh.rotation.x += 0.02;
  mesh.rotation.x += controlRef.value.rotationSpeed;
  mesh.rotation.y += controlRef.value.rotationSpeed;

	step += 0.01
  mesh1.position.x = 10 * Math.sin(step);
	mesh1.position.y = 20 + 10 * Math.cos(step);

	requestAnimationFrame(renderScene);
	webGLRenderer.render(scene, perspectiveCamera);
})()

onMounted(() => {
	statsRef.value?.append(stats.dom);
  containRef.value?.appendChild(webGLRenderer.domElement);
  webGLRenderer.render(scene, perspectiveCamera);
})

window.addEventListener('resize', () => {
	perspectiveCamera.aspect = window.innerWidth/ window.innerHeight;
	perspectiveCamera.updateProjectionMatrix();
	webGLRenderer.setSize(window.innerWidth, window.innerHeight);
}, false)

</script>

<style scoped>

</style>
