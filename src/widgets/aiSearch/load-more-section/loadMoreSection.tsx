import KeyBoardDoubleArrowDown from "@/shared/ui/iconComponents/KeyboardDoubleArrowDown";

interface ILoadMore {
    shown: number;
    total: number;
    progress: number;
    onLoadMore: () => void;
}

const LoadMoreSection = ({ shown, total, progress, onLoadMore }: ILoadMore) => {
    return (
        <div className="mt-16 flex flex-col items-center gap-4">
            {total !== 0 && (
                <p className="text-sm text-slate-500">
                    Showing {shown} of {total} results
                </p>
            )}

            {total !== 0 && (
                <div className="w-64 h-1 bg-surface-dark rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}

            {shown < total && (
                <button
                    onClick={onLoadMore}
                    className="mt-4 px-8 py-3 border border-border-dark hover:border-primary text-sm font-bold rounded-lg transition-all flex items-center gap-2"
                >
                    Load More Products
                    <span className="material-symbols-outlined text-sm">
                        <KeyBoardDoubleArrowDown />
                    </span>
                </button>
            )}
        </div>
    );
};

export default LoadMoreSection;
