import PaymentsIcon from "@/shared/ui/iconComponents/PaymentsIcon";
import SupportAgent from "@/shared/ui/iconComponents/SupportAgent";
import TruckIcon from "@/shared/ui/iconComponents/TruckIcon";
import VerifiedUser from "@/shared/ui/iconComponents/VerifiedUser";

const TrustBar = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 dark:border-border-dark">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                    <TruckIcon
                        width="clamp(1.46rem, 2.3vw, 2.25rem)"
                        height="clamp(1.78rem, 2.7vw, 2.75rem)"
                    />
                </span>
                <div>
                    <h4 className="font-bold">Free Shipping</h4>
                    <p className="text-xs text-gray-500">On orders over $99</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                    <VerifiedUser
                        width="clamp(1.46rem, 2.3vw, 2.25rem)"
                        height="clamp(1.78rem, 2.7vw, 2.75rem)"
                    />
                </span>
                <div>
                    <h4 className="font-bold">2-Year Warranty</h4>
                    <p className="text-xs text-gray-500">Guaranteed quality</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                    <SupportAgent
                        width="clamp(1.46rem, 2.3vw, 2.25rem)"
                        height="clamp(1.78rem, 2.7vw, 2.75rem)"
                    />
                </span>
                <div>
                    <h4 className="font-bold">24/7 Support</h4>
                    <p className="text-xs text-gray-500">
                        Live tech assistance
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                    <PaymentsIcon
                        width="clamp(1.46rem, 2.3vw, 2.25rem)"
                        height="clamp(1.78rem, 2.7vw, 2.75rem)"
                    />
                </span>
                <div>
                    <h4 className="font-bold">Secure Pay</h4>
                    <p className="text-xs text-gray-500">
                        Encrypted transactions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
