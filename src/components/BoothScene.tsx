import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Booth() {
  const boothRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (boothRef.current) {
      boothRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={boothRef}>
      {/* Main Structure */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 2, 3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.1} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 1, -1.4]}>
        <boxGeometry args={[3.8, 1.9, 0.1]} />
        <meshStandardMaterial color="#800080" metalness={0.3} roughness={0.2} />
      </mesh>

      {/* Side Walls */}
      <mesh position={[-1.9, 1, 0]}>
        <boxGeometry args={[0.1, 1.9, 2.8]} />
        <meshStandardMaterial color="#800080" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[1.9, 1, 0]}>
        <boxGeometry args={[0.1, 1.9, 2.8]} />
        <meshStandardMaterial color="#800080" metalness={0.3} roughness={0.2} />
      </mesh>

      {/* Counter */}
      <mesh position={[0, 0.4, 0.8]}>
        <boxGeometry args={[2, 0.8, 0.4]} />
        <meshStandardMaterial color="#660066" metalness={0.4} roughness={0.2} />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Decorative Spheres */}
      <mesh position={[-1.5, 2.2, -1]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#9A009A" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[1.5, 2.2, -1]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#9A009A" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function BoothScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        style={{ background: 'linear-gradient(to right, #800080, #660066)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Booth />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}