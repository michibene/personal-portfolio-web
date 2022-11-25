import NavbarMenu from "navigation/parts/NavbarMenu";
import NavigationMobile from "navigation/NavigationMobile";
import { useState } from "react";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenuShowing() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header>
            <NavigationMobile isMenuOpen={isMobileMenuOpen} handleMenuOpen={toggleMobileMenuShowing} />

            {isMobileMenuOpen && (
                <div className="mobileMenu flex flex-col justify-between">
                    <NavigationMobile isMenuOpen={isMobileMenuOpen} handleMenuOpen={toggleMobileMenuShowing} />
                    <nav className="clickableLink bigger-underline-offset text-5xl uppercase space-y-12">
                        <NavbarMenu />
                    </nav>
                </div>
            )}
        </header>
    );
}
