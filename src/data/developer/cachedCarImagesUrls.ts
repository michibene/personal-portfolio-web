const carAnimationImagesSources: string[] = [];

function populateCarImagesArray() {
    // Get full, resolved URL of a static image asset (to properly build path)
    function getImageUrl(index: number) {
        return new URL(
            `/src/assets/images/BMW_Render_animation/${index.toString().padStart(4, "0")}.png`,
            import.meta.url
        ).href;
    }

    if (carAnimationImagesSources.length !== 0) {
        return;
    }

    for (let i = 1; i <= 200; i++) {
        carAnimationImagesSources.push(getImageUrl(i));
    }
}
populateCarImagesArray();

export default carAnimationImagesSources;
