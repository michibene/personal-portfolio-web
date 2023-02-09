import { useRouteError } from "react-router-dom";

export default function UnknownErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5 flex flex-col justify-center items-center text-center">
            <div className="mt-20 grow flex flex-col justify-evenly items-center gap-20 lg:gap-10">
                <div>
                    <p className="font-medium uppercase tracking-widest text-xl opacity-50">Unknown error</p>

                    <h1 className="mt-6 lg:mt-14 font-bold text-5xl lg:text-7xl line-height-1">
                        Oops, something went wrong
                    </h1>
                </div>

                <p>Perhaps you can just reload the page</p>
            </div>

            <p className="my-14 text-xs opacity-50">
                If you are a developer, please e-mail me error shown in console at hello@michalbeno.eu. And you can also
                add a brief commentary on how this occurred.
            </p>
        </div>
    );
}
