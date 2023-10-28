import React from 'react';
import { Avatar, Table } from '@mantine/core';

import { User } from '../user.types';

interface VanillaTableProps {
	users: User[];
}

const VanillaTable: React.FC<VanillaTableProps> = ({ users }) => {
	const rows = users.map((element) => (
		<Table.Tr className="table-auto" key={element.userId}>
			<Table.Td>{element.userId}</Table.Td>
			<Table.Td>
				<Avatar
					src={element.avatar}
					alt={`${element.firstName}-avatar`}
					size={'md'}
				/>
			</Table.Td>
			<Table.Td
				classNames={{
					td: 'bg-red-500',
				}}
				onDoubleClick={() => console.log(element.firstName)}
			>
				{element.firstName}
			</Table.Td>
			<Table.Td>{element.lastName}</Table.Td>
			<Table.Td>{element.email}</Table.Td>
		</Table.Tr>
	));
	return (
		<Table.ScrollContainer minWidth={700} style={{}}>
			<Table
				withColumnBorders
				withRowBorders
				withTableBorder
				className="table-auto"
			>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>ID</Table.Th>
						<Table.Th>Avatar</Table.Th>
						<Table.Th>First Name</Table.Th>
						<Table.Th>Last Name</Table.Th>
						<Table.Th>Email</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody className="block">{rows}</Table.Tbody>
			</Table>
		</Table.ScrollContainer>
	);
};

export default VanillaTable;
