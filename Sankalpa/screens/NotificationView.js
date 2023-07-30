import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';

const NotifiView = () => {

  
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Notification 1'} />
            <View style={styles.box1}>
               
                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Student
                        Skill Level predication Report </Text>
                    <View style={styles.input} >

                        <Text style={{ marginBottom: 1,fontWeight:'bold' }} variant="titleMedium">Student Name </Text>
                        <Text style={{ marginBottom: 15 }} variant="labelLarge">Stage Id (Primary / Secondary ) </Text>

                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Class Test exam Marks :</Text>
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">323232323232</Text>
                        </View>
                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Class performance Marks : </Text>
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">323232323232</Text>
                        </View>
                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Class Assignment Marks  :</Text>
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">323232323232</Text>
                        </View>
                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Class Attendance details :</Text>
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">323232323232</Text>
                        </View>
                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10, fontWeight: 'bold' }} variant="titleMedium">Skill Level Result  :</Text>
                            <Text style={{ marginBottom: 10, color: '#ec0b43' }} variant="titleLarge"> Low Level</Text>
                        </View>
                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Teacher Feedback  :</Text>
                            <View style={{ height: 60, width: 150 }}>
                                <Text style={{ marginBottom: 10 }} variant="labelLarge"  >323sssssssssssssssssssssssssssssssssssssssssssssssssssssss55555555555555555555555555555232323232</Text>
                            </View>

                        </View>

                        <View style={styles.group} >
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">Date and Time  :</Text>
                            <Text style={{ marginBottom: 10 }} variant="labelLarge">323232323232</Text>
                        </View>
                    </View>


                   


                </View>

                <View style={styles.box4}>
                  
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
        height: 350,
        width: 250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',
        alignContent: 'space-around'
    },
    Bgroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent: 'space-around'
    },
    Feedinput: {

        display: 'flex',
        flexdirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        textAlign: 'left',
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default NotifiView;