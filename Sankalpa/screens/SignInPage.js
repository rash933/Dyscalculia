import React from 'react';
import { StyleSheet, View } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';

const SignIn = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Background1 />


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Enter user credentials here </Text>
                <View style={styles.input} >
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Username</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                        // placeholder="Type something"

                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">Incorrect Username</Text>
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Password</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                        // placeholder="Type something"

                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">Incorrect Password</Text>
                    </View>
                    <View style={styles.textFeild}>

                    </View>

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' mode="contained" onPress={() => { navigation.navigate('TNavBar') }}>
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