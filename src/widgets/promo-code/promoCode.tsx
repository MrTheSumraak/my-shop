const PromoCode = () => {
    return (
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
    );
};

export default PromoCode;
