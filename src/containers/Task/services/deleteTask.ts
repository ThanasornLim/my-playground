import { BASE_URL } from "../constant/BASE_URL";

export const deleteTask = async (id: number) => {
    const tasksList = await fetch(BASE_URL + id, {
        method: "Delete",
    });

    return tasksList.json();
};
