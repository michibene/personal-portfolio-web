import FlyFromRight from "animation/FlyFromXAxis";
import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

export default function Contact() {
    return (
        <SectionFullHeight>
            <SectionHeader id="contact-me" title="Contact me" />

            <div className="h-[60vh] md:h-[65vh] flex flex-col justify-around">
                <FlyFromRight fromX={-200} className="md:mt-16 md:ml-[40vw]">
                    <p>
                        Here are some places where you can contact me or find more information about me. I'm looking
                        forward to further communication.
                    </p>
                </FlyFromRight>

                <FlyFromRight fromX={-100} className="md:my-32 md:ml-[25vw]">
                    <ul className="clickableLink bigger-underline-offset space-y-8 md:space-y-14 text-3xl md:text-4xl font-semibold">
                        <li>
                            <a href="mailto: hello@michalbeno.eu?subject = Hello from Website">hello@michalbeno.eu</a>
                        </li>
                        <li>
                            <a href="https://github.com/michibene" target="_blank" rel="noopener">
                                Github &#8599;
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/michal-benoo/" target="_blank" rel="noopener">
                                LinkedIn &#8599;
                            </a>
                        </li>
                    </ul>
                </FlyFromRight>
            </div>
        </SectionFullHeight>
    );
}
