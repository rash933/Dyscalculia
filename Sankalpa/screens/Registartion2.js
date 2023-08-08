import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Divider, IconButton, Card, Text, Button, TextInput,RadioButton } from 'react-native-paper';
import Background1 from '../components/background1';
import { useNavigation } from '@react-navigation/core';

const Registation2 = ({ navigation, route }) => {
    const { userData } = route.params;
    const [stagestatus, setValue] = React.useState('true');
    const Next = () => {
        const updateUserData = { ...userData, stagestatus };
       
        console.log(updateUserData);
        // Navigate to the next screen (InputScreen2)
        navigation.navigate('Registation3', { updateUserData });
    };
    return (
        <View style={styles.container}>
            <Background1 />


            <View style={styles.InputBox}>
                <Text style={styles.headerText}>Registration</Text>
                <RadioButton.Group onValueChange={value => setValue(value)} value={stagestatus}>
                   

                <View style={styles.input} >
                        <Text style={{ textAlign: 'left', lineHeight: 50 }} variant="labelLarge">Student Educational Level </Text>
                       
                    <View style={styles.textFeild}>
                            <Card mode='outlined' style={{ width: 250, }}>
                                <RadioButton.Item label="Primary School"  labelStyle='titleMedium' value="false" />
                            </Card>
                    </View>
                    <View style={styles.textFeild}>
                            <Card mode='outlined' style={{ width: 250, }}>
                                <RadioButton.Item label="  Middle School  " labelStyle='titleMedium' value="true" />
                            </Card>
                    </View>
                        <View style={styles.textFeild}>
                         
                        </View>

                </View>
                </RadioButton.Group>

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

export default Registation2;
