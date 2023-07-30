import React from 'react';
import { StyleSheet, View } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';

const Registation1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Background1 />


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Registration</Text>
                <View style={styles.input} >
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Student Name</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            // placeholder="Type something"
                           
                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="labelLarge"> Letters only</Text>
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Date Of Birth</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            // placeholder="Type something"
                           
                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="labelLarge">Incorrect format ( "xxxx-xx-xx")</Text>
                    </View>
                    <View style={styles.textFeild}>
                        <Text style={{ textAlign: 'left' }} variant="labelLarge">Name of the Parent</Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            // placeholder="Type something"
                           
                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="labelLarge">Letters Only</Text>
                    </View>

                </View>

                <View style={styles.buttonBox}  >
                    <Button style={styles.button} textColor='#ffff' mode="contained" onPress={() => { navigation.navigate('Registation2') }}>
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
