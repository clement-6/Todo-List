import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoComponent from './component/ToDoComponent';
import { TaskProvider } from './Context/TaskProvider';

export default function App() {
  return (
    <TaskProvider >
        <ToDoComponent styles={styles.container}/>
        <StatusBar style='dark' />
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F4FA',
    
  },
});
