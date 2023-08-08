import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Divider, IconButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const Notifi = () => {
    const navigation = useNavigation();
    const [responseData, setResponseData] = useState([]);
    const [studentID, setStudentID] = useState('');
    const [counter, setCounter] = useState(1);

    // Fetch data from API using the CurrentstudentID from AsyncStorage
    useEffect(() => {
        const fetchStudentIDFromCache = async () => {
            try {
                const studentIDFromCache = await AsyncStorage.getItem('CurrentstudentID');
                if (studentIDFromCache) {
                    setStudentID(studentIDFromCache);
                    fetchData(studentIDFromCache);
                    console.log(studentIDFromCache);
                }
            } catch (error) {
                console.error('Error fetching student ID from cache:', error);
            }
        };

        fetchStudentIDFromCache();
    }, []);

    const fetchData = async (studentID) => {
        const apiUrl = 'http://192.168.1.2:8000/api/markby';
        const requestData = {
            StudentID: studentID,
        };

        try {
            const response = await axios.post(apiUrl, requestData);
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to navigate to another screen with the _id as parameter
    const navigateToNextScreen = (_id) => {
  
        navigation.navigate('NotifiView', { _id });
    };
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Notification 1'} />
            <View style={styles.box1}>

                <View style={styles.box3}>
                    <ScrollView>
                        {responseData.map((item,index) => (
                            <Card key={item._id} mode='outlined' style={styles.card}>
                                <Card.Title title={`Notification ${index + 1}`} />
                                <Divider />
                                <Card.Content>
                                    <Text variant="bodyMedium">
                                        Attandence: {item.AttandenceM}, Prediction: {item.Prediction}
                                    </Text>
                                </Card.Content>
                                <Card.Actions>
                                    <Button
                                        textColor='#ffff'
                                        onPress={() => navigateToNextScreen(item._id)}
                                        mode='contained'
                                    >
                                        View
                                    </Button>
                                </Card.Actions>
                            </Card>
                        ))}
                       

                    </ScrollView>
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
        marginTop: 18,
        marginLeft: 23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
    },
    box2: {
        height: 50
    },
    box3: {
        marginTop: 30,

        height: 550

    },
    Headding: {
        fontSize: 19,

    },



});

export default Notifi;