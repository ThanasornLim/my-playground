"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTask } from "../services/getTask";
import { updateTasks } from "../services/updateTasks";
import { deleteTask } from "../services/deleteTask";
import { postTask } from "../services/postTask";

export type Tasks = {
    id: number;
    name: string;
};

interface UseTaskProps {}

export default function useTask<UseTaskProps>() {
    const queryClient = useQueryClient();

    const validateTags = (tags: string[] = ["tasks"]) => {
        queryClient.invalidateQueries(tags);
    };
    const taskQuery = useQuery({
        queryKey: ["tasks"],
        queryFn: getTask,
    });

    const update = useMutation({
        mutationFn: async (tasks: Tasks) => updateTasks(tasks),
        onSettled: () => {
            console.log("validating tag");
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });

    const create = useMutation({
        mutationFn: (tasks: Tasks["name"]) => postTask(tasks),
        onSuccess: () => validateTags(),
    });

    const remove = useMutation({
        mutationFn: (id: Tasks["id"]) => deleteTask(id),
        onSuccess: () => validateTags(),
    });

    return {
        update,
        create,
        remove,
        data: taskQuery || [],
    };
}
