import { LapTopIcon } from "../iconComponents/LapTopIcon";
import { ICategorisItem } from "./types";

const CategorisItem = ({ img }: ICategorisItem) => {
    return (
        <li className="bg-[var(--card)] w-1/5 flex flex-col items-center gap-[clamp(0.4rem,0.6vw,0.5rem)]">
            {img}
            <span className="text-[clamp(0.4rem,1.5vw,1.25rem)]">Ноутбуки</span>
        </li>
    );
};

export default CategorisItem;
