import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Page from '../screen/Page';
import styles from '../Style/styl';
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from 'react-native';




const Tab = createMaterialTopTabNavigator()

const tabs = {
  All: {icon: "ballot", label: "All"},
  Active: {icon: "task", label: "Active"},
  Complete: {icon: "task-alt", label: "Complete"},
}

const TopBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
  tabBarLabel: ({ focused, color}) =>  (
            <View style={styles.tabItem}>
                <MaterialIcons name={tabs[route.name].icon} size={20} color={color} />
                <Text style={[styles.label , focused ? styles.activeLabel : styles.inactiveLabel]}>{tabs[route.name].label}</Text>
            </View>
          )
      })}
    >
     {Object.keys(tabs).map((filter) => (
      <Tab.Screen key={filter} name={filter}>{() => <Page filter={filter} />}</Tab.Screen>
     ))}
    </Tab.Navigator>
  );
};



export default TopBar;