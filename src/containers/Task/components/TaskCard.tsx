import Paper from "@/components/UI/Paper/Paper";
import React from "react";
import type { Tasks } from "../hooks/useTask";
import { Group, Text } from "@mantine/core";
import TaskAction from "./TaskAction";

interface TaskCardProps {
    task: Tasks;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <Paper shadow="sm" className="p-4" c="primary">
            <Group justify="space-between">
                <Text miw={"4ch"}>{task.id}</Text>
                <Text>{task.name}</Text>
                <TaskAction task={task} />
            </Group>
        </Paper>
    );
};

export default TaskCard;
