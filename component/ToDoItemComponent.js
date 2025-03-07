import React, { useCallback, useState } from "react";
import { StyleSheet,View, Text, TouchableOpacity, Alert, TextInput, Modal, Button} from "react-native";
import Checkbox from 'expo-checkbox';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import useTask from "../hooks/useTask";





const ToDoItem = ({ task }) => {
  const { toggleCompleted, deleteTask, updateTask } = useTask();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleDeleteTask = useCallback(() => {
    Alert.alert("🗑️ Confirmation", "Voulez-vous supprimez cette tache!?", [
      { text: "Annuler", style: "cancel" },
      { text: "Supprimer", onPress: () => deleteTask(task.id), style: "destructive" },
    ]);
  }, [task.id, deleteTask]);

  const handleUpdateTask = () => {
    if (newTitle.trim() === "") {
      Alert.alert("⚠️ Attention", "Veuillez saisir un titre pour la tache!");
      return;
    }
    updateTask(task.id, newTitle);
    console.log("✅ Tâche mise à jour :", newTitle);
    setModalVisible(false);
  };

  return (
    <View style={styles.item}>
      <Checkbox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
    
        <Text
          style={[
            styles.title,
            { textDecorationLine: task.completed ? "line-through" : "none" },
          ]}
        >
          {task.title}
        </Text>
   
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome name="pencil" size={20} color="green" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteTask}>
        <MaterialIcons name="delete" size={20} color="red" />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>📝Modifier la tache</Text>
            <TextInput style={styles.input} value={newTitle} onChangeText={setNewTitle}/>
            <View style={styles.button}>
              <Button title="Annuler" onPress={() => setModalVisible(false)} color='red' />
              <Button title="Valider" onPress={handleUpdateTask} color="green"/>
            </View>
          </View>
        </View>
      </Modal> 
    </View>
  );
};

const styles=StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        
        
      },
      title:{
        flex: 1,
        fontSize: 16,
        color: "#33",
        marginLeft: 18,
    },
    input: {
      width: "100%",
      fontSize: 16,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 8,
      borderRadius: 5,
      marginBottom: 10,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
    modalText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    button:{
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    }



})






export default ToDoItem;