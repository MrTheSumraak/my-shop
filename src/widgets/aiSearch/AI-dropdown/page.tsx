const AIDropdown = () => {
    return (
        <div className="absolute top-16 left-0 w-full bg-surface-dark border border-border-dark rounded-xl shadow-2xl p-5 z-40">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">
                    auto_awesome
                </span>
                AI Recommendations
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background-dark/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 cursor-pointer transition-all">
                    <div className="size-10 bg-surface-dark rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">
                            memory
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-bold">
                            Best for Ray Tracing
                        </p>
                        <p className="text-xs text-slate-400">
                            RTX 4090 series laptops
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background-dark/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 cursor-pointer transition-all">
                    <div className="size-10 bg-surface-dark rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">
                            palette
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-bold">
                            OLED Creator Specials
                        </p>
                        <p className="text-xs text-slate-400">
                            Color accurate displays
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIDropdown;