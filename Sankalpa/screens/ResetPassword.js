import React, { useState, useEffect } from "react";
import { StyleSheet, View,Keyboard,Alert } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';

import axios from 'axios';

const ResetPwd = ({ route }) => {
    const { email } = route.params;
    const navigation = useNavigation();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [userId, setUserId] = useState(null);

    const checkEmailInApi = async () => {
        const endpoints = [
            'http://192.168.1.3:8000/api/studentby',
            'http://192.168.1.3:8000/api/teachersby'
        ];

        for (const endpoint of endpoints) {
            try {
                const response = await axios.post(endpoint, { Email: email });
                const data = response.data;

                if (data && Array.isArray(data) && data.length > 0) {
                    // Email exists in this endpoint
                    console.log(`User with email ${email} found in ${endpoint}`);
                    setUserId(data[0]._id); // Assuming the user ID field is '_id', change it if needed
                    setPasswordMatchError(false); // Clear password match error if any
                    return endpoint; // Return the endpoint where the user was found
                }
            } catch (error) {
                console.error('Error checking email:', error);
            }
        }

        return null; // If no user found in any endpoint
    };

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

    useEffect(() => {
        const checkUserExistence = async () => {
            const emailEndpoint = await checkEmailInApi(); // Wait for the email check to complete
            if (!emailEndpoint) {
                // User does not exist, show alert or perform any other actions
                Alert.alert('User Not Found', 'The provided email does not exist. Please try again.');
                // You can navigate back to the previous screen or take any other action.
            }
        };

        checkUserExistence();
    }, []);

    const handleNextButton = async () => {
        if (newPassword !== confirmPassword) {
            setPasswordMatchError(true);
        } else {
            setPasswordMatchError(false);
            const emailEndpoint = await checkEmailInApi(); // Wait for the email check to complete
            if (emailEndpoint) {
                await handleUpdatePassword(emailEndpoint); // Call the function to update the password
            }
        }
    };

    const handleUpdatePassword = async (emailEndpoint) => {
        if (userId) {
            try {
                const endpoint = emailEndpoint.includes('teachersby')
                    ? 'http://192.168.1.3:8000/api/teacher/update'
                    : 'http://192.168.1.3:8000/api/student/update';

                const response = await axios.put(`${endpoint}/${userId}`, { password: newPassword });
                console.log('Password updated successfully!');
                navigation.navigate('FirstPage');
                // You can perform any additional actions after updating the password
                // For example, you can navigate to a success page or display a success message.
            } catch (error) {
                console.error('Error updating password:', error);
                // Handle errors if the password update fails
            }
        } else {
            console.error('User ID not found. Unable to update password.');
        }
    };

    const isPasswordStrong = (password) => {
        // Check if the password contains at least one uppercase letter, one lowercase letter, one number, and one special character
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    };

    return (
        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}

            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Reset your password</Text>
                <View style={styles.input}>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">
                            New Password
                        </Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            secureTextEntry={true}
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        {newPassword && !isPasswordStrong(newPassword) && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">
                                Not a strong password
                            </Text>
                        )}
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">
                            Confirm Password
                        </Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        {passwordMatchError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">
                                Passwords don't match
                            </Text>
                        )}

                    </View>
                </View>

                <View style={styles.buttonBox}>
                    <Button style={styles.button} textColor="#ffff" mode="contained" onPress={handleNextButton}>
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

export default ResetPwd;
