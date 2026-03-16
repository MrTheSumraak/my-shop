"use client";

export default function BackgroundVideo() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src="https://www.pexels.com/download/video/856938/"
                    type="video/mp4"
                />
            </video>

            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}
