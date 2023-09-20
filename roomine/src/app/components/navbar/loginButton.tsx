'use client'

import { GrLogin } from 'react-icons/gr'

const LoginButton = () => {
    return (
        <div
            onClick={() => {}}
            className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-none
                shadow-sm
                hover:bg-slate-600
                transition
                cursor-pointer
                bg-slate-800
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        text-gray-300
                        text-sm
                        font-semibold
                        px-6
                    "
                >
                    Entrar
                </div>
                <div
                    className="
                        text-sm
                        pl-6
                        pr-2
                        flex
                        flex-row
                        items-center
                        gap-3
                    "
                >
                    <div
                        className="
                            p-2
                            bg-gray-300
                            rounded-full
                            text-white
                        "
                    >
                        <GrLogin size={18}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginButton;

