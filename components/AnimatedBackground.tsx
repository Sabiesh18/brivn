"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from 'three';

// A single 3D Gear Mesh
function Gear({ position, rotation, scale, color, speed, reverse }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += (reverse ? -speed : speed) * delta;
    }
  });

  // Create a custom gear shape using Three.js ExtrudeGeometry
  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 2;
    const innerRadius = 1.2;
    const teeth = 12;
    const step = (Math.PI * 2) / teeth;

    for (let i = 0; i < teeth; i++) {
        const angle = i * step;
        const nextAngle = (i + 1) * step;
        
        // Tooth base
        shape.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        // Tooth tip
        shape.lineTo(Math.cos(angle + 0.1) * (radius * 1.3), Math.sin(angle + 0.1) * (radius * 1.3));
        shape.lineTo(Math.cos(nextAngle - 0.1) * (radius * 1.3), Math.sin(nextAngle - 0.1) * (radius * 1.3));
        // Tooth end base
        shape.lineTo(Math.cos(nextAngle) * radius, Math.sin(nextAngle) * radius);
    }
    shape.closePath();

    // Create a hole in the middle
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, false);
    shape.holes.push(holePath);

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    });
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      geometry={gearGeometry}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2} 
        envMapIntensity={1}
      />
    </mesh>
  );
}

// Composition of multiple interlocking gears
function GearMechanism() {
  const { viewport } = useThree();

  // Responsive logic based on 3D viewport dimensions
  const isMobile = viewport.width < 12;
  const isTablet = viewport.width >= 12 && viewport.width < 18;

  // Scale down on smaller screens
  const scale = isMobile ? 0.5 : isTablet ? 0.75 : 1;
  
  // Lock positioning to exact center of the screen
  const posX = 0; 
  const posY = 0;

  return (
    <group position={[posX, posY, 0]} scale={scale}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={isMobile ? 0.5 : 1}>
            {/* Main Gold Gear */}
            <Gear 
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
                scale={1} 
                color="#c9a227" 
                speed={0.5} 
                reverse={false} 
            />
            
            {/* Secondary Gear (Left/Top) */}
            <Gear 
                position={[-3.6, 1.8, -0.2]} 
                rotation={[0, 0, 0.2]} 
                scale={0.7} 
                color="#8B6B00" 
                speed={0.71} // Ratio of sizes
                reverse={true} 
            />

            {/* Tertiary Gear (Right/Bottom) */}
            <Gear 
                position={[3.0, -2.6, 0.5]} 
                rotation={[0, 0, -0.4]} 
                scale={0.5} 
                color="#e0e0e0" 
                speed={1.0} 
                reverse={true} 
            />
             {/* Small Accent Gear */}
             <Gear 
                position={[-1.5, -3.2, 0.2]} 
                rotation={[0, 0, 0]} 
                scale={0.4} 
                color="#c9a227" 
                speed={1.25} 
                reverse={true} 
            />
        </Float>
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
            {/* Soft studio lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight 
                position={[10, 10, 5]} 
                intensity={2} 
                castShadow 
                shadow-mapSize={[1024, 1024]} 
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <GearMechanism />

            {/* Environment reflection map for shiny metal materials */}
            <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
