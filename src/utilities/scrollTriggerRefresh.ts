import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export async function scrollTriggerRefreshAction() {
    setTimeout(function () {
        ScrollTrigger.refresh();
    }, 250);
}
