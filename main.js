import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


// 场景
const scene = new THREE.Scene()

scene.add(new THREE.AmbientLight(0xFFFFFF))

// 相机
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.set(0, 0, 1)

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// 创建物品
// const geometry = new THREE.BoxGeometry( 1, 1, 1 )
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
// const cube = new THREE.Mesh( geometry, material )
// scene.add( cube )

// 导入模型
const loader = new GLTFLoader()
loader.load('./3d/chicken_gun_deserttown2/scene.gltf', function ( gltf ) {
  scene.add(gltf.scene)
}, undefined, function ( error ) { 
  console.error( error )
})

// 循环渲染场景
function animate() {
  requestAnimationFrame( animate )
  renderer.render( scene, camera )
}
animate()