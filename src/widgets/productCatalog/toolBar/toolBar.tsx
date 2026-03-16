const ToolBar = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-xs text-slate-400">Sort by:</span>
                <select className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0 pr-6 text-white cursor-pointer uppercase tracking-tight">
                    <option>Highest Price</option>
                    <option>Lowest Price</option>
                    <option>Popularity</option>
                    <option>Newest</option>
                </select>
            </div>

            <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                <button className="p-2 bg-white/10 text-primary">
                    <span className="material-symbols-outlined text-sm">
                        grid_view
                    </span>
                </button>
                <button className="p-2 hover:bg-white/5">
                    <span className="material-symbols-outlined text-sm">
                        view_list
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ToolBar;