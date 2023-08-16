import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import Background2 from '../components/background2';
import { useNavigation } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'
import { BackHandler } from 'react-native';

const FirstPage = () => {

    const navigation = useNavigation();
    useEffect(() => {
        // Lock the screen orientation to landscape
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

        // Handle back button press
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Exit the app when the back button is pressed
            BackHandler.exitApp();
            return true; // Prevent default behavior (going back to the previous screen)
        });

        return () => {
            // Remove the back button event listener when the component unmounts
            backHandler.remove();
        };
    }, []); 
    return (
        <View style={styles.container}>
            <Background2 />


            <View style={styles.InputBox}>

                <View style={styles.input} >
                    <Image
                        source={require("../assets/image/image2.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' mode="contained" onPress={() => { navigation.navigate('StSignIn') }}>
                        <Text style={styles.textButton} variant="bodyLarge">Student Sign In</Text>

                    </Button>
                    <View style={styles.row} >
                        <Text style={styles.textButton} variant="bodyLarge">or</Text>
                        
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.textButton} variant="bodyLarge">New user? </Text>
                        <Button style={styles.textButton} textColor='#247AFA' mode='text' onPress={() => { navigation.navigate('Registation1') }}>
                            <Text style={styles.textButton} variant="bodyLarge"> Register</Text>
                        </Button>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.textButton} variant="bodyLarge">Teacher </Text>
                        <Button style={styles.textButton} textColor='#247AFA' mode='text' onPress={() => { navigation.navigate('SignIn') }}>
                            <Text style={styles.textButton} variant="bodyLarge">SignIn</Text>
                        </Button>
                    </View>
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        height: 380,
        width: 380,
    },


    InputBox: {
        height: 500,
        // backgroundColor: '#5A5A66',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20,
        display: 'flex',
        flexDirection: 'column'

    },
    headerText: {
        height: 50,

        color: "#121212",
        fontSize: 24,
        margin: 20,
        // backgroundColor: '#ACEB98'

    },

    input: {
resizeMode:'contain',
        textAlign: 'left',
        marginTop:10,
        height: 180,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: '#A4C2A8',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'column'
    },

    buttonBox: {
        height: 110,
       
        // backgroundColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 12,
        display: 'flex',
        flexDirection: 'column'

    },
    button: {
        width: 250, height: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 12
    },
    row: {
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      
        marginTop: 24

    },
    textButton: {
        fontSize: 18,
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }
});


export default FirstPage;