"use client";
import { Tabs } from "@mantine/core";
import React, { ElementType } from "react";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { TablerIconsProps } from "@tabler/icons-react";

import Link from "next/link";
import AppNavLink from "@/components/UI/NavLink/NavLink";

export type SubRoutes = {
    title: string;
    url: string;
    icon?: React.FC<TablerIconsProps>;
};

export type Routes = {
    title: string;
    url: string;
    icon?: React.FC<TablerIconsProps>;
    subRoutes: SubRoutes[];
};

interface NestedWithAccordionProps {
    routes: Routes[];
}
export const NestedWithAccordion: React.FC<NestedWithAccordionProps> = ({
    routes,
}) => {
    const pathName = usePathname();

    return routes.map(({ subRoutes, title, url, icon }) => {
        const Icon = icon;
        const IconElement = Icon ? <Icon size={18} /> : null;

        if (subRoutes.length > 0) {
            return (
                <AppNavLink
                    leftSection={IconElement}
                    key={url}
                    label={title}
                    className="flex"
                >
                    <Tabs orientation="vertical" placement="right" radius={10}>
                        <Tabs.List className="w-full p-0 m-0">
                            {subRoutes.map((subRoutes) => {
                                const SubIcon = subRoutes?.icon;
                                const SubIconElement = SubIcon ? (
                                    <SubIcon size={18} />
                                ) : null;
                                return (
                                    <Tabs.Tab
                                        key={subRoutes.url}
                                        value={subRoutes.url}
                                        className="p-0"
                                    >
                                        <AppNavLink
                                            active={pathName.includes(
                                                subRoutes.url
                                            )}
                                            leftSection={SubIconElement}
                                            component={Link}
                                            href={subRoutes.url}
                                            label={subRoutes.title}
                                        />
                                    </Tabs.Tab>
                                );
                            })}
                        </Tabs.List>
                    </Tabs>
                </AppNavLink>
            );
        }

        return (
            <AppNavLink
                active={pathName.includes(url)}
                key={url}
                component={Link}
                href={url}
                label={
                    <motion.span layoutId="underline" className="">
                        {title}
                    </motion.span>
                }
                leftSection={IconElement}
            />
        );
    });
};
