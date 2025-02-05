
import { ScrollView, View } from "react-native";
import ToDoItem from "../component/ToDoItemComponent";
import styles from "../Style/styl";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskProvider";



const Page = ({ filter }) => {

  const { tasks } = useContext(TaskContext);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Complete") return task.completed;
  });
  return (
    <ScrollView>
      <View style={styles.page}>
        {filteredTasks.map((task) => (
          <ToDoItem key={task.id} task={task} />
        ))}
      </View>
    </ScrollView>
  );
}




export default Page;