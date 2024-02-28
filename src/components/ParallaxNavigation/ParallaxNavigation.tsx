import React from "react";

export type ParallaxNavigationProps = {
    items: Array<{label: string; to: string}>;
};
const ParallaxNavigation: React.FC<ParallaxNavigationProps> = () => {
    return <div className="w-full text-red-500">PARALLAX</div>;
};
export default ParallaxNavigation;
