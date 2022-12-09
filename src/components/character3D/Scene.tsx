import { OrbitControls, OrbitControlsProps, PerspectiveCamera, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { PointLight, PointLightHelper, SpotLight, SpotLightHelper } from "three";
import * as dat from "dat.gui";
import { useFrame } from "@react-three/fiber";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { angleToRadians } from "utilities/helpers";

export default function Scene() {
    const lightLeftRef = useRef<SpotLight>(null!);
    const lightRightRef = useRef<SpotLight>(null!);
    const lightFrontRef = useRef<PointLight>(null!);
    const cameraRef = useRef(null!);
    const orbitControlsRef = useRef<OrbitControlsImpl>(null!);

    /*  useHelper(lightLeftRef, SpotLightHelper);
    useHelper(lightRightRef, SpotLightHelper);
    useHelper(lightFrontRef, PointLightHelper);

    const gui = new dat.GUI();
    const leftLightFolder = gui.addFolder("LEFT light");
    const rightLightFolder = gui.addFolder("RIGHT light");
    const frontLightFolder = gui.addFolder("FRONT light"); */

    const lightLeftColor = { color: "#e5e5d4" };
    const lightRightColor = { color: "#60609d" };
    const orbitControlsDefault = {
        minAzimuthAngle: angleToRadians(-70),
        maxAzimuthAngle: angleToRadians(75),
        autoRotateSpeed: 2,
    };

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

    // Hook to get access to the current frame in three js
    useFrame(() => {
        if (!!orbitControlsRef.current) {
            // Change rotation to the opposite side on the orbit controls limits
            if (orbitControlsRef.current.getAzimuthalAngle() === orbitControlsDefault.minAzimuthAngle) {
                orbitControlsRef.current.autoRotateSpeed = -orbitControlsDefault.autoRotateSpeed;
            }
            if (orbitControlsRef.current.getAzimuthalAngle() === orbitControlsDefault.maxAzimuthAngle) {
                orbitControlsRef.current.autoRotateSpeed = orbitControlsDefault.autoRotateSpeed;
            }

            orbitControlsRef.current.update();
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault={true} fov={50} position={[0.14, 1.57, 1.8]} />
            <OrbitControls
                ref={orbitControlsRef}
                target={[0, 1, 0]}
                minDistance={1.3}
                maxDistance={5}
                minPolarAngle={angleToRadians(15)}
                maxPolarAngle={angleToRadians(100)}
                minAzimuthAngle={orbitControlsDefault.minAzimuthAngle}
                maxAzimuthAngle={orbitControlsDefault.maxAzimuthAngle}
                panSpeed={1.1}
                rotateSpeed={0.5}
                autoRotate
                autoRotateSpeed={orbitControlsDefault.autoRotateSpeed}
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
        </>
    );
}
