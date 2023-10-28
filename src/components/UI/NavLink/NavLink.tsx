import React, { forwardRef } from 'react';
import type { ElementProps, NavLinkProps } from '@mantine/core';
import { createPolymorphicComponent, NavLink } from '@mantine/core';

interface MyNavLinkProps
	extends NavLinkProps,
		ElementProps<'a', keyof NavLinkProps> {
	children?: React.ReactNode;
}

const AppNavLinkBase = forwardRef<HTMLAnchorElement, MyNavLinkProps>(
	({ children, ...props }, ref) => {
		return (
			<NavLink ref={ref} {...props}>
				{children}
			</NavLink>
		);
	},
);
const AppNavLinkBase2: React.FC<MyNavLinkProps> = ({ children, ...props }) => {
	return <NavLink {...props}>{children}</NavLink>;
};
AppNavLinkBase.displayName = 'AppNavLink';

const AppNavLink = createPolymorphicComponent<'a', MyNavLinkProps>(
	AppNavLinkBase2,
);

export default AppNavLink;
