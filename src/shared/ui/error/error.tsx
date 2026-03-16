const ErrorComponent = ({ error }: { error: Error }) => {
    return (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-between">
            <div>
                <p className="font-semibold">Не удалось загрузить данные</p>
                <p className="text-sm opacity-80">
                    {error && error.message && error.message}
                </p>
            </div>
            <button
                onClick={() => window.location.reload()}
                className="px-3 py-1 rounded-md bg-red-500/20 hover:bg-red-500/30 transition text-red-300 text-sm"
            >
                Повторить
            </button>
        </div>
    );
};

export default ErrorComponent;