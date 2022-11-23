import SectionHeader from "ui/section/SectionHeader";

export default function Contact() {
    return (
        <section className="my-32 md:mt-4 8md:mb-32 flex flex-col">
            <SectionHeader id="contact" title="Contact me" />

            <div>
                <p className="mt-16 md:ml-[40vw] text-lg">
                    Here are some places where you can contact me or find more information about me. I'm looking forward
                    to further communication.
                </p>

                <ul className="clickableLink-2 mt-24 md:mt-32 space-y-8 md:space-y-14 md:ml-[25vw] text-2xl md:text-4xl font-semibold">
                    <li>
                        <a href="">hello@michalbeno.sk</a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
