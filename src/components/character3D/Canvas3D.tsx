import { Canvas } from "@react-three/fiber";
import Scene from "character3D/Scene";
import { SelfCharacter3DModel } from "character3D/SelfCharacter3DModel";
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
