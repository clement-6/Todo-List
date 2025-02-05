import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Page from '../screen/Page';
import styles from '../Style/styl';
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from 'react-native';




const Tab = createMaterialTopTabNavigator()

const TopBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: styles.label,
  tabBarLabel: ({ focused, color}) => {
          let iconName; let label;

          if (route.name === "All") {
            iconName = focused ? "ballot" : "ballot";
            label = focused ? "All" : "All";
          } else if (route.name === "Active") {
            iconName = focused ? "task" : "task";
            label = focused ? "Active" : "Active";
          } else if (route.name === "Complete") {
            iconName = focused ? "task-alt" : "task-alt";
            label = focused ? "Complete" : "Complete";
          }
          return (
            <View style={styles.tabItem}>
                <MaterialIcons name={iconName} size={20} color={color} />
                <Text style={[styles.label , {color:focused ? "black" : "gray"}]}>{label}</Text>
            </View>

          )
        },
      })}
    >
      <Tab.Screen name="All">{() => <Page filter="All" />}</Tab.Screen>
      <Tab.Screen name="Active">{() => <Page filter="Active" />}</Tab.Screen>
      <Tab.Screen name="Complete">{() => <Page filter="Complete" />}</Tab.Screen>
    </Tab.Navigator>
  );
};



export default TopBar;