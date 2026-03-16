import PaymentsIcon from "@/shared/ui/iconComponents/PaymentsIcon";
import SupportAgent from "@/shared/ui/iconComponents/SupportAgent";
import TruckIcon from "@/shared/ui/iconComponents/TruckIcon";
import VerifiedUser from "@/shared/ui/iconComponents/VerifiedUser";
import TrustBarItem from "./trustBarItem/trustBarItem";

const TRUST_BAR_CONTENT = [
    {
        Icon: TruckIcon,
        title: "Free Shipping",
        subtitle: "On orders over $99",
    },
    {
        Icon: VerifiedUser,
        title: "2-Year Warranty",
        subtitle: "Guaranteed quality",
    },
    {
        Icon: SupportAgent,
        title: "24/7 Support",
        subtitle: "Live tech assistance",
    },
    {
        Icon: PaymentsIcon,
        title: "Secure Payments",
        subtitle: "Encrypted transactions",
    },
];

const TrustBar = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 dark:border-border-dark">
            {TRUST_BAR_CONTENT.map((item, index) => (
                <TrustBarItem
                    key={index}
                    Icon={item.Icon}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </div>
    );
};

export default TrustBar;
