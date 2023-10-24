import React from "react";
import { Button as MantineButton } from "@mantine/core";
import type {
    ButtonProps,
    ElementProps,
    MantineThemeComponent,
} from "@mantine/core";

export const ButtonTheme: MantineThemeComponent = MantineButton.extend({
    defaultProps: {
        radius: "md",
        gradient: { from: "cyan", to: "blue" },
    },
    classNames: {
        label: "clip-text",
    },
});

interface MyButtonProps
    extends ButtonProps,
        ElementProps<"button", keyof ButtonProps> {}

const Button: React.FC<MyButtonProps> = ({ variant, children, ...props }) => {
    return (
        <MantineButton variant={variant || "filled"} {...props}>
            {children}
        </MantineButton>
    );
};

export default Button;
