import { BASE_URL } from '../constant/BASE_URL';
import { Tasks } from '../hooks/useTask';

export const updateTasks = async (tasks: Tasks) => {
	const data = JSON.stringify(tasks);
	const response = await fetch(BASE_URL + tasks.id, {
		body: data,
		method: 'PUT',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return { ok: true, data: await response.json() };
};
