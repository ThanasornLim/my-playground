import { Tasks } from '../hooks/useTask';

export const getTask = async (): Promise<Tasks[]> => {
	const tasksList = await fetch('http://localhost:3001/tasks/', {
		method: 'Get',
		next: { tags: ['tasks'] },
		cache: 'no-cache',
	});

	return tasksList.json();
};
