"use client";

import { renderIcon } from "@/lib/renderIcon";
import AccountBalanceWalletIcon from "@/shared/ui/iconComponents/AccountBalanceWaletIcon";
import CreditCardIcon from "@/shared/ui/iconComponents/CreditCardIcon";
import PaymentsIcon from "@/shared/ui/iconComponents/PaymentsIcon";
import TrendingFlat from "@/shared/ui/iconComponents/TrendingFlat";
import VerifiedUser from "@/shared/ui/iconComponents/VerifiedUser";
import PaymentModal from "@/shared/ui/modalWindowUI/PaymentModal";
import { useSelector } from "@/store/rootReduser";
import { selectBasket, selectTotalPrice } from "@/store/slices/basketSlices";
import PromoCode from "@/widgets/promo-code/promoCode";
import { useState } from "react";

const iconArray = [AccountBalanceWalletIcon, CreditCardIcon, PaymentsIcon];

const Summary = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const allProducts = useSelector(selectBasket);
    const totalPrice = useSelector(selectTotalPrice);
    const taxAmount = Math.floor(totalPrice * 0.13);
    const finalPrice = totalPrice + taxAmount;
    return (
        <>
            <div className="lg:w-[380px] shrink-0">
                <div className="bg-white sticky dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 top-24 shadow-2xl shadow-black/20">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                    <div className="space-y-4 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="text-slate-900 dark:text-white">
                                ${totalPrice}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Estimated Shipping</span>
                            <span className="text-accent-green font-medium">
                                FREE
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax (Calculated at checkout)</span>
                            <span className="text-slate-900 dark:text-white">
                                ${taxAmount} (13%)
                            </span>
                        </div>
                    </div>

                    <PromoCode />

                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                                Grand Total
                            </p>
                            <p className="text-3xl font-bold tracking-tight">
                                ${finalPrice}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsPaymentModalOpen(true)}
                        className={`w-full bg-accent-green hover:bg-[#00e68d] text-[#0b0b0b] font-black py-4 rounded-xl text-lg uppercase tracking-tight flex items-center justify-center gap-2 transition-all active:scale-[0.98]
                            ${
                                !allProducts.length
                                    ? "pointer-events-none opacity-40"
                                    : ""
                            }`}
                    >
                        Proceed to Checkout
                        <span className="material-symbols-outlined font-bold">
                            <TrendingFlat />
                        </span>
                    </button>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {renderIcon({
                            icons: iconArray,
                            width: "clamp(0.975rem, 1.55vw, 1.8rem)",
                            height: "clamp(1.6rem, 1.9vw, 2.5rem)",
                        })}
                    </div>

                    <div className="mt-6 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">
                            <VerifiedUser />
                        </span>
                        <div>
                            <p className="text-sm font-bold">Secure Checkout</p>
                            <p className="text-xs text-slate-500 mt-1">
                                Your payment information is processed securely
                                with 256-bit encryption.
                            </p>
                        </div>
                    </div>
                </div>

                {isPaymentModalOpen && (
                    <PaymentModal
                        onClose={() => setIsPaymentModalOpen(false)}
                        items={allProducts}
                        subtotal={totalPrice}
                        tax={taxAmount}
                    />
                )}
            </div>
        </>
    );
};

export default Summary;
