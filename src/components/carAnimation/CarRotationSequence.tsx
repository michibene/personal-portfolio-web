import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CarRotationSequenceProps {
    totalFrames: number;
    timeMultiplicand: number;
    images: HTMLImageElement[];
    currentFrame: number;
    currentImage: (index: number) => string;
}

export default function CarRotationSequence() {
    const ref = useRef<HTMLCanvasElement>(null);

    const [divWidth, setDivWidth] = useState(858);
    const [divHeight, setDivHeight] = useState(480);

    const carRotationSequenceData: CarRotationSequenceProps = {
        totalFrames: 200,
        timeMultiplicand: 5,
        images: [],
        currentFrame: 0,
        currentImage: (index) => `./src/assets/images/BMW_Render_animation/${index.toString().padStart(4, "0")}.png`,
    };

    useLayoutEffect(() => {
        generateImagesArray();

        // Show first image on canvas before scrollTrigger action
        carRotationSequenceData.images[0].onload = () => render(0);

        const ctx = gsap.context(() => {
            gsap.to(carRotationSequenceData, {
                currentFrame: carRotationSequenceData.totalFrames,
                snap: "currentFrame",
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 40%",
                    end: `bottom+=${carRotationSequenceData.totalFrames * carRotationSequenceData.timeMultiplicand}`,
                    scrub: 0.9,
                    /* markers: { startColor: "orange", endColor: "cyan" }, */
                },
                onUpdate: () => render(carRotationSequenceData.currentFrame),
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    function generateImagesArray() {
        if (carRotationSequenceData.images.length === 0) {
            for (let i = 1; i <= carRotationSequenceData.totalFrames; i++) {
                const img = new Image();
                img.src = carRotationSequenceData.currentImage(i);
                carRotationSequenceData.images.push(img);
            }
        }
    }

    function render(currentFrame: number) {
        const context = ref?.current?.getContext("2d");
        const img = carRotationSequenceData.images[currentFrame];
        if (!context || !img) {
            return;
        }
        context.clearRect(0, 0, divWidth, divHeight);
        context.drawImage(img, 0, 0, divWidth, divHeight);
    }

    return (
        <div className="px-4 md:w-2/3 car-rotation-animation">
            <canvas ref={ref} width={divWidth} height={divHeight}></canvas>
        </div>
    );
}
