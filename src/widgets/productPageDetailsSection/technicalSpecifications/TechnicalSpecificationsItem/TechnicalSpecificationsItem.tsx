const TechnicalSpecificationsItem = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="bg-background-dark p-6 flex justify-between items-center">
            <span className="text-[#8dbace]">{title}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
};

export default TechnicalSpecificationsItem;
