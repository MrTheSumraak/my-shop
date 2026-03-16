import { JSX } from "react";

interface IRenderIcon {
    icons: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element)[];
    width?: string;
    height?: string;
}

export const renderIcon = ({
    icons,
    width,
    height,
}: IRenderIcon): JSX.Element[] => {
    return icons.map((IconComponent, index) => (
        <IconComponent key={index} width={width} height={height} />
    ));
};
