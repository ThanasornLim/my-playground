'use client';

import React, { Suspense } from 'react';
// import { useQuery } from "@tanstack/react-query";
import { Flex, Skeleton, Text } from '@mantine/core';

import Paper from '@/components/UI/Paper/Paper';

import TaskCard from './components/TaskCard';
import useTask from './hooks/useTask';
import CreateTask from './CreateTask';

interface TaskContainerProps {}
const TaskContainer: React.FC<TaskContainerProps> = () => {
	const {
		data: { isLoading, data },
	} = useTask();

	const tasksList =
		data && data?.length > 0 ? (
			data?.map((task) => {
				return <TaskCard key={task.id} task={task} />;
			})
		) : (
			<Paper className="p-4">
				<Text c={'dark.0'} className="text-center">
					No tasks
				</Text>
			</Paper>
		);

	const noTasks = Array(4)
		.fill('0')
		.map((_, index) => {
			return <Skeleton key={'loading-' + index} className="h-10" />;
		});

	return (
		<Flex direction={'column'} className="space-y-2">
			<CreateTask />
			<Flex
				direction={'column'}
				className="w-auto max-w-full space-y-2 max-h-[72.5vh] overflow-y-auto"
			>
				{isLoading ? noTasks : tasksList}
			</Flex>
		</Flex>
	);
};

export default TaskContainer;
