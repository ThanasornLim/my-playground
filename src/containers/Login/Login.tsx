'use client';

import React from 'react';
import { Button, Group, PasswordInput, TextInput, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';

import ManTineButton from '@/components/UI/Buttons/Button';
import Paper from '@/components/UI/Paper/Paper';

const formSchema = yup.object({
	username: yup.string().email().required(),
	password: yup.string().required(),
});

const Login = () => {
	const form = useForm<{
		username: string;
		password: string;
	}>({
		initialValues: {
			username: '',
			password: '',
		},
		validate: yupResolver(formSchema),
	});

	const handleSubmit = (
		values: typeof form.values,
		e: React.FormEvent<HTMLFormElement> | undefined,
	) => {
		console.log(values);
	};
	return (
		<Paper
			radius={'lg'}
			shadow="md"
			c={'violet'}
			className="p-8 space-y-4 max-w-lg w-full"
		>
			<Title order={3}>Sign in</Title>

			<form className="space-y-4" onSubmit={form.onSubmit(handleSubmit)}>
				<TextInput
					label="Username"
					name="username"
					radius={'md'}
					{...form.getInputProps('username')}
				/>
				<PasswordInput
					label="Password"
					name="password"
					radius={'md'}
					{...form.getInputProps('password')}
				/>
				<Group justify="center">
					<ManTineButton type="submit" variant="gradient">
						Sign in
					</ManTineButton>
				</Group>
			</form>
		</Paper>
	);
};

export default Login;
