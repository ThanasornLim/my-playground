'use client';

import React, { useEffect, useState } from 'react';
import {
	createTheme,
	defaultThemes,
	IDataTableProps,
} from 'react-data-table-component';
import {
	TableColumn,
	TableProps,
	TableStyles,
} from 'react-data-table-component/dist/src/DataTable/types';
import { Theme } from 'react-data-table-component/dist/src/DataTable/types';
import {
	Avatar,
	Checkbox,
	Loader,
	MantineTheme,
	Pagination,
	Select,
	useMantineColorScheme,
	useMantineTheme,
} from '@mantine/core';

import { User } from '../user.types';

const customStyles: TableStyles = {
	pagination: {
		pageButtonsStyle: {
			borderColor: 'red',
			outlineColor: 'red',
			//     backgroundColor: "red",
		},
		style: {
			'&>div>select': { outlineColor: 'red' },
			border: '1px solid',
			borderColor: defaultThemes.default.divider.default,
			borderBottomLeftRadius: '0.5rem',
			borderBottomRightRadius: '0.5rem',
		},
	},
	cells: {
		style: {
			'&:first-of-type': {
				borderLeftStyle: 'solid',
				borderLeftWidth: '1px',

				// borderLeftColor: defaultThemes.default.divider.default,
			},
			//     "&:not(:last-of-type)": {
			borderRightStyle: 'solid',
			borderRightWidth: '1px',
			borderColor: defaultThemes.default.divider.default,
			//     },
		},
	},
	headCells: {
		style: {
			'&:first-of-type': {
				borderLeftStyle: 'solid',
				borderLeftWidth: '1px',
				borderTopLeftRadius: '0.5rem',
				// borderTopRightRadius: "0.5rem",
				// borderLeftColor: defaultThemes.default.divider.default,
			},
			'&:last-of-type': {
				// borderLeftStyle: "solid",
				// borderLeftWidth: "1px",
				borderTopRightRadius: '0.5rem',
				// borderTopRightRadius: "0.5rem",
				// borderLeftColor: defaultThemes.default.divider.default,
			},
			//     "&:not(:last-of-type)": {

			borderRightStyle: 'solid',
			borderTopStyle: 'solid',
			borderRightWidth: '1px',
			borderTopWidth: '1px',
			borderColor: defaultThemes.default.divider.default,
			//     },
		},
	},
};

const createDataGridTheme = (mantineTheme: MantineTheme) => {
	const defaultColor = mantineTheme.primaryColor;
	const primary = (shade: number = 6) =>
		mantineTheme.colors?.primary?.[shade] || defaultColor || 'red';
	const dark = (shade: number) => mantineTheme.colors.dark[shade];

	const darkTheme: Theme = {
		text: {
			primary: dark(0),
			secondary: 'rgba(255, 255, 255, 0.7)',
			// secondary: "rgba(255, 255, 255, 0.7)",
			disabled: 'rgba(0,0,0,.12)',
		},

		background: {
			default: mantineTheme.colors.dark[8],
			//     default: "#424242",
		},
		context: {
			background: primary(6),
			text: '#FFFFFF',
		},
		divider: {
			default: 'rgba(81, 81, 81, 1)',
		},
		button: {
			default: '#FFFFFF',
			focus: 'rgba(255, 255, 255, .54)',
			hover: 'rgba(255, 255, 255, .12)',
			disabled: 'rgba(255, 255, 255, .18)',
		},
		selected: {
			default: 'rgba(0, 0, 0, .7)',
			text: '#FFFFFF',
		},
		highlightOnHover: {
			default: 'rgba(0, 0, 0, .7)',
			text: '#FFFFFF',
		},
		striped: {
			default: 'rgba(0, 0, 0, .87)',
			text: '#FFFFFF',
		},
	};
	return createTheme('dark', darkTheme, 'dark');
};

const DataTable = dynamic(() => import('react-data-table-component'), {
	ssr: false,
});
import { IconArrowUp } from '@tabler/icons-react';
import dynamic from 'next/dynamic';

const columns: TableColumn<User>[] = [
	{
		sortable: true,
		selector: (row) => row.userId,
		name: 'ID',
		id: 'userId',
		width: '4rem',
		cell(row, rowIndex, column, id) {
			return rowIndex + 1;
		},
	},
	{
		sortable: true,
		selector: (row) => row.avatar,
		cell: (row) => {
			return (
				<Avatar
					src={row.avatar}
					alt={`${row.firstName}-avatar`}
					size={'md'}
					radius={'md'}
				/>
			);
		},
		name: 'Avatar',
		width: '100px',
		id: 'avatar',
	},
	{
		sortable: true,
		selector: (row) => row.firstName,
		name: 'First Name',
		id: 'firstName',
	},
	{
		sortable: true,
		selector: (row) => row.lastName,
		name: 'Last Name',
		id: 'lastNam',
	},
	{
		sortable: true,
		selector: (row) => row.age,
		name: 'Age',
		maxWidth: '100px',
		id: 'age',
	},
	{
		sortable: true,
		selector: (row) => row.email,
		name: 'Email',
		id: 'email',
	},
];

interface ReactDataTableProps {
	users: User[];
}

const ReactDataTable: React.FC<ReactDataTableProps> = ({ users }) => {
	const [pending, setPending] = useState(true);
	const [selectedRow, setSelectedRow] = useState<User[]>([]);
	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	//     TableProps<User>['onSelectedRowsChange']
	const handleChange = ({
		selectedRows,
	}: {
		allSelected: boolean;
		selectedCount: number;
		selectedRows: unknown[];
	}) => {
		// You can set state or dispatch with something like Redux so we can use the retrieved data
		console.log('Selected Rows: ', selectedRows);
		setSelectedRow(selectedRows as User[]);
	};

	useEffect(() => {
		setPending(false);
	}, []);

	//     useEffect(() => {
	createDataGridTheme(theme);
	//     }, [theme]);

	return (
		<div>
			<DataTable
				title="User list"
				fixedHeader
				fixedHeaderScrollHeight="700px"
				progressPending={pending}
				progressComponent={<Loader />}
				columns={columns as any}
				data={users}
				selectableRowsComponent={Checkbox as unknown as React.ReactNode}
				//     selectableRowsComponent={<Checkbox />}
				selectableRowsComponentProps={{
					classNames: {
						input: 'hover:cursor-pointer',
					},
				}}
				striped={true}
				sortIcon={<IconArrowUp />}
				customStyles={customStyles}
				//     selectableRowsSingle
				theme={colorScheme === 'dark' ? 'dark' : 'light'}
				selectableRows
				pagination
				paginationComponentOptions={{
					selectAllRowsItem: true,
				}}
				onSelectedRowsChange={handleChange}
				sortServer={false}
			/>
		</div>
	);
};

export default ReactDataTable;
