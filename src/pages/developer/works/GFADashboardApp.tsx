import CloseButton from "components/ui/CloseButton";
import developerPortfolio from "data/developer/developerPortfolio";
import EBDashboardAdmin from "images/works/GFA_dashboard_app/EB_dashboard_admin.png";
import EBDashboardUser from "images/works/GFA_dashboard_app/EB_dashboard_user.png";
import EBLogin1 from "images/works/GFA_dashboard_app/EB_Login_1.png";
import EBLogin2 from "images/works/GFA_dashboard_app/EB_Login_2.png";
import iPhoneDashboardGif from "images/works/GFA_dashboard_app/iPhone-mobile-version.gif";
import { useNavigate } from "react-router-dom";
import WorksSectionSummary from "ui/section/WorksSectionSummary";

export default function GFADashboardApp({ id }: { id: number }) {
    const portfolioItem = developerPortfolio[id];
    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5">
            <WorksSectionSummary
                title={portfolioItem.title}
                abstractParagraph="Web application for managing students and processes in Green Fox Academy. Providing interactive
                    dashboard on frontend, own backend API and relational database system."
                centerImage={iPhoneDashboardGif}
                teamNames="Jakub K., Michal Beňo, Anna O., Miroslav H., Vladimír M., Roman N."
                techStack={portfolioItem.techStack}
                projectYear={portfolioItem.projectYear}
                handleCloseButton={handleBackButton}
            />

            <div className="py-28 md:py-40">
                <p className="text-center bigger-thin">
                    In just 5 weeks we created a working application - and this was our first experience with
                    Javascript!
                </p>
            </div>

            <div className="px-6 flex flex-col md:flex-row gap-16 md:gap-8 justify-evenly">
                <div className="w-full md:w-[40%]">
                    <img src={EBLogin1} alt="Login page overview - Junior programmer courses..." />
                </div>
                <div className="md:pt-[30vh] w-full md:w-[40%]">
                    <img src={EBLogin2} alt="Login page form to sign in" />
                </div>
            </div>

            <div className="py-28 md:py-40 clickableLink bigger-underline-offset">
                <p className="text-center bigger-thin">And of course it's deployed. Try it out:</p>
                <a href="https://error-busters.eu/" target="_blank">
                    <p className="pt-4 md:pt-2 text-center font-medium text-[2rem] md:text-5xl leading-[2.75rem]">
                        www.error-busters.eu
                    </p>
                </a>
            </div>

            <div className="px-6 flex flex-col gap-12 md:gap-16 lg:gap-20 justify-evenly">
                <div className="w-full md:w-[80%] lg:w-[65%]">
                    <p className="pb-2 md:pb-4 lg:pb-6 md:text-xl">Admin Dashboard</p>
                    <img src={EBDashboardAdmin} alt="Login page overview - Junior programmer courses..." />
                </div>
                <div className="w-full md:w-[80%] lg:w-[65%] self-end">
                    <p className="pb-2 md:pb-4 lg:pb-6 md:text-xl">User Dashboard</p>
                    <img src={EBDashboardUser} alt="Login page form to sign in" />
                </div>
            </div>

            <div className="pt-20 pb-12 md:pt-24 md:pb-16 flex justify-center">
                <button className="w-8 md:w-12 hover:text-developerBlue" onClick={handleBackButton}>
                    <CloseButton />
                </button>
            </div>
        </div>
    );
}
