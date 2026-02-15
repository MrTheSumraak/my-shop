import StarIcon from "../iconComponents/StarIcon";

export interface IStar {
    width?: string;
    height?: string;
}

const Star = ({ width, height }: IStar) => {
    return (
        <span className="material-symbols-outlined text-sm fill-1">
            <StarIcon
                {...{ width, height }}
            />
        </span>
    );
};

export default Star;
