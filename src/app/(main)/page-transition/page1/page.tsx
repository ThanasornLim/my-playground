"use client";

import React from "react";
import { Text, Title, Box } from "@mantine/core";
import AnimatePageTransition from "@/components/animation/PageTransition/PageTransition";

const Page1 = () => {
    return (
        <Box
            bg="cyan"
            className="w-full h-full grid place-content-center page-header"
        >
            <Title c="dark" className="">
                Page 1
            </Title>
        </Box>
    );
};

export default Page1;
