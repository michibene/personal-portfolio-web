import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import useWindowSizeHook, { Size } from "./useWindowSizeHook";
import defaultCarAnimationImageSource from "images/BMW_Render_animation/0001.png";

gsap.registerPlugin(ScrollTrigger);

interface CarRotationSequenceProps {
    totalFrames: number;
    timeMultiplicand: number;
    images: HTMLImageElement[];
    currentFrame: number;
    currentImage: (index: number) => string;
}

interface ImageSizeProps {
    width: number;
    height: number;
}

export default function CarRotationSequence() {
    const ref = useRef<HTMLCanvasElement>(null);
    const carRotationSequenceData: CarRotationSequenceProps = {
        totalFrames: 200,
        timeMultiplicand: 5,
        images: [],
        currentFrame: 0,
        currentImage: (index) => getImageUrl(index),
    };
    const defaultCarImage = new Image();
    defaultCarImage.src = defaultCarAnimationImageSource;

    function getImageUrl(index: number) {
        return new URL(
            `/src/assets/images/BMW_Render_animation/${index.toString().padStart(4, "0")}.png`,
            import.meta.url
        ).href;
    }

    const windowSize: Size = useWindowSizeHook();
    const defaultImageSize: ImageSizeProps = {
        width: 1920,
        height: 1080,
    };
    const [imageSize, setImageSize] = useState<Size>({
        width: defaultImageSize.width,
        height: defaultImageSize.height,
    });

    useEffect(() => {
        handleSetImagesSize();
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
                    scrub: 0.7,
                    /* markers: { startColor: "orange", endColor: "cyan" }, */
                },
                onUpdate: () => render(carRotationSequenceData.currentFrame),
            });
        }, ref);
        return () => ctx.revert();
    }, [windowSize]);

    function generateImagesArray() {
        // Empty the images array
        carRotationSequenceData.images.length = 0;

        for (let i = 200; i <= carRotationSequenceData.totalFrames; i++) {
            const img = new Image();
            img.src = carRotationSequenceData.currentImage(i);
            carRotationSequenceData.images.push(img);
        }
    }

    function render(currentFrame: number) {
        const context = ref?.current?.getContext("2d");
        const img = handleLoadingImg(carRotationSequenceData.images[currentFrame]);

        // Test if loading of currentFrame image failed to set default image
        function handleLoadingImg(imgElement: HTMLImageElement) {
            const loadingImage = carRotationSequenceData.images[currentFrame];
            if (loadingImage) {
                return defaultCarImage;
            }
            return loadingImage;
        }

        if (!context || !img) {
            return;
        }

        if (
            typeof imageSize.width === "undefined" ||
            typeof imageSize.height === "undefined" ||
            imageSize.width === defaultImageSize.width ||
            imageSize.height === defaultImageSize.height
        ) {
            handleSetImagesSize();
        }

        context.clearRect(0, 0, imageSize.width!, imageSize.height!);
        context.drawImage(img, 0, 0, imageSize.width!, imageSize.height!);
    }

    function handleSetImagesSize() {
        if (typeof windowSize.width === "undefined" || typeof windowSize.height === "undefined") {
            windowSize.width = window.innerWidth;
            windowSize.height = window.innerHeight;
        }

        const resizeMultiplicand = isMobile(windowSize.width) ? 0.5 : 0.3;
        const aspectRatio = defaultImageSize.width / defaultImageSize.height;
        let imageWidth = windowSize.width * resizeMultiplicand * aspectRatio;
        let imageHeight = windowSize.width * resizeMultiplicand;

        setImageSize({
            width: imageWidth < defaultImageSize.width ? imageWidth : defaultImageSize.width,
            height: imageHeight < defaultImageSize.height ? imageHeight : defaultImageSize.height,
        });
    }

    function isMobile(windowSizeWidth: number) {
        return windowSizeWidth < 768;
    }

    return (
        <div className="px-4 md:w-2/3 car-rotation-animation">
            <canvas ref={ref} width={imageSize.width} height={imageSize.height}></canvas>
        </div>
    );
}
