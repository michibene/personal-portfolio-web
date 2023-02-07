import ebDashboardAdminImg from "images/works/GFA_dashboard_app/EB_dashboard_admin.png";
import ebDashboardUserImg from "images/works/GFA_dashboard_app/EB_dashboard_user.png";
import ebLoginImg1 from "images/works/GFA_dashboard_app/EB_login_1.png";
import ebLoginImg2 from "images/works/GFA_dashboard_app/EB_login_2.png";
import iPhoneDashboardGif from "images/works/GFA_dashboard_app/iPhone-mobile-version.gif";
import WorksDetailSection from "ui/section/WorksDetailSection";

export default function GFADashboardApp() {
    return (
        <WorksDetailSection
            id={2}
            abstractParagraph="Web application for managing students and processes in Green Fox Academy. Providing interactive
                    dashboard on frontend, own backend API and relational database system."
            centerImage={iPhoneDashboardGif}
            centerImageBackgroundColor="#16241F"
            teamNames="Jakub K., Michal Beňo, Anna O., Miroslav H., Vladimír M., Roman N."
        >
            <div className="h-[80vh] md:h-[70vh] flex flex-col justify-center mb-10">
                <p className="text-center bigger-thin">
                    In just 5 weeks we created a working application - and this was our first experience with
                    Javascript!
                </p>
            </div>

            <div className="px-6 flex flex-col md:flex-row gap-16 md:gap-8 justify-evenly">
                <div className="w-full md:w-[40%]">
                    <img src={ebLoginImg1} alt="Login page overview - Junior programmer courses..." />
                </div>
                <div className="md:pt-[30vh] w-full md:w-[40%]">
                    <img src={ebLoginImg2} alt="Login page form to sign in" />
                </div>
            </div>

            <div className="h-[80vh] md:h-[70vh] flex flex-col justify-center mb-4 clickableLink bigger-underline-offset">
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
                    <img src={ebDashboardAdminImg} alt="Login page overview - Junior programmer courses..." />
                </div>
                <div className="w-full md:w-[80%] lg:w-[65%] self-end">
                    <p className="pb-2 md:pb-4 lg:pb-6 md:text-xl">User Dashboard</p>
                    <img src={ebDashboardUserImg} alt="Login page form to sign in" />
                </div>
            </div>
        </WorksDetailSection>
    );
}
