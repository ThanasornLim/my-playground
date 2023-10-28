'use client';

import React from 'react';
import { Divider, Text } from '@mantine/core';
import { IconHome } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import AnimateLink from '@/components/animation/AnimateLink/AnimateLink';
import AnimatePageTransition from '@/components/animation/PageTransition/PageTransition';
import AppNavLink from '@/components/UI/NavLink/NavLink';

const PageTransitionLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex gap-x-4 justify-start ">
				{/* <Text component={AnimateLink} href={"/page-transition"}>
                
                    <IconHome />
                </Text> */}
				<AnimateLink href="/page-transition">
					<IconHome />
				</AnimateLink>
				<Divider orientation="vertical" />
				<AnimateLink href="/page-transition/page1">Page 1</AnimateLink>
				<Divider orientation="vertical" />
				<AnimateLink href="/page-transition/page2">Page 2</AnimateLink>
				{/* <Text component={AnimateLink} href={"/page-transition/page1"}>
                    Page 1
                </Text>
                <Divider orientation="vertical" my={0} />
                <Text component={AnimateLink} href={"/page-transition/page2"}>
                    Page 2
                </Text> */}
			</div>
			<Divider />
			<div className="h-[calc(100vh_-_200px)] mt-4 w-full">{children}</div>
		</div>
	);
};

export default PageTransitionLayout;
