"use client";

import { ButtonTheme } from "@/components/UI/Buttons/Button";
import {
    createTheme,
    Button,
    MantineThemeComponents,
    MantineThemeComponent,
} from "@mantine/core";

export const theme = createTheme({
    primaryColor: "primary",
    primaryShade: {
        dark: 4,
        light: 6,
    },
    components: {
        Button: ButtonTheme,
    },
    defaultRadius: "md",
    colors: {
        primary: [
            "#e5f4ff",
            "#cde2ff",
            "#9bc2ff",
            "#64a0ff",
            "#3984fe",
            "#1d72fe",
            "#0969ff",
            "#0058e4",
            "#004ecc",
            "#0043b5",
        ],
    },
});
