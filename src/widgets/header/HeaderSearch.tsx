import SearchIcon from "@/shared/ui/iconComponents/SearchIcon";

const Search = () => {
    return (
        <div className="hidden md:flex flex-1 max-w-md relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                <SearchIcon />
            </span>
            <input
                className="w-full h-10 pl-10 pr-4 rounded-lg border-none bg-gray-100 dark:bg-card-dark text-sm focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500"
                placeholder="Search future tech..."
                type="text"
            />
        </div>
    );
};

export default Search;