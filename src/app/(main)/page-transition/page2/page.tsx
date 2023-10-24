"use client";

import React from "react";
import { Box, Title } from "@mantine/core";
import AnimatePageTransition from "@/components/animation/PageTransition/PageTransition";

const Page2 = () => {
    return (
        <Box
            bg="indigo"
            className="w-full h-full grid place-content-center page-header"
        >
            <Title c="dark" className="">
                Page 2
            </Title>
        </Box>
    );
};

export default Page2;
