"use client"

import Image from 'next/image';
import { getMyAvatar } from '~/server/db/queries';
import { Button } from "~/components/ui/button"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const avatarUrl = 'https://utfs.io/f/16ce36c1-c3e5-438e-a2e2-e6925074d428-f3g93q.jpg'


export const dynamic = "force-dynamic"

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 3;
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x005f });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

// Render the scene and camera
  renderer.render(scene, camera);

  // Add this function inside the useEffect hook
const renderScene = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(renderScene);
};

// Call the renderScene function to start the animation loop
renderScene();
const handleResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
};

window.addEventListener('resize', handleResize);

// Clean up the event listener when the component is unmounted
return () => {
  window.removeEventListener('resize', handleResize);
};
}
  }, []);
  return <div ref={containerRef} />;
};

export default function HomePage() {
  // const avatar = await getMyAvatar()
  return (
    <main className=''>
      <section className='w-full h-screen relative'>
      <ThreeScene />
      </section>
      {/* <Image 
        src={avatar?.url ?? avatarUrl}
        style={{objectFit: 'contain'}}
        width={128}
        height={128}
        alt='AK picture'
        className='rounded-full h-32 w-32'
      /> */}
      {/* <Button>Click me</Button> */}
    </main>
  );
}
