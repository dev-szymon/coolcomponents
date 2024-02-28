import React, {useState} from "react";
import backgroundImage from "./splash.jpg";
import clsx from "clsx";

export type ParallaxNavigationProps = {
    className?: string;
    items: Array<{label: string; to: string}>;
};
const ParallaxNavigation: React.FC<ParallaxNavigationProps> = ({items, className}) => {
    const [hoverIndex, setHoverIndex] = useState<number>(0);

    return (
        <div
            className={clsx(
                "parallax-navigation px-16 flex items-center h-full w-full relative overflow-hidden after:inset-0 after:z-10 after:w-full after:h-full after:absolute after:content-[''] after:bg-[rgba(0,0,0,0.3)",
                className
            )}
        >
            <nav className="flex flex-col z-20" onMouseLeave={() => setHoverIndex(0)}>
                <img
                    src={backgroundImage}
                    alt=""
                    className="absolute inset-0 scale-110 pointer-events-none"
                    style={{
                        transform: `scale(${hoverIndex > 0 ? "1.2" : "1.3"}) translateY(${hoverIndex * 2}%)`,
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                />
                {items.map(({to, label}, index) => {
                    return (
                        <a
                            key={label}
                            href={to}
                            onMouseOver={() => setHoverIndex(index + 1)}
                            className="uppercase px-1 py-2 text-lg text-white hover:scale-105 opacity-70 font-semibold hover:opacity-100 transition"
                        >
                            {label}
                        </a>
                    );
                })}
            </nav>
        </div>
    );
};
export default ParallaxNavigation;
