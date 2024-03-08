import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MapControls } from 'three/addons/controls/MapControls.js'

// 场景
const scene = new THREE.Scene()

// 灯光
scene.add(new THREE.AmbientLight(0xFFFFFF))
const directionalLight = new THREE.DirectionalLight( 0xffffff, 10 )
directionalLight.position.set(10, 10, 10).normalize()
scene.add( directionalLight )

// 相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000)
camera.position.set(10, 10, 20)
camera.lookAt(new THREE.Vector3(0, 0, 0))
scene.add(camera)

// 渲染器
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// 创建物品
// const geometry = new THREE.BoxGeometry( 1, 1, 1 )
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
// const cube = new THREE.Mesh( geometry, material )
// scene.add( cube )

// 导入模型
const loader = new GLTFLoader()
loader.load('./3d/chinese_old_hotel/scene.gltf', function ( gltf ) {
  const model = gltf.scene
  model.position.set(0, 0, 0)
  scene.add(model)
}, undefined, function ( error ) { 
  console.error( error )
})

// 控制
const controls = new MapControls( camera, renderer.domElement )
controls.enableDamping = true
controls.dampingFactor = 0.30
controls.screenSpacePanning = false
controls.autoRotate = false
controls.enableZoom = true
controls.zoomSpeed = 2.0
controls.minZoom = Infinity
controls.maxZoom = Infinity
controls.enablePan = true
controls.panSpeed = 5.0

// 循环渲染场景
function animate() {
  requestAnimationFrame( animate )

  controls.update()

  renderer.render( scene, camera )
}
animate()
