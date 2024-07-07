import { TaskApplicationBackend } from "./TasksApplicationApis"

export const getTasksForCurrentUser = async() => {
    const {data} = await TaskApplicationBackend.get("/task/self");
    return data;
}