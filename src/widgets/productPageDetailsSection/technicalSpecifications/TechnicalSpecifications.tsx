"use client";

import useLoaderProductId from "@/lib/useLoaderProductId";
import SettingsIcon from "@/shared/ui/iconComponents/SettingsIcon";
import TechnicalSpecificationsItem from "./TechnicalSpecificationsItem/TechnicalSpecificationsItem";

const TechnicalSpecifications = ({ id }: { id: string }) => {
    const { technicalSpecifications } = useLoaderProductId({ id: id || "" });

    return (
        <section className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                    <SettingsIcon
                        width="clamp(1.2rem, 1.6vw, 1.8rem)"
                        height="clamp(1.2rem, 1.6vw, 1.8rem)"
                    />
                </span>
                Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#203e4b] rounded-xl overflow-hidden border border-[#203e4b]">
                {Object.entries(technicalSpecifications || {}).map(
                    ([key, value], index) => (
                        <TechnicalSpecificationsItem
                            key={index}
                            title={key}
                            value={value}
                        />
                    ),
                )}
            </div>
        </section>
    );
};

export default TechnicalSpecifications;