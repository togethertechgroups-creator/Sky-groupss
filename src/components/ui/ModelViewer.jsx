import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, OrbitControls } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  // Auto-centering hack just in case
  return <primitive object={scene} />;
}

// Camera Rig for Mouse Parallax
function CameraRig({ enableParallax }) {
  const target = new THREE.Vector3();
  useFrame((state) => {
    if (enableParallax) {
      // Lerp camera position based on mouse position
      target.set(state.pointer.x * 2, state.pointer.y * 1 + 2, 8);
      state.camera.position.lerp(target, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });
  return null;
}

export default function ModelViewer({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  enableMouseParallax = true,
  enableHoverRotation = true,
  environmentPreset = 'forest',
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  showScreenshotButton = false,
  className = ""
}) {
  const handleScreenshot = () => {
    // Basic screenshot stub
    const canvas = document.querySelector('.webgl-canvas-container canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'model-screenshot.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div 
      className={`relative webgl-canvas-container ${className}`} 
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <group position={[modelXOffset, modelYOffset, 0]}>
            <Model url={url} />
            <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.4} far={10} position={[0, -0.5, 0]} color="#000000" />
          </group>
          <Environment preset={environmentPreset} />
          {enableMouseParallax && <CameraRig enableParallax={true} />}
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            enableRotate={enableHoverRotation}
          />
        </Suspense>
      </Canvas>
      {showScreenshotButton && (
        <button 
           className="absolute bottom-4 right-4 bg-charcoal text-white text-xs px-3 py-1.5 rounded-sm border border-gold hover:bg-gold transition-colors z-10 font-label shadow-lg"
           onClick={handleScreenshot}
        >
          Capture Snapshot
        </button>
      )}
    </div>
  );
}
