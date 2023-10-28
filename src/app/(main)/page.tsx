import { faker } from '@faker-js/faker';
import { Group, useMantineColorScheme } from '@mantine/core';

import Button from '@/components/UI/Buttons/Button';
import Login from '@/containers/Login/Login';
import User from '@/containers/Users/User';

export default async function Home() {
	return (
		<div className="text-xl text-center min-h-[calc(100vh_-_100px)] grid place-content-center">
			Welcome to web demo
		</div>
	);
}
