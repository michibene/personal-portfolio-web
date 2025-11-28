import { Canvas } from "@react-three/fiber";
import Scene from "features/3d/Scene";
import { SelfCharacter3DModel } from "features/3d/SelfCharacter3DModel";
import { useInView } from "react-intersection-observer";

export default function Canvas3D() {
    const { ref, inView } = useInView();

    return (
        <>
            <Canvas shadows ref={ref}>
                {inView && (
                    <>
                        <ambientLight />
                        <SelfCharacter3DModel />
                        <Scene />
                    </>
                )}
            </Canvas>
        </>
    );
}
