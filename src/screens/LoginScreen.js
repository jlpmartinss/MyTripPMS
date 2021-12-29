import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState} from 'react';
import { Alert, StyleSheet, View, Button, ImageBackground, TextInput,Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons';

let ITEM_WIDTH = Dimensions.get('window').width;

const LoginScreen = ({ route, navigation }) => { 
    const [username, setUsername] = useState('')
    //const[password, setPassword] = useState(null)

    const entrar = () => {
        console.log("entrou")
        console.log(username)
    }
    const setData = async () => {
        if (username.length == 0){
            Alert.alert('WARNING: Please write something!');
        }
        else {
            try {
                await AsyncStorage.setItem('NewUser', username);
                //navigation.navigate("Welcome")
            } catch (error) {
                console.log(console.error);
            }
        }
        
    }

    return (
        <ImageBackground blurRadius={5} source={require("../../assets/welcomeimage/welcome.jpg")} resizeMode="cover" style={styles.imageBackground}>
            <View style = {styles.container}>
                <Text style = {styles.textSubTitle}> Sign In </Text>
                <Text style = {styles.text}> Enter Your Name. </Text>

                <TextInput style = {styles.textInput}
                    placeholder = "Username"
                    //eftIcon ={{type: 'font-awesome', name: 'envelope'}}
                    onChangeText = {username => setUsername(username)}/>
                    {entrar()}
                    
                    {/*
                <TextInput style = {styles.textInput}
                    placeholder ='Password'
                    leftIcon = {{type: 'font-awesome', name: 'lock'}}
                    onChangeText = {value => setPassword(value)}
                    secureTextEntry = {true}/>*/}

                <TouchableOpacity style={styles.buttom} onPress={() => {username.length != 0 ? setData() && navigation.navigate("Welcome"):Alert.alert('WARNING: Please write something!');}}>
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
        imageBackground: {
            flex: 1
        },
        textSubTitle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 32,
            alignSelf: 'center',
            marginHorizontal: 20,
            marginTop: 150,
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowRadius: 5
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
        textButton: {
            color: 'white',
            fontSize: 18,
        },
        buttom: {
            width: ITEM_WIDTH/2,
            height: 40,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            backgroundColor: '#176cff',
        }

    })

export default LoginScreen