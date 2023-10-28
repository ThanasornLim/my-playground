'use client';

import React from 'react';
import { revalidateTag } from 'next/cache';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/UI/Buttons/Button';
import getQueryClient from '@/helpers/queryClient';
const deleteTask = async () => {
	const tasksList = await fetch('http://localhost:3001/tasks/', {
		method: 'POST',
		body: JSON.stringify({
			name: 'John doe',
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
	return { ok: true, data: await tasksList.json() };
};
interface DeleteTaskProps {}

const SsrDeleteTask = () => {
	const router = useRouter();
	const path = usePathname();

	const handleDelete = async () => {
		const result = await deleteTask();
		console.log(result);
		// router.replace(path);
		router.prefetch(path);
		console.log(path);
	};

	return <Button onClick={handleDelete}>SSR Add SSR</Button>;
};

export default SsrDeleteTask;
