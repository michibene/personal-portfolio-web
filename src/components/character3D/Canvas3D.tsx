import { Canvas } from "@react-three/fiber";
import Scene from "character3D/Scene";

export default function Canvas3D() {
    return (
        <>
            <Canvas shadows>
                <ambientLight />
                <Scene />
            </Canvas>
        </>
    );
}
