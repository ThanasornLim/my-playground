'use client';
import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import { IconHome, IconHome2 } from '@tabler/icons-react';

import AnimatePageTransition from '@/components/animation/PageTransition/PageTransition';
import { LoremIpsum } from '@/constants/text';

const PageTransitionPage = () => {
	return (
		<Box
			bg="pink"
			className="w-full h-full grid place-content-center page-header"
		>
			<Box className="max-w-lg">
				<Title c="dark" className="">
					<IconHome2 size={44} alignmentBaseline="baseline" />
				</Title>

				<Text className="" c="primary">
					{LoremIpsum}
				</Text>
			</Box>
		</Box>
	);
};

export default PageTransitionPage;
