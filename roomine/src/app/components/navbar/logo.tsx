'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter

    return (
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="75"
            width="75"
            src="/images/logoRoomine.png"
        />
    )
}

export default Logo;