import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton,TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';




const StudentMarks = ({ navigation, route }) => {
    const { studentId } = route.params;
    const [performancem, setPerformanceMarks] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // Function to validate performance marks input
    const validateInput = () => {
        const marks = parseFloat(performancem);
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
            const Mlist1 = { studentid: route.params.studentId, performancem };
            console.log('Mlist1:', Mlist1); // <-- Print Mlist1 in the console
            navigation.navigate('StudentMarks2', { Mlist1 });
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' In-class activity details'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.2} color="#002060" />
                </View>

                <View style={styles.box3}>
                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">
                        Enter student’s class performance marks
                    </Text>
                    <View style={styles.input}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">
                            Performance marks
                        </Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={performancem}
                            onChangeText={(text) => setPerformanceMarks(text)}
                            keyboardType="numeric"
                        />
                        {errorMsg ? (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">
                                {errorMsg}
                            </Text>
                        ) : null}
                    </View>

                    <View style={styles.note}>
                        <Text variant="titleMedium">** Please enter correct input for predict student skill level </Text>
                    </View>
                </View>

                <View style={styles.box4}>
                    <Button textColor="#ffff" onPress={handleContinue} mode="contained">
                        CONTINUE
                    </Button>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    card: { marginTop: 15,},
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
        height: 30,

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
        alignItems:'flex-start',
        textAlign: 'left',
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default StudentMarks;