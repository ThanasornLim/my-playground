'use client';

import React from 'react';
import { Avatar, Table } from '@mantine/core';

import ReactDataTable from './components/ReactDataTable';
import { User } from './user.types';

interface UserProps {
	users: User[];
}

const UserContainer: React.FC<UserProps> = ({ users }) => {
	//     return <GlideDataGrid users={users} />;
	return (
		<div>
			{/* <div className="text-red-200">Hello world</div> */}
			<ReactDataTable users={users} />
		</div>
	);
};

export default UserContainer;
