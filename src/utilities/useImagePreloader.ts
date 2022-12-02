import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            resolve(img);
        };
        img.onerror = img.onabort = function () {
            reject(src);
        };
        img.src = src;
    });
}

export default function useImagePreloader(imageList: string[]) {
    const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        async function preloadEffect() {
            if (isCancelled) {
                return;
            }

            const imagesPromiseList: Promise<any>[] = [];
            for (const i of imageList) {
                imagesPromiseList.push(preloadImage(i));
            }
            await Promise.all(imagesPromiseList);

            if (isCancelled) {
                return;
            }
            setImagesPreloaded(true);
            // Refresh position of car animation start point after preloading images of portfolio works
            setTimeout(function () {
                ScrollTrigger.refresh();
            }, 250);
        }

        preloadEffect();

        return () => {
            isCancelled = true;
        };
    }, [imageList]);

    return { imagesPreloaded };
}
