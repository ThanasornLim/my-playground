'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
	children: React.ReactNode;
	className?: string;
}
const variants = {
	enter: (direction: number) => {
		// console.log(direction);
		return {
			// x: direction > 0 ? 500 : -500,
			opacity: 0,
			y: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			// x: direction < 0 ? 500 : -500,
			opacity: 0,
			y: -100,
		};
	},
};

const pages = [{ 'page-transition': 0 }, { page1: 1 }, { page2: 2 }];

const AnimatePageTransition: React.FC<PageTransitionProps> = ({
	className,
	children,
}) => {
	const pathName = usePathname()?.split('/').at(-1) || Object.keys(pages)[0];

	const pagination =
		Object.values(
			pages.find((page) => Object.keys(page)[0] === pathName) as Object,
		)[0] || 1;
	const [[page, direction], setPage] = useState([pagination, 0]);

	const paginate = (newDirection: number) => {
		// console.log(newDirection);
		setPage([page + newDirection, newDirection]);
	};

	return (
		<AnimatePresence>
			<motion.div
				initial="enter"
				animate="center"
				exit="exit"
				variants={variants}
				transition={{
					x: { type: 'spring', stiffness: 300, damping: 30 },
					bounce: 1,
					delayChildren: 4,
				}}
				className={className || 'h-[calc(100vh_-_200px)] mt-4 w-full'}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimatePageTransition;
