import React, { useContext } from "react";
import { StyleSheet,View, Text, TouchableOpacity} from "react-native";
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from "@expo/vector-icons";
import { TaskContext } from "../Context/TaskProvider";



const ToDoItem = ({task}) =>{

    const {toggleCompleted, deleteTask} = useContext(TaskContext);
    
    return (
        <View style={styles.item}>
            <Checkbox value={task.completed} onValueChange={() => toggleCompleted(task.id)}/>
            <Text style={[styles.title, { textDecorationLine: task.completed ? 'line-through' : 'none' }]}>{task.title}</Text>
            <TouchableOpacity onPress={() => deleteTask(task.id)}>
                <MaterialIcons name="delete" size={20} color="red" />
            </TouchableOpacity>
        </View>
        
    );

}

const styles=StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      title:{
        textAlign: 'right'
    },

})






export default ToDoItem;