import React from 'react';
import Link from 'next/link';

import useAnimatedRouter from '@/hooks/useAnimateRouterHooks';

interface AnimateLinkProps {
	href: string;
	children: React.ReactNode;
}

const AnimateLink: React.FC<AnimateLinkProps> = ({ children, href }) => {
	const { animateRoute } = useAnimatedRouter();
	return (
		<Link
			href={'#'}
			onClick={() => {
				animateRoute(href);
			}}
			passHref
		>
			{children}
		</Link>
	);
};

export default AnimateLink;
