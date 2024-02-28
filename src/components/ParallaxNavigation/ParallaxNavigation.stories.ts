import type {Meta, StoryObj} from "@storybook/react";
import ParallaxNavigation, {ParallaxNavigationProps} from "./ParallaxNavigation";

const meta: Meta<ParallaxNavigationProps> = {
    title: "components/ParallaxNavigation",
    component: ParallaxNavigation,
    parameters: {
        layout: "fullscreen"
    }
};

export default meta;

type Story = StoryObj<ParallaxNavigationProps>;
export const Default: Story = {
    args: {
        items: [
            {label: "Home", to: "#"},
            {label: "Store", to: "#"},
            {label: "Blog", to: "#"},
            {label: "Contact", to: "#"}
        ]
    }
};
