import { useState } from "react";
import NavbarMobile from "ui/navigation/NavbarMobile";
import NavbarName from "ui/navigation/NavbarName";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenuShowing = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <NavbarMobile isMenuOpen={isMobileMenuOpen} handleMenuOpen={toggleMobileMenuShowing} />

            {isMobileMenuOpen && (
                <div className="mobileMenu flex flex-col justify-between">
                    <NavbarMobile isMenuOpen={isMobileMenuOpen} handleMenuOpen={toggleMobileMenuShowing} />

                    <nav className="text-5xl uppercase space-y-12 ">
                        <a href="#about" className="block">
                            About
                        </a>
                        <a href="#works" className="block">
                            Works
                        </a>
                        <a href="#contact" className="block">
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
