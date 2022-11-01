import NavbarName from "navigation/NavbarName";
import NavbarMenu from "./NavbarMenu";

interface NavbarMobileProps {
    handleMenuOpen: () => void;
    isMenuOpen: boolean;
}

export default function NavbarMobile({ handleMenuOpen, isMenuOpen }: NavbarMobileProps) {
    // Toggle which icon to show (hamburger menu VS. close)
    function Icon() {
        if (!isMenuOpen) {
            return (
                <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                ></path>
            );
        }
        return (
            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
        );
    }

    return (
        <div className="h-20 flex justify-between items-center">
            <NavbarName />

            {!isMenuOpen && (
                <nav className="hidden md:inline-flex space-x-14">
                    <NavbarMenu />
                </nav>
            )}

            <button
                onClick={handleMenuOpen}
                type="button"
                className="inline-flex p-2 rounded-lg md:hidden hover:text-primary focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <Icon />
                </svg>
            </button>
        </div>
    );
}
