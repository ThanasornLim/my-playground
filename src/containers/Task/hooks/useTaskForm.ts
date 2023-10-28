'use client';

import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';

import useTask, { Tasks } from './useTask';

const validateScheme = yup.object({
	name: yup.string().required(),
	// id: yup.number().min(1),
});

export default function useTaskForm(tasks?: Tasks) {
	const { create, update } = useTask();

	const form = useForm<Tasks>({
		initialValues: {
			id: tasks?.id || 0,
			name: tasks?.name || '',
		},
		validate: yupResolver(validateScheme),
	});

	const handleCreate = async () => {
		console.log('?');
		create.mutate(form.values.name);
		form.reset();
	};

	const handleUpdate = async () => {
		console.log('?');
		update.mutate(form.values);
		form.reset();
	};

	return {
		form,
		onCreate: form.onSubmit(handleCreate),
		onUpdate: form.onSubmit(handleUpdate),
	};
}
