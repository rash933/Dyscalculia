import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const StuResults = () => {
    const navigation = useNavigation();
    const [value, setValue] = React.useState('Good');
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={' Skill Level Results '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.8} color='#21005D' />
                </View>

                <View style={styles.box3}>
                    <ScrollView>
                        <Text style={{ textAlign: 'center' }} variant="headlineLarge">Student 
                            Skill Level predication Report</Text>
                    <View style={styles.input} >

                            <Text style={{ marginBottom: 1, marginTop: 19 }} variant="headlineSmall">Student Name </Text>
                            <Text style={{ marginBottom: 25 }} variant="titleMedium">Stage Id (Primary / Secondary ) </Text>

                        <View style={styles.group} >
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">Class Test exam Marks :</Text>
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">90</Text>
                        </View>
                        <View style={styles.group} >
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">Class performance Marks : </Text>
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">90</Text>
                        </View>
                        <View style={styles.group} >
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">Class Assignment Marks  :</Text>
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">78</Text>
                        </View>
                        <View style={styles.group} >
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">Class Attendance details :</Text>
                                <Text style={{ marginBottom: 12 }} variant="titleMedium">98</Text>
                        </View>
                        <View style={styles.group} >
                                <Text style={{ marginBottom: 12, fontWeight: 'bold' }} variant="titleLarge">Skill Level Result  :</Text>
                            <Text style={{ marginBottom: 12, color: '#ec0b43' }} variant="titleLarge"> Low Level</Text>
                        </View>

                    </View>


                    <View style={styles.note}>
                            <Text variant="titleMedium">** Make sure to leave a message before end the predication process.</Text>
                    </View>
                       

                    </ScrollView>
                </View>

                <View style={styles.box4}>
                    <View style={styles.Bgroup} >
                        <Button textColor='#ffff' mode='contained' onPress={() => { navigation.navigate('TFeeddback') }}>Send message </Button>
                        <Button textColor='#ffff' mode='contained' onPress={() => { navigation.navigate('TNavBar') }}>End Process </Button>
                    </View>

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

});

export default StuResults;