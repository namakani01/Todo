import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/header';
import Todolist from '../components/todolist';
import Updatetodo from '../components/updatetotodo';

const Stack = createNativeStackNavigator();

const Screen1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerShown: false,
            headerStyle: {backgroundColor: '#7860f0'},
          }}
          name="Home"
          component={Header}></Stack.Screen>
        <Stack.Screen
          options={{
            headerTitle: 'Your To-Do List :',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#7860f0'},
            headerTitleAlign: 'center',
          }}
          name="List"
          component={Todolist}></Stack.Screen>
        <Stack.Screen
          options={{
            headerTitle: 'Update your To-Do Item',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#7860f0'},
            headerTitleAlign: 'center',
          }}
          name="Update"
          component={Updatetodo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Screen1;
