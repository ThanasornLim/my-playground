import {
	IconHome,
	IconList,
	IconMovie,
	IconShoppingCart,
	IconSubtask,
	IconTableAlias,
} from '@tabler/icons-react';

import { Routes } from '@/components/Layouts/Main/NestedWithAccordion';

export const routes: Routes[] = [
	{
		title: 'Home',
		url: '/home',
		icon: IconHome,
		subRoutes: [
			// {
			//     title: "Task",
			//     url: "/home/task",
			// },
			// {
			//     title: "Task",
			//     url: "/home/task2",
			// },
			// {
			//     title: "Task",
			//     url: "/home/task3",
			// },
		],
	},
	{
		title: 'Task',
		url: '/task',
		icon: IconSubtask,
		subRoutes: [],
	},
	{
		title: 'Infinite-Scroll',
		url: '/infinite-scroll',
		icon: IconList,
		subRoutes: [],
	},
	{
		title: 'Page-Transition',
		url: '/page-transition',
		icon: IconMovie,
		subRoutes: [],
	},
	{
		title: 'Shop',
		url: '/shop',
		icon: IconShoppingCart,
		subRoutes: [],
	},
	{
		title: 'TanStack Table',
		url: '/tanstack-table',
		icon: IconTableAlias,
		subRoutes: [],
	},
];
