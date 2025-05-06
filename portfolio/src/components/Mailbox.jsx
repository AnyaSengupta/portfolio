import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function MailboxModel(props) {
  const gltf = useGLTF("../../mailbox/mailbox.gltf");
  return <primitive object={gltf.scene} scale={2.5} {...props} />;
}

export default function Mailbox() {
  return (
    <Canvas
      style={{ height: 500, width: "100%" }}
      camera={{ position: [2, 2, 6], fov: 35 }}
    >
      <ambientLight intensity={1.2} />
      <Suspense fallback={null}>
        <MailboxModel position={[0, -2.5, 0]} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls
        autoRotateSpeed={0.8}
        autoRotate={true}
        enableZoom={false}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
