import { useContext } from "react"
import { TasksContext } from "../contexts/tasks-context"

export const useTasks = () => {
    return useContext(TasksContext)
}