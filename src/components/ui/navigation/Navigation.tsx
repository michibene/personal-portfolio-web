import NavbarMenu from "navigation/parts/NavbarMenu";
import NavigationMobile from "navigation/NavigationMobile";
import { useState } from "react";
import { useScrollLock } from "navigation/UseScrollLock";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [blockScroll, allowScroll] = useScrollLock();

    function toggleMobileMenuShowing() {
        if (!isMobileMenuOpen) {
            blockScroll();
            setIsMobileMenuOpen(true);
        } else {
            allowScroll();
            setIsMobileMenuOpen(false);
        }
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
