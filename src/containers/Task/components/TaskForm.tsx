import { Button, Input, Flex } from "@mantine/core";
import React from "react";
import useTaskForm from "../hooks/useTaskForm";
import { Tasks } from "../hooks/useTask";

interface TaskFormProps {
    type: "create" | "update";
    task?: Tasks;
    onSubmitSuccess?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ type, task, onSubmitSuccess }) => {
    const { form, onCreate, onUpdate } = useTaskForm(task);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const submit = type === "create" ? onCreate : onUpdate;
        submit(e);
        onSubmitSuccess && onSubmitSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <Flex
                className="gap-2"
                direction={type === "create" ? "row" : "column"}
            >
                <Input
                    className="w-full"
                    radius={"md"}
                    name="name"
                    {...form.getInputProps("name")}
                />
                <Button {...(type === "create" && { maw: 240 })} type="submit">
                    Create Tasks
                </Button>
            </Flex>
        </form>
    );
};

export default TaskForm;
