"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import { Box, Pagination, Select, Skeleton, Table, Text } from "@mantine/core";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => <>{props.getValue()}</>,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => <>{props.getValue()}</>,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (props) => <>{props.getValue()}</>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <>{props.getValue()}</>,
  },
];

const DATA: User[] = faker.helpers.multiple(
  () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
  }),
  { count: 100 }
);

const TanStackTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const tableColumns = useMemo(() => {
    return loading
      ? columns.map((column) => ({
          ...column,
          Cell: <Skeleton />,
        }))
      : columns;
  }, [loading]);

  console.log(tableColumns);

  const table = useReactTable({
    data: data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleChangePage = (value: number) => {
    console.log(value);
    console.log(value);
    table.setPageIndex(value - 1);
  };

  useEffect(() => {
    setData(DATA);
    setLoading(false);
  }, []);

  return (
    <Box className="space-y-4">
      <Table
        striped
        withRowBorders
        withTableBorder
        highlightOnHover
        withColumnBorders
      >
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Th key={header.id}>
                      {header.column.columnDef.header as string}
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            );
          })}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Box className="flex justify-end">
        <Box className="flex gap-2 items-center justify-center rounded-lg">
          <Text size="sm" className="">
            Page size
          </Text>
          <Select
            variant="unstyled"
            withCheckIcon={false}
            className="w-14 "
            data={["10", "20", "30", "40", "50"]}
            allowDeselect={false}
            //   leftSection={<span>Show</span>}
            value={table.getState().pagination.pageSize.toString()}
            onChange={(value) => {
              table.setPageSize(Number(value));
            }}
          />
          {table.getState().pagination.pageSize.toString()}
        </Box>

        <Pagination.Root
          onChange={handleChangePage}
          // value={table.getState().pagination.pageIndex}
          total={table.getPageCount()}
        >
          <Pagination.First />
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination.Root>
        <div className="flex items-center gap-1">
          <div>Page</div>
          <Text fw={300}>{table.getState().pagination.pageIndex + 1}</Text>
          <Text fw={300}>of</Text>
          <Text fw={300}>{table.getPageCount()}</Text>
        </div>
      </Box>
    </Box>
  );
};

export default TanStackTable;
