'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Box, Group, Input, Pagination, ScrollArea, Select, Skeleton, Text } from '@mantine/core';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	RowData,
	useReactTable,
} from '@tanstack/react-table';

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void;
	}
}

type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};

const columns: ColumnDef<User>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		// minSize: 350,
		cell: (props) => props.getValue(),
	},
	{
		accessorKey: 'firstName',
		header: 'First Name',
		minSize: 200,

		cell: (props) => props.getValue(),
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
		cell: (props) => props.getValue(),
	},
	{
		accessorKey: 'email',
		header: 'Email',
		minSize: 400,
		cell: (props) => props.getValue() as string,
	},
];

const DATA: User[] = faker.helpers.multiple(
	() => ({
		id: faker.string.uuid(),
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
	}),
	{ count: 100 },
);

function TanStackTable() {
	const selectRef = useRef<HTMLInputElement>(null);

	const [data, setData] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState('');
	// const [page, setPage] = useState(1);
	// const [pageSize, setPageSize] = useState(10);

	const tableColumns = useMemo(
		() =>
			loading
				? columns.map((column) => ({
						...column,
						Cell: <Skeleton />,
				  }))
				: columns,
		[loading],
	);

	const table = useReactTable({
		data,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		columnResizeMode: 'onChange',
		autoResetAll: true,
		state: {
			globalFilter: filter,
		},
		onGlobalFilterChange: setFilter,
		meta: {
			updateData: (rowIndex, columnId, value) =>
				setData((prev) =>
					prev.map((row, index) =>
						index === rowIndex
							? {
									...prev[rowIndex],
									[columnId]: value,
							  }
							: row,
					),
				),
		},
	});

	const handleChangePage = (value: number) => {
		table.setPageIndex(value - 1);
	};

	const onSelectRefClick = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
		console.log('CLick');
		selectRef.current?.click();
	};

	useEffect(() => {
		setData(DATA);
		setLoading(false);
	}, []);

	return (
		<Box className="space-y-8">
			<ScrollArea>
				<Input value={filter} onChange={(e) => setFilter(e.target.value)} />

				<table
					className="space-y-4 table-auto"
					style={
						{
							// minWidth: table.getTotalSize(),
							// width: "100%"
						}
					}
				>
					<thead className="">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr className="flex border p-4 rounded-lg" key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										className="relative h-full grow"
										style={{
											flexGrow: (header?.column?.columnDef?.meta as number) || 0,
											// width: header.getSize()
										}}
										key={header.id}
									>
										<Text size="md">
											{/* {header.column.columnDef.header as string} */}
											{flexRender(header.column.columnDef.header, header.getContext())}
										</Text>
										{header.column.getIsResizing() && header.column.getSize() === header.column.columnDef.minSize && (
											<Text size="md">{header.column.columnDef.minSize}</Text>
										)}
										<Box
											onMouseDown={header.getResizeHandler()}
											onTouchStart={header.getResizeHandler()}
											className=" absolute right-0 flex justify-end w-4 h-6 group -top-0 cursor-col-resize"
										>
											<Box
												className={`${
													header.column.getIsResizing() ? 'bg-green-500' : 'bg-neutral-300'
												}  w-0.5 rounded-full h-full`}
											/>
										</Box>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className=" space-y-4">
						{table.getRowModel().rows.map((row) => (
							<tr className="flex border hover:bg-neutral-100 rounded-lg p-4" key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>
										<Text size="sm" w={cell.column.getSize()}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</Text>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</ScrollArea>
			<Box>
				<Box className="flex justify-end">
					<Group gap={10}>
						<Box onMouseDown={onSelectRefClick} className="flex gap-2 items-center justify-center rounded-lg">
							<Text size="sm" className="">
								Page size
							</Text>
							<Select
								ref={selectRef}
								variant="unstyled"
								withCheckIcon={false}
								className="w-14 "
								data={['10', '20', '30', '40', '50']}
								allowDeselect={false}
								//   leftSection={<span>Show</span>}
								value={table.getState().pagination.pageSize.toString()}
								onChange={(value) => {
									table.setPageSize(Number(value));
								}}
							/>
						</Box>

						<Pagination.Root
							onChange={handleChangePage}
							value={table.getState().pagination.pageIndex}
							total={table.getPageCount()}
						>
							<Group gap={4}>
								<Pagination.First />
								<Pagination.Previous />
								<Pagination.Items />
								<Pagination.Next />
								<Pagination.Last />
							</Group>
						</Pagination.Root>
						<div className="flex items-center gap-1">
							<Text>Page</Text>
							<Text fw={300}>{table.getState().pagination.pageIndex + 1}</Text>
							<Text fw={300}>of</Text>
							<Text fw={300}>{table.getPageCount()}</Text>
						</div>
					</Group>
				</Box>
			</Box>
		</Box>
	);
}

export default TanStackTable;
