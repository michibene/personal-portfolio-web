import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function SelfCharacter3DModel() {
    const selfCharacter3dModel = new URL("./../../assets/models/Self-character-compressed.glb", import.meta.url).href;

    const gltf = useLoader(GLTFLoader, selfCharacter3dModel, (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("../node_modules/three/examples/js/libs/draco/gltf/");
        loader.setDRACOLoader(dracoLoader);
    });

    useEffect(() => {
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.material.color.set(0xd9d8d0);
                object.material.roughness = 0.8;
                object.castShadow = false;
                object.receiveShadow = true;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}
