import BasketProductList from "./productList/basketProductList";

const BasketPage = () => {
    return (
        <>
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <a className="hover:text-primary transition-colors" href="#">
                    Home
                </a>
                <span className="material-symbols-outlined text-xs">
                    chevron_right
                </span>
                <span className="text-slate-900 dark:text-white font-medium">
                    Shopping Cart
                </span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column: Product List */}
                <BasketProductList />

                {/* Right Column: Summary */}
                <div className="lg:w-[380px] shrink-0">
                    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24 shadow-2xl shadow-black/20">
                        <h2 className="text-xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-slate-900 dark:text-white">
                                    $457.99
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
                                    $36.64
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm font-medium mb-2 uppercase tracking-wide opacity-60">
                                Promo Code
                            </p>

                            <div className="flex gap-2">
                                <input
                                    className="flex-grow bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                    placeholder="CODE20"
                                    type="text"
                                />

                                <button className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg text-sm font-bold transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                                    Grand Total
                                </p>
                                <p className="text-3xl font-bold tracking-tight">
                                    $494.63
                                </p>
                            </div>
                        </div>

                        <button className="w-full bg-accent-green hover:bg-[#00e68d] text-[#0b0b0b] font-black py-4 rounded-xl text-lg uppercase tracking-tight flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                            Proceed to Checkout
                            <span className="material-symbols-outlined font-bold">
                                trending_flat
                            </span>
                        </button>

                        <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
                            <span className="material-symbols-outlined text-2xl">
                                credit_card
                            </span>
                            <span className="material-symbols-outlined text-2xl">
                                payments
                            </span>
                            <span className="material-symbols-outlined text-2xl">
                                account_balance_wallet
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary">
                            verified_user
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
            </div>

            <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 opacity-50">
                        <div className="text-white">
                            <svg
                                fill="none"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest">
                            TechStore Electronics
                        </span>
                    </div>

                    <div className="flex gap-8 text-sm text-slate-500">
                        <a
                            className="hover:text-primary transition-colors"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="hover:text-primary transition-colors"
                            href="#"
                        >
                            Terms of Service
                        </a>
                        <a
                            className="hover:text-primary transition-colors"
                            href="#"
                        >
                            Shipping Guide
                        </a>
                    </div>

                    <p className="text-xs text-slate-500">
                        © 2024 TechStore. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default BasketPage;
