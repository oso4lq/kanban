import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {

    const [userTasks, setUserTasks] = useState(null);

    let navigate = useNavigate();

    const returnTask = (data) => {
        setUserTasks(data.tasks);
        navigate(AppRoutes.HOME)
    }

    return (
        <TasksContext.Provider value={{ userTasks, setUserTasks, returnTask }}>
            {children}
        </TasksContext.Provider>
    );
};