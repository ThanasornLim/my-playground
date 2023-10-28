import React from 'react';
import { Input } from '@mantine/core';
import { TableMeta } from '@tanstack/react-table';

interface EditableCellProps {
	getValue: () => unknown;
	row: any;
	column: any;
	table: any;
}

const EditableCell: React.FC<EditableCellProps> = ({ getValue, column, row, table }) => {
	return <Input />;
};

export default EditableCell;
