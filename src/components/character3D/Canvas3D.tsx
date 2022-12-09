import { Canvas } from "@react-three/fiber";
import Scene from "character3D/Scene";
import SelfCharacter3DModel from "character3D/SelfCharacter3DModel";

export default function Canvas3D() {
    return (
        <>
            <Canvas shadows>
                <ambientLight />
                <SelfCharacter3DModel />
                <Scene />
            </Canvas>
        </>
    );
}
