import React, { createContext, useState } from "react";
import DATA from "../Data/data";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const TaskContext = createContext(null);


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(DATA ?? []);

    function addTask(title) {
        if (title.trim() === "") return;
          setTasks((prevTasks) => [...prevTasks, { id: Date.now(), title, completed: false }]);
        }

    function updateTask(id, title) {   
        
        if(title.trim() === "") return;
        setTasks((prevTasks) => prevTasks.map(task => (task.id === id ? { ...task, title } : task)));  
    }

        function deleteTask(id){
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        }


        function toggleCompleted(id) {
            setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
          }

    return ( 
        <TaskContext.Provider  value={{ tasks, addTask, updateTask, deleteTask, toggleCompleted }}>
            {children}
        </TaskContext.Provider>

    );
}

