import { createContext, useState } from "react";

export const AppContext = createContext();


const ContextProvider = (props) => {
    const url = `https://taskmanager-tq5o.onrender.com`;
    const [fetchtask, setfetchtask] = useState(false);
    const [Task, setTask] = useState([]);
    const contextValue = {
        url,
        fetchtask,
        setfetchtask,
        Task, setTask

    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}


export default ContextProvider;
