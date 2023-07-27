<template>
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

const containRef = ref<HTMLDivElement>();

// <-------基本需要------->
// 场景引入
const scene = new Scene();
// 摄像机引入
const perspectiveCamera = new PerspectiveCamera(45, window.innerHeight/window.innerWidth);
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
spotLight.position.set(10, 10, 10);
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

onMounted(() => {
  containRef.value?.appendChild(webGLRenderer.domElement);
  webGLRenderer.render(scene, perspectiveCamera);
})

</script>

<style scoped>

</style>
