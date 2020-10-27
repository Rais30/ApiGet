import *as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home/Home'
import login from '../Screens/LogIn/LogIn'


const Stack =createStackNavigator()

const Navigation = () => {
    return (
<NavigationContainer>
    <Stack.Navigator 
    initialRouteName="SignIn"
    screenOptions={{
        headerShown:false,
        animationEnabled:false
    }}>
        <Stack.Screen name="SignIn" component={login}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
</NavigationContainer>
    )
}

export default Navigation