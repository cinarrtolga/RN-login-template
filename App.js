import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import ExamplePage from './Pages/ExamplePage'
import ResetPasswordPage from './Pages/ResetPasswordPage'
import RegisterPage from './Pages/RegisterPage'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen 
        name="MainPage" 
        component={MainPage}
       />
      <Stack.Screen 
        name="LoginPage" 
        component={LoginPage}
      />
      <Stack.Screen
        name="ExamplePage" 
        component={ExamplePage}
      />
      <Stack.Screen
        name="ResetPasswordPage" 
        component={ResetPasswordPage}
      />
      <Stack.Screen
        name="RegisterPage" 
        component={RegisterPage}
      />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
