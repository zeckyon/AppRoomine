'use client'

import Container from "../container";
import Logo from "./logo";
import LoginButton from "./loginButton";
import UserMenu from "./userMenu";

const Navbar = () => {
    return (
    <div className="fixed w-full bg-gray-300 z-10 shadow-sm">
        <div
        className="
        py-4
        border-b-[1px]
        "
        >
            <Container>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md-0
                    "
                >
                    <Logo />
                    <UserMenu />
                    <LoginButton />
                </div>
            </Container>
        </div>
    </div>
    )
}

export default Navbar;