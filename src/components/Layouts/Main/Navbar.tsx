'use client';
import React from 'react';
import {
	Burger,
	Button,
	Group,
	useComputedColorScheme,
	useMantineColorScheme,
} from '@mantine/core';
import { IconSun } from '@tabler/icons-react';

interface NavbarProps {
	opened: boolean;
	toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ opened, toggle }) => {
	//     return <>{children}</>;
	//     const [opened, { toggle }] = useDisclosure();
	//     const [collapse, { toggle: toggleCollapse }] = useDisclosure(false);

	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light', {
		getInitialValueInEffect: true,
	});

	const handleChangeTheme = () => {
		const theme = computedColorScheme === 'light' ? 'dark' : 'light';
		setColorScheme(theme);
	};

	return (
		<Group c={'blue'} className=" px-4" justify="space-between" w={'100%'}>
			<Group>
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

				<div>Logo</div>
			</Group>
			<Group>
				<Button
					color="lime"
					variant="gradient"
					gradient={{ from: 'blue', to: 'red' }}
					onClick={handleChangeTheme}
				>
					<IconSun />
				</Button>
			</Group>
		</Group>
	);
};

export default Navbar;
function useDisclosure(): [any, { toggle: any }] {
	throw new Error('Function not implemented.');
}
