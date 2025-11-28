import { useEffect, useState } from "react";

export default function useImagePreloader(imageList: string[]) {
    const [isImagesPreloaded, setIsImagesPreloaded] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        async function preloadEffect() {
            if (isCancelled) {
                return;
            }

            const imagesPromiseList: Promise<any>[] = [];
            for (const imageUrl of imageList) {
                imagesPromiseList.push(preloadImage(imageUrl));
            }
            await Promise.all(imagesPromiseList);

            if (isCancelled) {
                return;
            }
            setIsImagesPreloaded(true);
        }

        preloadEffect();

        return () => {
            isCancelled = true;
        };
    }, [imageList]);

    return { isImagesPreloaded };
}

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
