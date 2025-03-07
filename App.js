import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoComponent from './component/ToDoComponent';
import { TaskProvider } from './Context/TaskProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
   
      <TaskProvider>
        <ToDoComponent />
        <StatusBar style='dark' />
      </TaskProvider>
  
   
  );
}

