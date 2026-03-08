import StarIcon from "../iconComponents/StarIcon";

export interface IStar {
    width?: string;
    height?: string;
    className?: string;
}

const Star = ({ width, height, className }: IStar) => {
    return (
        <span className="material-symbols-outlined text-sm fill-1">
            <StarIcon
                {...{ width, height, className }}
            />
        </span>
    );
};

export default Star;
