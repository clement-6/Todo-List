import { MaterialIcons } from "@expo/vector-icons";
import React, {  useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList,  TouchableOpacity} from "react-native";
import TabBarComponent from "../navigation/TabBarComponent";
import ToDoItem from "./ToDoItemComponent";
import { NavigationContainer } from '@react-navigation/native';
import TopBar from "../navigation/TopBar";
import DATA from "../Data/data";
import datas from "../Data/datas.json";
import Constants from 'expo-constants';
import { TaskContext } from "../Context/TaskProvider";



const ToDoComponent = () => {
   
    const {addTask} = useContext(TaskContext);
    const [title, setTitle] = useState('');
    
   function handleAddtask() {
    if(title.trim()){
        addTask(title);
        setTitle('');
    }
   }

   
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TO-DO LIST</Text>
            <View style={styles.write}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="  What needs to be done? " />
                <TouchableOpacity style={styles.add} onPress={handleAddtask}>
                    <MaterialIcons name="add-circle-outline" size={40} color="green" />
                </TouchableOpacity>
                
            </View> 
      {/* <TabBarComponent /> */}
      <NavigationContainer style={{flex:1}}>
      <TopBar/>
      </NavigationContainer>

       {/* <View>
                 <FlatList data={tasks} renderItem={({ item }) => <Item title={item.title} task={item} deleteTask={deleteTask}/>} keyExtractor={item => item.id} /> 
               {tasks.map(task => (
                <ToDoItem key={task.id} task={task} deleteTask={deleteTask}/>
              ))} 
             
            </View>  */}

      
              
            </View>   
    )
}

   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9F4FA',
        marginTop: Constants.statusBarHeight
    },
    text: {
        marginTop: 25,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        borderBottomWidth: 0.2,
        
    },
    input: {
        backgroundColor: 'white',
        width: 310,
        borderRadius: 10,
        elevation: 8,
        marginLeft: 16
    },
    write:{
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row',
        
        marginBlockEnd: 12
    },
    add:{
        marginRight: 20
    },
    tab: {
        backgroundColor: 'lightgrey',
        width: 380,
        height: 35,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 6,
        alignItems: 'center',
        paddingEnd: 3,
        paddingStart: 3,
        marginBottom: 8,
    },
    touchtext:{
        backgroundColor: 'white',
        width: 125,
        height: 30,
        borderRadius: 8,
        borderEndWidth: 0.2,
        
    },
   
    tabtext:{
        textAlign: 'center',
        marginTop: 4.5,
        fontWeight: '600',

    },
    texte:{
        textDecorationLine: 'line-through'
    },
    tab_view: {
        marginTop: 10

    }


})

export default ToDoComponent ;