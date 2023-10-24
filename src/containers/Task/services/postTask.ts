import { BASE_URL } from "../constant/BASE_URL";
import { Tasks } from "../hooks/useTask";

export const postTask = async (name: Tasks["name"]) => {
    const stringBody = JSON.stringify({ name });
    const tasksList = await fetch(BASE_URL, {
        method: "POST",
        body: stringBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    return { ok: true, data: await tasksList.json() };
};
