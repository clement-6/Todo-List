import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert,  TouchableOpacity, StatusBar, Pressable, Modal} from "react-native";
import ToDoItem from "./ToDoItemComponent";
import { NavigationContainer } from '@react-navigation/native';
import TopBar from "../navigation/TopBar";
import DATA from "../Data/data";
import datas from "../Data/datas.json";
import { SafeAreaView } from "react-native-safe-area-context";
import useTask from "../hooks/useTask";




const ToDoComponent = () => {
   
    const { addTask } = useTask();
    const [title, setTitle] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function handleAddtask() {
      if (title.trim() !== "") {
        addTask(title);
        setTitle("");
      }else{
        Alert.alert("Veuillez remplir le champ")
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" />
        <Text style={styles.text}>TO-DO LIST</Text>
        <View style={styles.write}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="  What needs to be done? "
            onSubmitEditing={handleAddtask}
          />
          <TouchableOpacity style={styles.add} onPress={handleAddtask}>
            <MaterialIcons name="note-add" size={40} color="skyblue" />
          </TouchableOpacity>
        </View>
        <NavigationContainer>
          <TopBar />
        </NavigationContainer>

        <View style={styles.circleButton}>
          <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add" size={20} color="#25292e" />
          </Pressable>
        </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <AntDesign name="closesquare" size={20} color="#25292e"/>
          </View>
          <View style={styles.modalContainer}>
            <TextInput value={title} onChangeText={setTitle} placeholder="Ajouter une tache" style={{borderBottomWidth: 1, width: 300}}/>
            <Pressable>
              <Entypo name="add-to-list" size={30} color="#25292e" />
            </Pressable>
          </View>
        </View>
      </Modal>

    
      </SafeAreaView>
    );
}

   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9F4FA',
        justifyContent: "space-between",
        alignItems: "stretch",

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

    },
    circleButton: {
        position: 'absolute',
        width: 70,
        height: 70,
        justifyContent: 'center',
        right: 165,
        bottom: 30,
        borderWidth: 4,
        borderColor: '#0094ff',
        borderRadius: 50,
        padding: 3
    },
    addButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: '#fff',
    },
    modalContent: {
      height: '10%',
      width: '100%',
      backgroundColor: '#fff',
      borderTopRightRadius : 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '25%',
      backgroundColor: '#f4f4f4',
      borderTopRightRadius : 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      
      alignItems: 'flex-end',
      
     

    },
    modalContainer:{
      flexDirection: 'row',
     
    }

})

export default ToDoComponent ;