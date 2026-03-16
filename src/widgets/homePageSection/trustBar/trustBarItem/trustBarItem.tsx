interface ITrustBarItem {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    subtitle: string;
}

const TrustBarItem = ({ Icon, title, subtitle }: ITrustBarItem) => {
    return (
        <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">
                {
                    <Icon
                        width="clamp(1.46rem, 2.3vw, 2.25rem)"
                        height="clamp(1.78rem, 2.7vw, 2.75rem)"
                    />
                }
            </span>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
        </div>
    );
};

export default TrustBarItem;