import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { CameraHelper, SpotLight, SpotLightHelper } from "three";
import SelfCharacter3DModel from "character3D/SelfCharacter3DModel";
import * as dat from "dat.gui";

export default function Scene() {
    const lightRef = useRef<SpotLight>(null!);
    useHelper(lightRef, SpotLightHelper);
    const lightRef2 = useRef<SpotLight>(null!);
    useHelper(lightRef2, SpotLightHelper);
    const cameraRef = useRef(null!);
    useHelper(cameraRef, CameraHelper);

    const gui = new dat.GUI();

    useEffect(() => {
        gui.add(cameraRef.current["position"], "x").step(0.01);
        gui.add(cameraRef.current["position"], "y").step(0.01);
        gui.add(cameraRef.current["position"], "z").step(0.01);
    }, [cameraRef]);

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault={true} fov={50} position={[0.14, 1.57, 1.8]} />
            <OrbitControls target={[0, 0.95, 0]} maxPolarAngle={1.45} />

            <SelfCharacter3DModel />

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
        </>
    );
}
