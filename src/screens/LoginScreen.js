import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, View, Button, ImageBackground, TextInput,Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons';

let ITEM_WIDTH = Dimensions.get('window').width;

const LoginScreen = ({ route, navigation }) => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const setData = async () => {
        if (username.length == 0 || password.length == 0){
            Alert.alert('WARNING: Please write your username!');
        }
        else {
            try {
                let value = await AsyncStorage.getItem('UserData');
                if (value != null) {
                    let userPre = JSON.parse(value);
                    console.log("aqui: ", userPre.Name);
                    console.log("aqui: ", userPre.Password);
                    console.log("aqui: ", username);
                    console.log("aqui: ", password);
                    if (userPre.Name == username){
                        if (userPre.Password != password){
                            Alert.alert('WARNING: This is not your password! Please try again!');
                        }
                        else{
                            var user = {
                                Name: username,
                                Password: password
                            }
                            //converte em string para poder passar
                            await AsyncStorage.setItem('UserData', JSON.stringify(user));
                            navigation.navigate("Welcome")
                        }
                    }
                    else{
                        var user = {
                            Name: username,
                            Password: password
                        }
                        await AsyncStorage.setItem('UserData', JSON.stringify(user));
                        navigation.navigate("Welcome")
                    }
                }
            } catch (error) {
                console.log(console.error);
            }
        }
    }

    //caso já tenha feito login
    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate("Welcome")
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.darkerimage}>

                <Text style = {styles.textSubTitle}> Sign In </Text>
                    <TextInput style = {styles.textInput} placeholder = "Enter Your Name" onChangeText = {(value) => setUsername(value)}/>

                <TextInput style = {styles.textInput} placeholder = "Enter Your Password" onChangeText = {(value) => setPassword(value)} secureTextEntry = {true}/>
                    <TouchableOpacity style={styles.buttom} onPress={() => {setData()}}>
                        
                <Text style={styles.textButton}>Confirm</Text>

                </TouchableOpacity>
        
            </View>
        </ImageBackground>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
    
        },
        textSubTitle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 32,
            alignSelf: 'center',
            marginHorizontal: 20,
            marginTop: 150,
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowRadius: 3
        },
        text: {
            fontSize: 15,
            color: 'white',
            marginTop: 10

        },
        textInput: {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10, 
            height: 40, 
            width: '50%', 
            alignSelf: 'center',
            marginTop: 20,
            textAlign: 'center'
        },
        imageBackground: {
            flex: 1,        
        },
        darkerimage: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',            
            alignItems: 'center',
        },
        textButton: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
        },
        buttom: {
            width: ITEM_WIDTH/2,
            height: 40,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            backgroundColor: '#12AEB7',
            alignSelf: 'center'
        }
    })

export default LoginScreen