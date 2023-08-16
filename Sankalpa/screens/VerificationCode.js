import React, { useState, useEffect } from "react";
import { StyleSheet, View,Keyboard } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

const VerifyCode = ({ navigation, route }) => {
    const { email } = route.params;
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        // Send API request as soon as the component mounts
        sendOTP();

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const sendOTP = async () => {
        if (!email) {
            console.error('No email found in route parameters.');
            return;
        }

        try {
            const API_URL = 'http://192.168.1.2:8000/api/mailsend';
            const randomNumber = Math.floor(100000 + Math.random() * 900000);
            const requestBody = {
                email: email,
                number: randomNumber,
            };
            console.log(requestBody);
            const response = await axios.post(API_URL, requestBody);

            if (response.data) {
                setRandomNumber(randomNumber); // Store the sent random number
                console.log('OTP sent successfully:', randomNumber);
            } else {
                console.error('Failed to send OTP:', response.data.error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleNextButtonPress = () => {
        if (!otp) {
            setError('OTP cannot be empty.');
            return;
        }

        if (parseInt(otp, 10) === randomNumber) {
            setError(''); // Reset the error message
            navigation.navigate('ResetPwd', { email });
        } else {
            setError('Invalid OTP.');
        }
    };

    return (
        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}

            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Verification Code</Text>

                <View style={styles.input}>
                    <View style={styles.textFeild}>
                        <Text variant="titleSmall" color="#969393">
                            Enter the 6-digit OTP code we’ve sent to your email
                        </Text>
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">
                            OTP
                        </Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={otp}
                            onChangeText={(text) => setOtp(text)}
                        />
                        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
                    </View>
                </View>

                <View style={styles.buttonBox}>
                    <Button style={styles.button} textColor="#ffff" mode="contained" onPress={handleNextButtonPress}>
                        Next
                    </Button>
                    <View style={styles.row}></View>
                </View>
            </View>
        </View>
    );
};


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
        height: 50,

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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 150,


    },
    textButton: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }
});

export default VerifyCode;
