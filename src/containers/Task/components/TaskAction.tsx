'use client';

import React, { useEffect } from 'react';
import { ActionIcon, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';

import useTask, { Tasks } from '../hooks/useTask';

import TaskForm from './TaskForm';

interface TaskActionProps {
	task: Tasks;
}

const TaskAction: React.FC<TaskActionProps> = ({ task }) => {
	const [opened, { open, close }] = useDisclosure(false);
	const { remove } = useTask();

	const handleRemove = () => {
		remove.mutate(task.id);
	};

	return (
		<>
			<Drawer opened={opened} onClose={close} title="Update task">
				<TaskForm type="update" task={task} onSubmitSuccess={close} />
			</Drawer>
			<Group>
				<ActionIcon onClick={open}>
					<IconEdit />
				</ActionIcon>
				<ActionIcon onClick={handleRemove}>
					<IconTrash />
				</ActionIcon>
			</Group>
		</>
	);
};

export default TaskAction;
