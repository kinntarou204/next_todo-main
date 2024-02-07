impimport { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const TODO_API_PATH = "/data/todo.json";

export const getTodos = async () => {
    const url = API_URL + TODO_API_PATH;
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    const url = API_URL + TODO_API_PATH;
    const data = JSON.stringify(todos);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        if (response.ok) {
            // データが正常に保存された場合は、何かしらの処理を行う（例：成功メッセージの表示など）
        } else {
            console.error("Failed to save todos.");
        }
    } catch (error) {
        console.error(error);
    }
}