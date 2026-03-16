"use client";

import { useEffect, useState } from "react";
import CloseIcon from "../iconComponents/CloseIcon";
import { IProduct } from "@/entities/product/api/types";
import ModalWindowUI from "./modalWindowUI";

interface ICheckoutModal {
    onClose: () => void;
    items: Array<IProduct>;
    subtotal: number;
    tax: number;
}

const PaymentModal = ({ onClose, items, subtotal, tax }: ICheckoutModal) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        onClose();
    };

    const totalPrice = subtotal + tax;

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                className={`
                    relative bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2d]
                    text-white p-8 rounded-3xl shadow-xl w-[90%] max-w-2xl
                    border border-white/10
                    ${isClosing ? "animate-modalOut" : "animate-modalIn"}
                `}
            >
                {/* Close */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                    <CloseIcon />
                </button>

                <h2 className="text-3xl font-semibold mb-6 tracking-wide">
                    Checkout
                </h2>

                {/* Scrollable items */}
                <div className="max-h-64 overflow-y-auto pr-2 custom-scroll space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white/5 p-4 rounded-xl"
                        >
                            <div>
                                <p className="font-semibold">
                                    {item.name} (x{item.countInBasket})
                                </p>
                                {item.description && (
                                    <p className="text-sm opacity-70">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <p className="font-semibold">${item.price}</p>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="mt-6 space-y-2 text-base">
                    <div className="flex justify-between opacity-80">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                    </div>

                    <div className="flex justify-between opacity-80">
                        <span>Tax (13%)</span>
                        <span>${tax}</span>
                    </div>

                    <div className="flex justify-between text-lg font-semibold mt-4">
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>

                {/* Payment methods */}
                <div className="mt-6">
                    <p className="text-sm opacity-70 mb-2">Payment Method</p>
                    <div className="flex gap-3">
                        <div className="px-4 py-2 bg-white/10 rounded-xl text-sm">
                            💳 Card
                        </div>
                        <div className="px-4 py-2 bg-white/10 rounded-xl text-sm">
                            🅿 PayPal
                        </div>
                        <div className="px-4 py-2 bg-white/10 rounded-xl text-sm">
                            🍎 Apple Pay
                        </div>
                    </div>
                </div>

                {/* Pay button */}
                <button
                    className="
                        w-full mt-6 py-4 
                        bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500
                        rounded-full text-lg font-semibold
                        hover:opacity-90 transition-all
                    "
                    onClick={() => {
                        setIsSuccess(true);
                    }}
                >
                    Pay Now
                </button>

                {/* Secure checkout */}
                <p className="text-center text-sm opacity-60 mt-3">
                    🔒 Secure 256‑bit encrypted checkout
                </p>

                {/* Glow */}
                <div
                    className="
                        absolute -bottom-6 left-1/2 -translate-x-1/2 
                        w-40 h-10 bg-purple-500/30 blur-2xl rounded-full
                    "
                />
            </div>

            {isSuccess && (
                <ModalWindowUI
                    title="SUCCESS"
                    text="The order was successfully created!"
                    onClose={() => {
                        handleClose();
                        // setIsSuccess(false);
                    }}
                />
            )}
        </div>
    );
};

export default PaymentModal;
