import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Import Screens
import { Ventes_flash } from '../Components/Ventes_flash';
import { Ventes_journaliere } from '../Components/Ventes_journaliere';
import { Stock_Microservice } from '../Components/Stock_Microservice';
import { Objectif_Microservice } from '../Components/Objectif_Microservice';
import { VCumul } from '../Components/VCumul';


const Tab = createBottomTabNavigator();


function DashboardScreen() {
  return (
    <NavigationContainer 
    independent={true}>
      <Tab.Navigator  
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Ventes flash') {
              iconName = focused? 'ios-flash' : 'ios-flash-outline';
            } else if (route.name === 'Ventes journalière') {
              iconName = focused ? 'ios-color-wand' : 'ios-color-wand-outline';
            } else if (route.name === 'Stock Microservice') {
              iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
            } else if (route.name === 'Objectif Microservice') {
              iconName = focused ? 'ios-today' : 'ios-today-outline';
            }else if (route.name === 'Ventes Cumul') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false          
        })}
      >
        <Tab.Screen name='Ventes flash' component={Ventes_flash}/>
        <Tab.Screen name='Ventes journalière' component={Ventes_journaliere}/>
        <Tab.Screen name='Stock Microservice' component={Stock_Microservice}/>
        <Tab.Screen name='Objectif Microservice' component={Objectif_Microservice}/>
        <Tab.Screen name='Ventes Cumul' component={VCumul}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export {DashboardScreen}