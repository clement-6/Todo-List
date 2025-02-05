import React from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {  StyleSheet, useWindowDimensions, View, Text } from "react-native";
import ToDoItemComponent from '../component/ToDoItemComponent';



const AllRoute = () => {<ToDoItemComponent/>}

const ActiveRoute = () => (
    <View style={{ backgroundColor: '#E9F4FA', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Page 2</Text>
  </View>
)
 
const CompleteRoute = () => (
    <View style={{ backgroundColor: '#E9F4FA', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Page 3</Text>
  </View>
)

const renderScene = SceneMap({
  all: AllRoute,
  active: ActiveRoute,
  complete: CompleteRoute
})

const routes = [
  { key: 'all', title: 'All' },
  { key: 'active', title: 'Active' },
  { key: 'complete', title: 'Complete' },
];


const renderTabBar = props => (
    <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    pressColor='white'
    style={styles.tab}
    labelS
    />
)

const TabBarComponent = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
 
    return (
        <TabView 
        navigationState={{index, routes}}
        renderScene={renderScene} 
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width}}
        renderTabBar={renderTabBar}
      />
      );
       
      
}

const styles = StyleSheet.create({
  tab:{
    backgroundColor: 'lightgrey',
    width: 370, 
    marginHorizontal: 20, 
    borderRadius: 6, 
    marginBottom: 8,
  },
  indicator:{
     backgroundColor: 'white',
        position: 'absolute',
        zIndex: -1,
        bottom: '7%',
        height: '85%',
        borderRadius: 12,
  }
 
})

export default TabBarComponent;