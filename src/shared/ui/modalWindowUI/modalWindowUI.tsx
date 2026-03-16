"use client";

import Link from "next/link";
import CloseIcon from "../iconComponents/CloseIcon";

interface IModalWindow {
    onClose: () => void;
    title: string;
    text: string;
}

const ModalWindowUI = ({ onClose, title, text }: IModalWindow) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="
                relative
                flex 
                flex-col 
                items-center 
                justify-center
                bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2d]
                text-white 
                p-8 
                rounded-3xl 
                shadow-[0_0_40px_rgba(0,0,0,0.6)]
                border border-white/10
                w-[90%] max-w-lg 
                animate-modalIn
            "
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="
                        absolute top-4 right-4 
                        p-2 rounded-full 
                        bg-white/5 
                        hover:bg-white/10 
                        transition-all 
                        backdrop-blur-sm
                    "
                >
                    <CloseIcon />
                </button>

                <h2 className="text-3xl font-semibold mb-4 tracking-wide">
                    {title}
                </h2>

                <p className="text-base opacity-80 leading-relaxed">{text}</p>

                <div className="w-full flex flex-row items-center justify-center gap-5">
                    <Link
                        href="/basket"
                        className="
                        inline-block 
                        mt-6 
                        px-6 py-3 
                        text-sm 
                        font-semibold 
                        text-white 
                        bg-gradient-to-br 
                        from-pink-500 
                        via-purple-500 
                        to-blue-500 
                        rounded-full
                    "
                    >
                        View Cart
                    </Link>
                    <Link
                        href="/"
                        className="
                        inline-block 
                        mt-6 
                        px-6 py-3 
                        text-sm 
                        font-semibold 
                        text-white 
                        bg-gradient-to-br 
                        from-pink-500 
                        via-purple-500 
                        to-blue-500 
                        rounded-full
                    "
                    >
                        Home
                    </Link>
                </div>

                {/* Bottom glow */}
                <div
                    className="
                    absolute -bottom-6 left-1/2 -translate-x-1/2 
                    w-40 h-10 
                    bg-purple-500/30 
                    blur-2xl 
                    rounded-full
                "
                />
            </div>
        </div>
    );
};

export default ModalWindowUI;
