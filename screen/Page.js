
import { FlatList, View } from "react-native";
import ToDoItem from "../component/ToDoItemComponent";
import styles from "../Style/styl";
import useTask from "../hooks/useTask";

const Page = ({ filter }) => {

  const { tasks } = useTask();
  const filteredMethod = {
    All: () => true,
    Active: (task) => !task.completed,
    Complete: (task) => task.completed,
  };

  const filteredTasks = tasks.filter(filteredMethod[filter]);
  return (
      <View style={styles.page}>
        <FlatList data={filteredTasks} keyExtractor={(item) => item.id} renderItem={({ item }) => <ToDoItem task={item} />}/>
      </View>
  );
}




export default Page;