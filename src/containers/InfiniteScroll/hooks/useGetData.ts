import { useInfiniteQuery } from '@tanstack/react-query';

export function useGetData() {
	const fetchProjects = async ({ pageParam = 0 }) => {
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10' +
				pageParam,
		);
		return res.json();
	};

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ['projects'],
		queryFn: fetchProjects,
		getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
	});

	return {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	};
}
