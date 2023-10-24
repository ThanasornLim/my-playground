import React from "react";
import {
    Paper as ManTinePaper,
    PaperBaseProps as ManTinePaperBaseProps,
    PaperProps as MantinePaperProps,
    createPolymorphicComponent,
} from "@mantine/core";

interface PaperProps extends ManTinePaperBaseProps, MantinePaperProps {
    children?: React.ReactNode;
    //     className?: string;
}

const BasePaper: React.FC<PaperProps> = ({
    radius,
    withBorder,
    shadow,
    className,
    children,
    ...props
}) => {
    return (
        <ManTinePaper
            className={className || ""}
            shadow={shadow || "md"}
            {...props}
        >
            {children}
        </ManTinePaper>
    );
};

const Paper = createPolymorphicComponent<"div", PaperProps>(BasePaper);

export default Paper;
