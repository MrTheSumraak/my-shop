import { getInitials } from "@/lib/getInitials";
import Star from "@/shared/ui/star/star";

export interface IUserReviewsItem {
    title: string;
    text: string;
    name: string;
    isverified: boolean;
    date: string;
}

const UserReviewsItem = ({
    title,
    text,
    name,
    isverified = false,
    date,
}: IUserReviewsItem) => {
    const initials = getInitials(name);
    return (
        <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center gap-1 text-primary mb-3">
                <Star
                    width="clamp(0.78rem, 0.9vw, 1.2rem)"
                    height="clamp(0.7rem, 0.89vw, 1.063rem)"
                />
                <Star
                    width="clamp(0.78rem, 0.9vw, 1.2rem)"
                    height="clamp(0.7rem, 0.89vw, 1.063rem)"
                />
                <Star
                    width="clamp(0.78rem, 0.9vw, 1.2rem)"
                    height="clamp(0.7rem, 0.89vw, 1.063rem)"
                />
                <Star
                    width="clamp(0.78rem, 0.9vw, 1.2rem)"
                    height="clamp(0.7rem, 0.89vw, 1.063rem)"
                />
                <Star
                    width="clamp(0.78rem, 0.9vw, 1.2rem)"
                    height="clamp(0.7rem, 0.89vw, 1.063rem)"
                />
            </div>

            <p className="font-bold mb-2"> {title} </p>

            <p className="text-[#8dbace] text-sm leading-relaxed mb-4">
                {text}
            </p>

            <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                    {initials}
                </div>
                <div>
                    <p className="text-xs font-bold">{name}</p>
                    <p className="text-[10px] text-[#8dbace]">
                        {isverified
                            ? "Verified Buyer"
                            : "the user has not been verified"}
                        • {date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserReviewsItem;
