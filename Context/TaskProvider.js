import React, { createContext, useState } from "react";
import DATA from "../Data/data";
import { StyleSheet, View } from "react-native";

export const TaskContext = createContext(DATA);


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(DATA)

    function addTask(title) {
        if (title.trim() === "") return;
          const newTask = { id: Date.now(), title, completed: false };
          setTasks([...tasks, newTask]);
        }

        function deleteTask(id){
            setTasks(tasks.filter(task => task.id !== id))
        }


        function toggleCompleted(id) {
            setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
          }

    return (
        <TaskContext.Provider  value={{ tasks, addTask, deleteTask, toggleCompleted }}>
            {children}
        </TaskContext.Provider>
    );
}
