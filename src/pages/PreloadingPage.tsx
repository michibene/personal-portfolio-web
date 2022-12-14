import SpinnerLoader from "components/ui/SpinnerLoader";

export default function PreloadingPage() {
    return (
        <div className="m-0 p-0 h-screen">
            <div className="loader-wrapper flex flex-col content-center	justify-center text-[#0f0f11]">
                <div className="mb-20 lg:mb-28 text-center uppercase">
                    <p className="font-bold text-4xl lg:text-5xl pb-2 lg:pb-5">Michal Beno</p>
                    <p className="font-bold text-4xl lg:text-5xl">Portfolio ©2022</p>
                </div>
                <SpinnerLoader />
            </div>
        </div>
    );
}
