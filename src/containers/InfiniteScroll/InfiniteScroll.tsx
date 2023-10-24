"use client";

import Paper from "@/components/UI/Paper/Paper";
import { Box, Group, Skeleton, Text } from "@mantine/core";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
// import useIntersection from "./hooks/useIntersection";
import { useInView } from "react-intersection-observer";
import { useIntersection } from "./hooks/useIntersection";
import { Tasks } from "../Task/hooks/useTask";
import { faker } from "@faker-js/faker";
import { FixedSizeList as List } from "react-window";
import ContentList from "./components/ContentList";

const InfiniteScroll = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    //     const { ref, inView } = useInView({
    //         rootMargin: "0px 0px",
    //     });
    // This can replace with the other fetch method like axios or something else
    const fetchProjects = async ({ pageParam = 0 }) => {
        // const res = await fetch(
        //     //     `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=20`
        //     `http://localhost:3001/tasks?_page=${pageParam}&_limit=20`
        // );
        // return res.json();
        const massiveUsers = await faker.helpers.multiple(
            () => ({
                id: faker.string.uuid(),
                name: faker.string.sample(),
            }),
            { count: 20 }
        );

        return massiveUsers;
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
        queryKey: ["tasks"],
        queryFn: ({ pageParam }) => fetchProjects({ pageParam }),
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length > 0 ? allPages.length + 1 : undefined,
    });

    const { ref } = useIntersection({ callback: () => fetchNextPage() });

    //     useEffect(() => {
    //         if (!inView) return;
    //         fetchNextPage();
    //     }, [inView]);

    const noTasks = Array(4)
        .fill("0")
        .map((_, index) => {
            return <Skeleton key={"loading-" + index} className="h-14 my-4" />;
        });

    return status === "loading" ? (
        noTasks
    ) : status === "error" ? (
        <Text>Error: {JSON.stringify(error)}</Text>
    ) : (
        <Box>
            <ContentList contentRef={ref} data={data} />

            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? "Loading more..."
                        : hasNextPage
                        ? "Load More"
                        : "Nothing more to load"}
                </button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
        </Box>
    );
};
export default InfiniteScroll;
