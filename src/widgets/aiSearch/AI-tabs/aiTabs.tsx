const AiTabs = () => {
    return (
        <div className="flex gap-8 mb-8 border-b border-border-dark/50">
            <button className="pb-4 border-b-2 border-primary text-sm font-bold tracking-tight">
                All Results
            </button>
            <button className="pb-4 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-white transition-colors">
                Top Rated
            </button>
            <button className="pb-4 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-white transition-colors">
                Compare Tool
            </button>
        </div>
    );
};

export default AiTabs;