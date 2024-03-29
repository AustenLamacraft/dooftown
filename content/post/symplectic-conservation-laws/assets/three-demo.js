
// import * as THREE from 'https://unpkg.com/three@0.143.0/build/three.module.js'; 
import * as THREE from 'three';

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const canvas = document.getElementById("canvasID");

			const renderer = new THREE.WebGLRenderer({canvas: canvas});
			renderer.setSize( window.innerWidth, window.innerHeight );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();