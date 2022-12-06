import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

export default function Scene() {
    const lightRef = useRef<SpotLight>(null!);
    useHelper(lightRef, SpotLightHelper);
    const lightRef2 = useRef<SpotLight>(null!);
    useHelper(lightRef2, SpotLightHelper);

    return (
        <>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

            <spotLight
                ref={lightRef}
                color={"#6f73d9"}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                ref={lightRef2}
                color={"#50b590"}
                intensity={1.5}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />

            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"white"} />
            </mesh>
        </>
    );
}
