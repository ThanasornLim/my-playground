"use client";

import { AppShell, Container, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

import { NestedWithAccordion } from "../../components/Layouts/Main/NestedWithAccordion";
import Navbar from "@/components/Layouts/Main/Navbar";
import { routes } from "@/constants/pages.constant";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 240,
                // width: collapse ? 60 : 240,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className="flex justify-between ">
                <Navbar opened={opened} toggle={toggle} />
            </AppShell.Header>

            <AppShell.Navbar className="space-y-2">
                <ScrollArea h={"100%"}>
                    <NestedWithAccordion routes={routes} />
                </ScrollArea>
                <AppShell.Section>
                    <Text className="text-center" c={"cyan"}>
                        Made by Mantine
                    </Text>
                </AppShell.Section>
            </AppShell.Navbar>

            {/* <AppShell.Aside p="md"> Right </AppShell.Aside> */}

            <AppShell.Main>
                <Container id="main-container" size={"xl"}>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
};

export default MainLayout;
