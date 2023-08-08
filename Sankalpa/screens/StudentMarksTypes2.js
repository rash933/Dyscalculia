
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import React, { useState } from 'react';

const StudentMarks2 = ({ navigation, route }) => {
   

    // Get Mlist1 from the previous screen (StudentMarks)
    const { Mlist1 } = route.params;

    const [testm, setTestm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Function to validate test exam marks input
    const validateInput = () => {
        const marks = parseFloat(testm);
        if (isNaN(marks) || marks < 0 || marks > 100) {
            setErrorMsg('Marks range should be between 0 to 100');
            return false;
        }
        setErrorMsg('');
        return true;
    };

    // Function to handle navigation to the next screen
    const handleContinue = () => {
        if (validateInput()) {
            const Mlist2 = { ...Mlist1, testm };
            console.log(Mlist2); // <-- Print Mlist2 in the console
            navigation.navigate('StudentMarks3', { Mlist2 });
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' In-class activity details'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.3} color='#002060' />
                </View>

                <View style={styles.box3}>
                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">
                        Enter student’s class Test exam marks
                    </Text>
                    <View style={styles.input}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Test exam marks</Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={testm}
                            onChangeText={(text) => setTestm(text)}
                            keyboardType="numeric"
                        />
                        {errorMsg ? (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">
                                {errorMsg}
                            </Text>
                        ) : null}
                    </View>

                    <View style={styles.note}>
                        <Text variant="titleMedium">** Please enter correct input for predict student skill level</Text>
                    </View>
                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={handleContinue} mode='contained'>CONTINUE</Button>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    card: { marginTop: 15 },
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 28,
        marginLeft: 23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    box2: {
        height:30,

    },
    box8: {
        height: 35
        , marginBottom: 15,

    },
    box3: {
        marginTop: 5,
        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: 500,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

    box4: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        position: 'relative'

    },

    Headding: {
        fontSize: 19,

    },

    note: {
        marginBottom: 20

    },
    input: {
        marginTop: 5,
        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        textAlign: 'left',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default StudentMarks2;