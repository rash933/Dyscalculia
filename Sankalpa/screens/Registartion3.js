import React, { useState, useEffect } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Registation3 = ({ navigation, route }) => {
    const { updateUserData } = route.params;
    const [email, setemail] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordFormatError, setPasswordFormatError] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [emailError, setEmailError] = useState(false);


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


    const handleEmailChange = (text) => {
        setemail(text);
        // Check for a valid email format using a regular expression
        const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailError(!emailFormat.test(text));
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        // Check for both letters and numbers in the password
        const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        setPasswordFormatError(!passwordFormat.test(text));
    };

    const handleConfirmPasswordChange = (text) => {
        setconfirmPassword(text);
        // Check if password and confirm password match
        setPasswordMatchError(text !== password);
    };



    const Next = async () => {

        const finalUserData = { ...updateUserData, password, email };

        global.UserData = finalUserData;

        console.log(finalUserData);

        if (finalUserData.role === 'false') {

            try {
                const response = await axios.post('http://192.168.1.3:8000/api/teacher/register', finalUserData);
                const TeacherID = response.data.id;
                console.log('Success add a teacher:', TeacherID);

                // Save TeacherID in cache
                // await AsyncStorage.setItem('TeacherID', JSON.stringify(TeacherID));
                // console.error('TeacherID added to cache ');
                navigation.navigate('StSignIn', { finalUserData });
            } catch (error) {
                console.error('Error posting data:', error);
            }
        } else {

            try {
                const studentRegi = {
                    name: finalUserData.name,
                    email: finalUserData.email,
                    password:finalUserData.password,
                    dob:finalUserData.dob,
                    role:finalUserData.role,
                    stagestatus:finalUserData.stagestatus,
                    teacherid:"0",
                   levelstatus:"0",
                    gender:"other",
                    parentq:"0",
                    iq:"0",
                    quiz:"0",
                };
                console.log(studentRegi);
                
                const response = await axios.post('http://192.168.1.3:8000/api/student/register', studentRegi);
                console.log('Success add student:', response.data); 
              
              const  StudentID = response.data.id;

                // Save Student ID in cache
                // await AsyncStorage.setItem('StudentID', JSON.stringify(StudentID));
                // console.error('StudentID added to cache '); 

                navigation.navigate('StSignIn', {  studentRegi });
            } 
            catch (error) {
                console.error('Error posting data:', error);
               
            }

        }


        if (password !== confirmPassword) {
            // Passwords don't match, show error message
            setPasswordMatchError(true);
        } else if (!passwordFormatError) {
            // Password format is incorrect, show error message
            setPasswordFormatError(true);
        } else {


        }
        // Check if role is false

    };



    return (
        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Registration</Text>
                <View style={styles.input} >
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }}>Email Address</Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={email}
                            onChangeText={handleEmailChange}
                        />
                        {emailError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>Invalid Email</Text>
                        )}
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Password</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            secureTextEntry
                            value={password}
                            onChangeText={handlePasswordChange}

                        />
                        {passwordFormatError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>
                                Password: 6+ chars, letters & numbers
                            </Text>
                        )}
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Confirm Password</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            value={confirmPassword}
                            onChangeText={handleConfirmPasswordChange}
                        // placeholder="Type something"

                        />
                        {passwordMatchError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>Password doesn't match</Text>
                        )}
                    </View>

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' mode="contained" onPress={Next}>
                        Next
                    </Button>
                    <View style={styles.row} >

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

export default Registation3;
