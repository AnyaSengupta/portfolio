// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

// function MailboxModel() {
//   const { scene } = useGLTF("../../mailbox/mailbox.gltf"); // Updated path

//   return <primitive object={scene} scale={0.5} />;
// }

// const ThreeDMailbox = () => {
//   return (
//     <Canvas dpr={[1, 1.5]} camera={{ fov: 75, position: [0, 0, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 2, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <MailboxModel />
//         <Environment preset="sunset" blur={1} />
//       </Suspense>
//       <OrbitControls autoRotate enableZoom={false} />
//     </Canvas>
//   );
// };

// export default ThreeDMailbox;

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";

// // Typescript type for the model
// type GLTFResult = GLTF & {
//   nodes: {
//     Cube_Cube_material_0: THREE.Mesh
//   }
//   materials: {
//     Scene_Material: THREE.MeshStandardMaterial
//   }
// }

// function MailboxModel() {
//   const { scene } = useGLTF(
//     "/mailbox/mailbox.gltf"
//   ) as GLTFResult;

//   return <primitive object={scene} scale={0.5} />;
// }

// const ThreeDMailbox = () => {
//   return (
//     <Canvas dpr={[1, 1.5]} camera={{ fov: 75, position: [0, 0, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 2, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <MailboxModel />
//         <Environment preset="sunset" blur={1} />
//       </Suspense>
//       <OrbitControls autoRotate enableZoom={false} />
//     </Canvas>
//   );
// };

// export default ThreeDMailbox;
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

// Typescript type for the model
type GLTFResult = GLTF & {
  nodes: {
    Cube_Cube_material_0: THREE.Mesh;
  };
  materials: {
    Scene_Material: THREE.MeshStandardMaterial;
  };
};

function MailboxModel() {
  const { scene } = useGLTF("/mailbox/mailbox.gltf") as GLTFResult;

  return <primitive object={scene} scale={0.5} />;
}

const ThreeDMailbox = () => {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 75, position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 5]} intensity={1} />
      <Suspense fallback={null}>
        <MailboxModel />
        <Environment preset="sunset" blur={1} />
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDMailbox;
