import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import caes from './pages/caes';
import doacoes from './pages/doacoes';
import home from './pages/home';
import sobre from './pages/sobre';
import vendas from './pages/vendas';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: 'white',

                tabBarShowLabel:true,
                
                tabBarStyle:{
                    backgroundColor:'#8B008B'
                }
            }}
            initialRouteName="Home"
        >
            <Tab.Screen name="Lançamentos" component={caes}
            options={{ tabBarBadge: 3, 
            tabBarIcon: ({focused}) => {
                return <Ionicons name={'paw'} size={25} color={focused ? 'white' : '#DCDCDC'} /> 
            }}} />

            <Tab.Screen name="Descrição" component={doacoes}
            options={{ 
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={'paw'} size={25} color={focused ? 'white' : '#DCDCDC'} /> 
                }}} />

            <Tab.Screen name="Home" component={home}
            options={{ 
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={'md-home'} size={25} color={focused ? 'white' : '#DCDCDC'} /> 
                }}} />

            <Tab.Screen name="Sobre" component={sobre}
            options={{ 
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={'paw'} size={25} color={focused ? 'white' : '#DCDCDC'} /> 
                }}} />

            <Tab.Screen name="Vendas" component={vendas}
            options={{ 
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={'paw'} size={25} color={focused ? 'white' : '#DCDCDC'} /> 
                }}} />
        </Tab.Navigator>
    )
}