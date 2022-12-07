import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { PointLight, PointLightHelper, SpotLight, SpotLightHelper } from "three";
import SelfCharacter3DModel from "character3D/SelfCharacter3DModel";
import * as dat from "dat.gui";

export default function Scene() {
    const lightLeftRef = useRef<SpotLight>(null!);
    const lightRightRef = useRef<SpotLight>(null!);
    const lightFrontRef = useRef<PointLight>(null!);
    const cameraRef = useRef(null!);

   /*  useHelper(lightLeftRef, SpotLightHelper);
    useHelper(lightRightRef, SpotLightHelper);
    useHelper(lightFrontRef, PointLightHelper);

    const gui = new dat.GUI();
    const leftLightFolder = gui.addFolder("LEFT light");
    const rightLightFolder = gui.addFolder("RIGHT light");
    const frontLightFolder = gui.addFolder("FRONT light"); */

    const lightLeftColor = { color: "#e5e5d4" };
    const lightRightColor = { color: "#60609d" };

    /* useEffect(() => {
        gui.add(cameraRef.current["position"], "x").name("camera x").step(0.01);
        gui.add(cameraRef.current["position"], "y").name("camera y").step(0.01);
        gui.add(cameraRef.current["position"], "z").name("camera z").step(0.01);

        leftLightFolder.add(lightLeftRef.current, "intensity").min(0).step(0.01);
        leftLightFolder.add(lightLeftRef.current["position"], "x").name("position x").step(0.1);
        leftLightFolder.add(lightLeftRef.current["position"], "y").name("position y").step(0.1);
        leftLightFolder.add(lightLeftRef.current["position"], "z").name("position z").step(0.1);
        leftLightFolder.addColor(lightLeftColor, "color").onChange(function () {
            lightLeftRef.current.color.set(lightLeftColor.color);
        });
        leftLightFolder.open();

        rightLightFolder.add(lightRightRef.current, "intensity").min(0).step(0.01);
        rightLightFolder.add(lightRightRef.current["position"], "x").name("position x").step(0.1);
        rightLightFolder.add(lightRightRef.current["position"], "y").name("position y").step(0.1);
        rightLightFolder.add(lightRightRef.current["position"], "z").name("position z").step(0.1);
        rightLightFolder.addColor(lightRightColor, "color").onChange(function () {
            lightRightRef.current.color.set(lightRightColor.color);
        });
        rightLightFolder.open();

        frontLightFolder.add(lightFrontRef.current, "intensity").min(0).step(0.01);
        frontLightFolder.add(lightFrontRef.current["position"], "x").name("position x").step(0.1);
        frontLightFolder.add(lightFrontRef.current["position"], "y").name("position y").step(0.1);
        frontLightFolder.add(lightFrontRef.current["position"], "z").name("position z").step(0.1);
        frontLightFolder.open();
    }, []); */

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault={true} fov={50} position={[0.14, 1.57, 1.8]} />
            <OrbitControls
                target={[0, 0.95, 0]}
                minDistance={0.9}
                maxDistance={5}
                minPolarAngle={(15 * Math.PI) / 180}
                maxPolarAngle={(100 * Math.PI) / 180}
                minAzimuthAngle={(-70 * Math.PI) / 180}
                maxAzimuthAngle={(70 * Math.PI) / 180}
                panSpeed={1.5}
            />

            <spotLight
                ref={lightLeftRef}
                color={lightLeftColor.color}
                intensity={2.5}
                position={[-7.5, 9.8, 7.8]}
                angle={0.6}
                penumbra={0.5}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                ref={lightRightRef}
                color={lightRightColor.color}
                intensity={2.5}
                position={[5, 5, 1]}
                angle={0.6}
                penumbra={0.5}
                castShadow
                shadow-bias={-0.0001}
            />
            <pointLight
                ref={lightFrontRef}
                intensity={0.55}
                position={[0.9, 1.5, 5]}
                castShadow
                shadow-bias={-0.0001}
            />
            <SelfCharacter3DModel />
        </>
    );
}
