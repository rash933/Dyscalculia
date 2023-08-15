import React, { useState, useEffect } from "react";
import { StyleSheet, View ,Keyboard } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const SignIn = ({ navigation, route }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSignIn = () => {
        setUsernameError("");
        setPasswordError("");

        // Validation for non-empty fields
        if (!username) {
            setUsernameError("Username cannot be empty.");
            return;
        }
        if (!password) {
            setPasswordError("Password cannot be empty.");
            return;
        }

        // Make the POST request to the server
        axios
            .post("http://192.168.1.3:8000/api/teachers/login", {

                Name: username,
                Password: password,
            })
            .then((response) => {
                const userData = response.data;
                // Check if the response data matches the entered username and password
                if (
                    userData.length === 1 &&
                    userData[0].Name === username &&
                    userData[0].Password === password
                ) {
                    // Sign-in successful, save the student ID to AsyncStorage
                    const TeacherID = userData[0]._id;
                    AsyncStorage.setItem('CurrentTeacherID', TeacherID).then(() => {

                        console.log("CurrentTeacherID saved successfully!");
                    }).catch((error) => {
                        console.error('Error saving TeacherID to AsyncStorage:', error);
                    });
                    // Navigate to the next screen (e.g., SNavBar)
                    navigation.navigate("TNavBar");
                } else {
                    // Sign-in failed, show error message
                    setUsernameError("Incorrect username or password.");
                }
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    }

    return (
        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Enter user credentials here </Text>
                <View style={styles.input} >
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Username</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            value={username}
                            onChangeText={setUsername}
                        // placeholder="Type something"

                        />
                        <Text
                            style={{ textAlign: "left", color: "#ec0b43" }}
                            variant="titleMedium"
                        >
                            {usernameError}
                        </Text>
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Password</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            value={password}
                            onChangeText={setPassword}
                        // placeholder="Type something"

                        />
                        <Text
                            style={{ textAlign: "left", color: "#ec0b43" }}
                            variant="titleMedium"
                        >
                            {passwordError}
                        </Text>
                    </View>
                    <View style={styles.textFeild}>

                    </View>

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' mode="contained" onPress={handleSignIn}>
                        Sign in
                    </Button>
                    <View style={styles.row} >
                        <Button style={styles.textButton} textColor='#000' mode='text' disabled={true} onPress={() => console.log('Pressed')}>
                            Forget Password ?
                        </Button>
                        <Button style={styles.textButton} textColor='#247AFA' mode='text' onPress={() => { navigation.navigate('EnterEmailAddressPage') }}>
                            Verify account
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
        height: 80,
        justifyContent:'center',
        alignItems: 'center',
        color: "#121212",
        fontSize: 24,
        margin: 20,
        // backgroundColor: '#ACEB98'

    },

    input: {

        textAlign: 'left',
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: '#A4C2A8',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    textFeild: {

        textAlign: 'left',
        height: 90,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: '#A2E3C4'

    },
    buttonBox: {
        height: 100,
        width: 300,
        // backgroundColor: '#000',
        justifyContent: 'space-around',
        alignItems: 'center',

        display: 'flex',
        flexDirection: 'column'

    },
    button: {
        width: 250, height: 50, justifyContent: 'center', alignItems: 'center',
    },
    row: {
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,


    },
    textButton: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }
});

export default SignIn;
