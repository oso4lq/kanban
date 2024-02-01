import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {

    const [userTasks, setUserTasks] = useState();

    let navigate = useNavigate();

    const returnUser = () => {
        console.log('task added successfully');
        navigate(AppRoutes.HOME)
    }

    return (
        <TasksContext.Provider value={{ userTasks, setUserTasks, returnUser }}>
            {children}
        </TasksContext.Provider>
    );
};