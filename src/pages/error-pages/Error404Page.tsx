import SecondaryButton from "components/ui/buttons/SecondaryButton";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Error404Page() {
    const navigate = useNavigate();

    function navigateToHomePage() {
        navigate("/");
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5 flex flex-col justify-evenly items-center text-center">
            <div>
                <p className="font-medium uppercase tracking-widest text-xl opacity-50">Error code 404</p>

                <h1 className="mt-6 font-bold text-5xl lg:text-7xl line-height-1">
                    This page was removed, renamed or doesn't exist.
                </h1>
            </div>

            <p>Perhaps you can reload the page, or if it doesn't help, return to the main page</p>

            <SecondaryButton
                buttonText="Back to homepage"
                icon={<BsArrowLeft />}
                buttonType="button"
                onClickAction={navigateToHomePage}
            />
        </div>
    );
}
