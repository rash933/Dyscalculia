import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import axios from 'axios';

const VerifyStudent = ({ navigation, route }) => {
    const { studentId } = route.params;
    const [studentData, setStudentData] = useState(null); // This will hold the student data
    const [predictionHistory, setPredictionHistory] = useState([]);
      const [showPredictions, setShowPredictions] = useState(false);
    // Function to fetch student data by ID
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.post('http://192.168.1.2:8000/api/studentby', {
                    _id: studentId,
                });
                setStudentData(response.data[0]);

                // Assuming you have another API endpoint to fetch prediction history
                const predictionResponse = await axios.post('http://192.168.1.2:8000/api/markby', {
                    StudentID: studentId,
                });
                setPredictionHistory(predictionResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStudentData();
    }, [studentId]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Verify student details'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.1} color="#002060" />
                </View>

                <View style={styles.box3}>
                    {studentData && (
                        <Card mode="outlined" style={styles.card}>
                            <Card.Title
                                title={studentData.Name}
                                subtitle={studentData.StageStatus ? 'Middle School' : 'Primary School'}
                                left={(props) => <Avatar.Text {...props} label={studentData.Name[0]} />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />

                            <Card.Content>
                                <Text variant="headlineMedium">Details</Text>
                                <Text variant="titleMedium">Birth Date:  {formatDate(studentData.Dob)}</Text>
                                <Text variant="titleMedium">Email:  {studentData.Email}</Text>
                                <Text variant="titleMedium">IQ Results :  {studentData.Iq}</Text>
                                <Text variant="titleMedium">Child Behavior Marks:  {studentData.ParentQ}</Text>
                                
                                <Button onPress={() => setShowPredictions(!showPredictions)}>Show Predictions history</Button>
                                
                                {showPredictions && (
                                    <View style={styles.box5}>
                                        <Text variant="titleLarge" style={{ marginTop: 20 }}>Prediction History</Text>
                                    <ScrollView>
                                        {/* ... Other card content here ... */}
                                    
                                        {predictionHistory.map((prediction, index) => (
                                            <Text key={prediction._id} variant="titleMedium">
                                                Prediction no. {index + 1}: {prediction.Prediction}
                                            </Text>
                                        ))}
                                    </ScrollView>
                                    </View>
                                )}

                                {/* Display any other student details here */}
                            </Card.Content>
                        </Card>
                    )}
                    <View style={styles.note}>
                        <Text variant="titleMedium">** Please confirm the student details before starting the prediction</Text>
                    </View>
                </View>

                <View style={styles.box4}>
                    <Button textColor="#ffff" mode="contained" onPress={() => { navigation.navigate('StudentMarks', { studentId }) }}>
                        Confirm Details
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
        textAlign: 'center',
        
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
        
        textAlign: 'center',
        height: 500,
       
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
       marginBottom:20

    },
    box5: {
        
        marginTop: 10,
       height:100,

    },

});

export default VerifyStudent;