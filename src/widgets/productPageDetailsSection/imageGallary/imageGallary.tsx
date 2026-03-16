"use client";

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    return (
        <div className="lg:col-span-6 grid grid-cols-2 grid-rows-2 gap-4">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`
                        glass-panel rounded-xl overflow-hidden aspect-[4/3] 
                        flex items-center justify-center p-8 group
                        ${index === 0 ? "col-span-2" : ""}
                    `}
                >
                    <div
                        className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url("${img}")` }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
