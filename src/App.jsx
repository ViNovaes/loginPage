import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from './components/Cadastro';
import Login from './components/Login'

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            {/* <Cadastro/> */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Cadastro' component={Cadastro} options={{
                        headerTitle:"", headerStyle:{backgroundColor:"#f0f0f0"}, headerTransparent:100
                    }}/>
                    <Stack.Screen name='Login' component={Login} options={{
                        headerTitle:"", headerStyle:{backgroundColor:"#f0f0f0"}, headerTransparent:100
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

