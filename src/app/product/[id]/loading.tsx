const Loading = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 px-12 py-10">
            {/* Left: Gallery Skeleton */}
            <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="aspect-[4/3] skeleton"></div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="aspect-square skeleton"></div>
                    <div className="aspect-square skeleton"></div>
                    <div className="aspect-square skeleton"></div>
                    <div className="aspect-square skeleton"></div>
                </div>
            </div>

            {/* Right: Info Skeleton */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="h-4 w-24 skeleton"></div>
                <div className="h-10 w-3/4 skeleton"></div>

                <div className="flex gap-2">
                    <div className="h-6 w-20 skeleton"></div>
                    <div className="h-6 w-16 skeleton"></div>
                </div>

                <div className="h-20 w-full skeleton"></div>

                <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full skeleton"></div>
                    <div className="h-8 w-8 rounded-full skeleton"></div>
                    <div className="h-8 w-8 rounded-full skeleton"></div>
                </div>

                <div className="h-14 w-full skeleton"></div>
                <div className="h-12 w-full skeleton"></div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 skeleton"></div>
                    <div className="h-12 skeleton"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
