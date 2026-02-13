import ArrowIcon from "@/shared/ui/iconComponents/ArrowIcon";

const HeroSection = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-20 py-8">
            <div className="relative overflow-hidden rounded-2xl aspect-[21/9] min-h-[450px] flex flex-col justify-center px-8 lg:px-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
                    <img
                        className="w-full h-full object-cover"
                        data-alt="Futuristic 3D rendered flagship laptop floating in dark space"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKBmv7Yd4KnNSpZ4mWx1Gt3id3bR_nNSuxP3ig6RVhP01Lab8Mje8eI0yACquSW4_HztiD6P3teonYT6V3hBnStasqtmVrAVrr3-dwCpzmFmDysRw5IDW8ecZICm9NkEdSWroR9nH2HmJQcP4K-zSf5TecPl3TL6luUlqaQujdDLhu4xw_HH9_afOOV8_t0Af0reW2hLEBJYMSAuQfWJhSrqLu7eXsch8casIp-4PXbfMvpHAmz8k4eZ5DEPRvsgqbObxm6A"
                    />
                </div>
                <div className="relative z-20 max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-primary/20">
                        New Arrival
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
                        The Future of <br />
                        <span className="text-primary">Performance</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-md">
                        Experience next-generation computing with our latest
                        3D-engineered flagship series. Power redefined.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-primary text-background-dark font-bold rounded-lg glow-blue hover:brightness-110 transition-all flex items-center gap-2">
                            Shop Now
                            <span className="material-symbols-outlined">
                                <ArrowIcon />
                            </span>
                        </button>
                        <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/10 hover:bg-white/20 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
