import hebeaMainPageImg from "images/works/HEBEA_queue/HEBEA-mainpage.png";
import hebeaVirtualQueueImg from "images/works/HEBEA_queue/HEBEA-online-cakaren.png";
import hebeaAdminDoctorDashboardImg from "images/works/HEBEA_queue/HEBEA-admin-lekar.png";
import WorksDetailSection from "ui/section/WorksDetailSection";

export default function HEBEAVirtualQueueApp() {
    return (
        <WorksDetailSection
            id={1}
            abstractParagraph="The hematology clinic's website as well as the virtual waiting room function. 
                Patients can see the actual wait time for a doctor or nurse.
                The doctor and nurse have their own dashboard for patient management. 
                Patients are automatically added to the waiting room based on their scheduled time."
            centerImage={hebeaMainPageImg}
            centerImageBackgroundColor="#41161b"
        >
            <div className="h-[80vh] md:h-[70vh] flex flex-col justify-center">
                <p className="text-center bigger-thin">
                    Patients can see the actual wait times - how long it takes to be seen by a doctor or nurse.
                </p>
            </div>

            <div className="px-6">
                <img
                    src={hebeaVirtualQueueImg}
                    alt="Virtual queue page overview - Wait times in doctor or nurse queue..."
                />
            </div>

            <div className="h-[80vh] md:h-[70vh] flex flex-col justify-center">
                <p className="text-center bigger-thin">
                    The doctor or nurse has their own dashboard as an overview of the current status or patient
                    management
                </p>
            </div>

            <div className="px-6 flex flex-col gap-12 md:gap-16 lg:gap-20 justify-evenly">
                <img
                    src={hebeaAdminDoctorDashboardImg}
                    alt="Virtual queue page overview - Wait times in doctor or nurse queue..."
                />
            </div>
        </WorksDetailSection>
    );
}
