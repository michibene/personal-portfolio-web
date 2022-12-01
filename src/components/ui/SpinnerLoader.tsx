interface SpinnerProps {
    children: JSX.Element | JSX.Element[];
}

export default function SpinnerLoader({ children }: SpinnerProps) {
    return (
        <div className="m-0 p-0 h-screen">
            <div className="loader-wrapper flex flex-col content-center	justify-center text-[#0f0f11]">
                {children}
                <svg className="spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" cx="50" cy="50" r="45" />
                </svg>
            </div>
        </div>
    );
}
