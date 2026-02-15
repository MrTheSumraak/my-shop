import SettingsIcon from "@/shared/ui/iconComponents/SettingsIcon";

const TechnicalSpecifications = () => {
    return (
        <section className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                    <SettingsIcon width='clamp(1.2rem, 1.6vw, 1.8rem)' height='clamp(1.2rem, 1.6vw, 1.8rem)'/>
                </span>
                Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#203e4b] rounded-xl overflow-hidden border border-[#203e4b]">
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Driver Diameter</span>
                    <span className="font-medium">50mm Neodymium</span>
                </div>
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Frequency Response</span>
                    <span className="font-medium">10Hz - 40kHz</span>
                </div>
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Battery Life</span>
                    <span className="font-medium">Up to 30 Hours</span>
                </div>
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Connectivity</span>
                    <span className="font-medium">
                        2.4GHz Wireless / Bluetooth 5.2
                    </span>
                </div>
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Weight</span>
                    <span className="font-medium">320g</span>
                </div>
                <div className="bg-background-dark p-6 flex justify-between items-center">
                    <span className="text-[#8dbace]">Mic Type</span>
                    <span className="font-medium">
                        Detachable Noise-Cancelling
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecifications;