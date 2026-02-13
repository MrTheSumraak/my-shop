interface ImageGalleryProps {
    images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    return (
        <div className="lg:col-span-7 flex flex-col gap-4">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="glass-panel rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 group"
                >
                    <div
                        className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        data-alt="Quantum X-1 Gaming Headset main view"
                        style={{
                            backgroundImage: `url("${images.length && img}")`,
                        }}
                    />
                </div>
            ))}

            {/* <div className="glass-panel rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 group">
                <div
                    className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    data-alt="Quantum X-1 Gaming Headset main view"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaSyF1Vkzg1PCG5AmHIj3vsK6ZTKScrVAhjkpCyCJv6Qf6BX0NTkmQt9lQrKOu-Z3FGU8paVVKtSN83hwv3oUseznVcbBOKq7inesW_80AirnYbU-djywCV8sM1h18hejkbW0kJrA3yh3s0U8fXzuljKapjufZrL2DmnRIclodwqMWIYXgXl0L6-RmNqqdC2vnQ_Uh9_mLYZxg1ZifIfAtI9g68YPANrWOKc-nYkcXjVylx9nensvel4Pc9hA-lljjKD8Gsc0")',
                    }}
                />
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div
                    className="glass-panel border-primary rounded-lg aspect-square p-2 cursor-pointer border-2"
                    data-alt="Side view of headset"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtdXjUwkARydDondW0KARP-bETPpLThOdLZIYpdy7-SJUU5nZ8YX66kDi0snExhrigI2Cs40aqxm2k_Z-x-EaCsIrwfs1fm04UdKaFN2JrwiFHOZ_qtYFwDyL38A04QDjSrKShSw-SKtxkgnD_icSBA5YtLDTSxL8ZukBfff4aSCQagOJBlA7X84gvvZnDcloRX1ucYjIFhjAZ6X8iWp9s84tl03gngXIbb--YxJs7zPWzr8LKKaQu_7VYt4j76mU0hO2I0O4")',
                        backgroundSize: "cover",
                    }}
                />
                <div
                    className="glass-panel rounded-lg aspect-square p-2 cursor-pointer hover:border-primary/50 transition-colors"
                    data-alt="Ear cushion detail"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-xlL8ZY2BZLRajSyJjywopJxhXdYc9oovhAndsADzommaM_O69KJ5qMwUc1peOypPw5I1lshlosuh7t8MlOzd0-gvVB73KmC7Z_MB8HzfKm0Jx5MYTAg8Rvs6RH9OxOgs2mnReE9MU-bIwTgaPNfErKX4sHL2_D8VF1XRxo4rqQXLZzpvPzkC0WWrveybUgfdpompeUPOL8r0QPobYTEwQlUo2_xiEtp0lHXysHygtI07Rv8RNbO6UdaRwA_7i5FYwIaLKK0")',
                        backgroundSize: "cover",
                    }}
                />
                <div
                    className="glass-panel rounded-lg aspect-square p-2 cursor-pointer hover:border-primary/50 transition-colors"
                    data-alt="Microphone view"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATqNkKKsivjIUGRdrMNTWGAUvtXDxOOp_0kZ6jRdd9sbE4F-ROWwSafCgX8O4dEUHlkItR29p31gjnxQ9Fn_FCgw27ULn2Cz9wniZQRnNx6tX4UfFFxeuVJDLh1B92nVmjKfGKjXgwKVQcimNdo9J97tq9jRUf_ygM0x2LHi4AxFgZ_TkqL-c1iC4kZdEBKXQWxk62RnzrfuoABCkv-Au1d-wKfPVuQ-P3mTH181Fp9YguNmHjgvSFK_TzNMZnI45XCkgXnNM")',
                        backgroundSize: "cover",
                    }}
                />
                <div
                    className="glass-panel rounded-lg aspect-square p-2 cursor-pointer hover:border-primary/50 transition-colors"
                    data-alt="Packaging view"
                    style={{
                        backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdDTlxMDlEDwVcd13uM6zZoODrQnxQGjW6eJDFChypzypZSmGy-okUCxgSJ8y1pww4OJ4ZMupwsOvKAQ0woIqSz_DTED-osw9TCGzhmeV_t5KKW93SDHFETu4QiOe3hZcvxeIgdruyeijvWoUyCwMb1UvBlDYZ3HgsGaGQovfYPFlMG9o9s39tTeYI8Hqea76LsEyiYvaqAwYdo5xsKgswaEiw8U7_5cpi-3YlCK7pznWkX3lX8pzQHmJmAiyxmyiLVnvD3Bg")',
                        backgroundSize: "cover",
                    }}
                />
            </div> */}
        </div>
    );
};

export default ImageGallery;
