import React from "react";
import { TaskContext } from "../Context/TaskProvider";


export default useTask = () => {
    const context = React.useContext(TaskContext);
    if(!context){
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context
} 
