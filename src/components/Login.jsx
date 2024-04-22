import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default props =>{
    return(
        <View style={{flex:1, marginLeft: 20, marginRight: 20, justifyContent: 'space-around', backgroundColor: '#f0f0f0'}}>
            <View style={styleLogin.titleView}>
                <Text style={styleLogin.titleGeral}>Fox<Text style={styleLogin.title2}>Hub</Text></Text>
            </View>

            <View>
                <Text style={styleLogin.title}>Bem vindo de volta</Text>
                <Text>Faça login para continuar</Text>
            </View>

            <View>
                <View style={styleLogin.view}> 
                    <Ionicons name="person-outline" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Nome"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
                </View>

                <View style={styleLogin.view}> 
                    <MaterialIcons name="alternate-email" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Email"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
                </View>

                <View style={styleLogin.view}> 
                    <Ionicons name="lock-closed-outline" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Senha"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
                </View>
            </View>

            <TouchableOpacity style={styleLogin.btn}>
                <View>
                    <Text style={styleLogin.txtBnt}>Acessar</Text>
                </View>
            </TouchableOpacity>

            <Text style={styleLogin.txt}>Ou continue com...</Text>

            <View style={styleLogin.cad}>
                <TouchableOpacity>
                    <View style={styleLogin.linha}>
                        <Image style={styleLogin.imgCad} source={require('./img/facebook1.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styleLogin.linha}>
                        <Image style={styleLogin.imgCad} source={require('./img/google1.png')}/>
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={styleLogin.txt}>Já possui uma conta? <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')}><Text style={{color: '#f51313'}}>Faça login com sua conta existente</Text></TouchableOpacity></Text>
        </View>
    )
}

const styleLogin = StyleSheet.create(
    {
        img:{
            width: 50,
            height: 50
        },
        titleView:{
            flexDirection: 'row',
        },
        titleGeral:{
            fontSize: 30,
            fontWeight:'bold',
            
        },
        title2:{
            color:'#47abf5'
        },
        view:{
            alignItems:'center',
            flexDirection:`row`,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        btn:{
            backgroundColor: '#47abf5',
            padding: 20,
            borderRadius: 50,
            
        },
        txtBnt:{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        cad:{
            alignItems:'center',
            flexDirection:`row`,
            justifyContent: 'space-between',
            margin: 20
        },
        imgCad:{
            height:30,
            width:30,
        },
        linha:{
            borderWidth: 1,
            borderColor: '#8d9296',
            padding: 10,
            paddingLeft: 50,
            paddingRight: 50,
            borderRadius: 20
        },
        txt:{
            textAlign:'center',
            
            
        },
        title:{
            fontSize:30,
            color: '#000000',
            margin: 0
        }
    }
)