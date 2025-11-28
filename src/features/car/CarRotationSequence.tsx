import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useWindowSizeHook, { Size } from "./useWindowSizeHook";
import carAnimationImagesSources from "./data/cachedCarImagesUrls";

gsap.registerPlugin(ScrollTrigger);

interface CarRotationSequenceProps {
  totalFrames: number;
  timeMultiplicand: number;
  images: HTMLImageElement[];
  currentFrame: number;
}

interface ImageSizeProps {
  width: number;
  height: number;
}

const DEFAULT_IMAGE_SIZE: ImageSizeProps = {
  width: 1920,
  height: 1080,
};

export default function CarRotationSequence() {
  const ref = useRef<HTMLCanvasElement>(null);
  const carRotationSequenceData = useRef<CarRotationSequenceProps>({
    totalFrames: 200,
    timeMultiplicand: 5,
    images: [],
    currentFrame: 0,
  });
  const windowSize: Size = useWindowSizeHook();
  const [imageSize, setImageSize] = useState<Size>({
    width: DEFAULT_IMAGE_SIZE.width,
    height: DEFAULT_IMAGE_SIZE.height,
  });

  const handleSetImagesSize = useCallback(() => {
    const viewportWidth = windowSize.width ?? window.innerWidth;
    const resizeMultiplicand = isMobile(viewportWidth) ? 0.5 : 0.3;
    const aspectRatio = DEFAULT_IMAGE_SIZE.width / DEFAULT_IMAGE_SIZE.height;
    const imageWidth = viewportWidth * resizeMultiplicand * aspectRatio;
    const imageHeight = viewportWidth * resizeMultiplicand;

    setImageSize({
      width: imageWidth < DEFAULT_IMAGE_SIZE.width ? imageWidth : DEFAULT_IMAGE_SIZE.width,
      height: imageHeight < DEFAULT_IMAGE_SIZE.height ? imageHeight : DEFAULT_IMAGE_SIZE.height,
    });
  }, [windowSize.width]);

  const generateImagesArray = useCallback(() => {
    if (carRotationSequenceData.current.images.length !== 0) {
      return;
    }

    for (let i = 1; i <= carRotationSequenceData.current.totalFrames; i++) {
      const img = new Image();
      img.src = carAnimationImagesSources[i - 1];
      carRotationSequenceData.current.images.push(img);
    }
  }, []);

  const render = useCallback(
    (currentFrame: number) => {
      const context = ref?.current?.getContext("2d");
      const img = carRotationSequenceData.current.images[currentFrame];
      if (!context || !img) {
        return;
      }

      if (
        typeof imageSize.width === "undefined" ||
        typeof imageSize.height === "undefined" ||
        imageSize.width === DEFAULT_IMAGE_SIZE.width ||
        imageSize.height === DEFAULT_IMAGE_SIZE.height
      ) {
        handleSetImagesSize();
      }

      context.clearRect(0, 0, imageSize.width!, imageSize.height!);
      context.drawImage(img, 0, 0, imageSize.width!, imageSize.height!);
    },
    [handleSetImagesSize, imageSize.height, imageSize.width],
  );

  useLayoutEffect(() => {
    handleSetImagesSize();
    generateImagesArray();

    if (carRotationSequenceData.current.images[0]) {
      carRotationSequenceData.current.images[0].onload = () => render(0);
    }

    const ctx = gsap.context(() => {
      gsap.to(carRotationSequenceData.current, {
        currentFrame: carRotationSequenceData.current.totalFrames,
        snap: "currentFrame",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 40%",
          end: `bottom+=${carRotationSequenceData.current.totalFrames * carRotationSequenceData.current.timeMultiplicand}`,
          scrub: 0.7,
          /* markers: { startColor: "orange", endColor: "cyan" }, */
        },
        onUpdate: () => render(carRotationSequenceData.current.currentFrame),
      });
    }, ref);
    return () => ctx.revert();
  }, [generateImagesArray, handleSetImagesSize, render, windowSize.width]);

  function isMobile(windowSizeWidth: number) {
    return windowSizeWidth < 768;
  }

  return (
    <div className="px-4 md:w-2/3 car-rotation-animation">
      <canvas ref={ref} width={imageSize.width} height={imageSize.height}></canvas>
    </div>
  );
}
