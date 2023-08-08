import React, { useState, useEffect } from "react";
import { StyleSheet, View ,Keyboard} from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';

const EnterEmailAddressPage = () => {
    const navigation = useNavigation();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

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

    const handleNextButtonPress = () => {
        if (!email) {
            setError('Email address cannot be empty.');
        } else if (!validateEmail(email)) {
            setError('Invalid email address.');
        } else {
            setError(''); // Reset the error message
            navigation.navigate('VerifyCode', { email });
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}

            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Enter your Email address</Text>
                <View style={styles.input}>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">
                            E-mail
                        </Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={email}
                            onChangeText={(text) => setEmail(text)}
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
width:150,


    },
    textButton: {
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    }
});

export default EnterEmailAddressPage;
