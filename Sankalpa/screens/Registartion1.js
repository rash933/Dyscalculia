import React, { useState, useEffect } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput, PaperProvider, RadioButton } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';


const Registation1 = ({ navigation }) => {

    const [role, setValue] = React.useState('true');
    const [dob, setdob] = useState('');
    const [name, setname] = useState('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [dobError, setDobError] = useState(false);
    const [nameError, setNameError] = useState(false);


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

    const handleNameChange = (text) => {
        setname(text);
        // Check for letters only using a regular expression
        const lettersOnly = /^[A-Za-z]+$/;
        setNameError(!lettersOnly.test(text));
    };

    const handleDOBChange = (text) => {
        setdob(text);
        // Check for the correct format using a regular expression
        const dobFormat = /^\d{4}-\d{2}-\d{2}$/;
        setDobError(!dobFormat.test(text));
    };
    
    const Next = () => {
        // Save the inputs in a global state or context
        // You can use Redux, context, or a state management library for this purpose
        const userData = { role, dob, name };
        console.log(userData);
        // Navigate to the next screen (InputScreen2)
        navigation.navigate('Registation2', { userData });
    };

    return (

        <View style={styles.container}>
            {!isKeyboardVisible && <Background1 />}


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Registration</Text>
                <View style={styles.input} >
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">User Role</Text>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={role} >

                            <View style={{ width: 250, display: 'flex', flexDirection: 'row', justifyContent: '', borderColor: '#000', borderWidth: 1, borderRadius: 4 }}>
                                <RadioButton.Item label="Student" value="true" position='leading' />
                                <RadioButton.Item label="Teacher" value="false" position='leading' />
                            </View>
                        </RadioButton.Group>

                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Date Of Birth</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            value={dob}
                            onChangeText={handleDOBChange}
                        // placeholder="Type something"

                        />
                        {dobError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>
                                Incorrect format ("xxxx-xx-xx")
                            </Text>
                        )}

                    </View>

                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }}>Name of the user</Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={name}
                            onChangeText={handleNameChange}
                        />
                        {nameError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>Letters Only</Text>
                        )}
                    </View>

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' buttonColor='#002060' mode="contained" onPress={Next}>
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

export default Registation1;
