import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, Dimensions, ScrollView,Image } from "react-native";
import { Button } from 'react-native-paper';
import PredictResultsBox from '../components/predictResultsBox';
import StudentChart from '../components/donutChart';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


const THomeScreen = () => {
    const navigation = useNavigation();
    const [teacherData, setTeacherData] = useState(null);
    const [studentCount, setStudentCount] = useState(0);
    const [highLevelStudentCount, setHighLevelStudentCount] = useState(0);
    const [highMediumLevelStudentCount, setHighMediumLevelStudentCount] = useState(0);
    const [lowLevelStudentCount, setLowLevelStudentCount] = useState(0);
    const [lowMediumLevelStudentCount, setLowMediumLevelStudentCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const storedTID = await AsyncStorage.getItem('CurrentTeacherID');
                if (storedTID) {
                    fetchAndUpdateData(storedTID);
                    fetchTeacherData(storedTID);
                } else {
                    console.error('No teacher ID found in AsyncStorage.');
                }
            } catch (error) {
                console.error('Error fetching teacher ID from AsyncStorage:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        fetchAndUpdateLoop();
    }, []);

    const fetchAndUpdateData = async (teacherID) => {
        try {
            const response = await axios.post("http://192.168.1.2:8000/api/markby", {
                TeacherId: teacherID,
            });

            const students = response.data;
            const latestPredictions = new Map();

            students.forEach((student) => {
                latestPredictions.set(student.StudentID, student.Prediction);
            });

            updatePredictionCounts(latestPredictions);
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    const updatePredictionCounts = (latestPredictions) => {
        const predictionLevelCounts = {
            "High": 0,
            "High Medium": 0,
            "Low": 0,
            "Low Medium": 0,
        };

        latestPredictions.forEach((latestPrediction, studentID) => {
            predictionLevelCounts[latestPrediction] += 1;
        });

        setStudentCount(latestPredictions.size);
        setHighLevelStudentCount(predictionLevelCounts["High"]);
        setHighMediumLevelStudentCount(predictionLevelCounts["High Medium"]);
        setLowLevelStudentCount(predictionLevelCounts["Low"]);
        setLowMediumLevelStudentCount(predictionLevelCounts["Low Medium"]);
    };

    const fetchAndUpdateLoop = async () => {
        const storedTID = await AsyncStorage.getItem('CurrentTeacherID');
        const teacherID = storedTID;
        const updateInterval = 5000; // Check for updates every 5 seconds

        while (true) {
            const latestPredictions = await fetchStudentData(teacherID);
            updatePredictionCounts(latestPredictions);

            await new Promise((resolve) => setTimeout(resolve, updateInterval));
        }
    };

    const fetchStudentData = async (teacherID) => {
        try {
            const response = await axios.post("http://192.168.1.2:8000/api/markby", {
                TeacherId: teacherID,
            });

            const students = response.data;
            const latestPredictions = new Map();

            students.forEach((student) => {
                latestPredictions.set(student.StudentID, student.Prediction);
            });

            return latestPredictions;
        } catch (error) {
            console.error("Error fetching student data:", error);
            return new Map();
        }
    };

    const fetchTeacherData = async (teacherID) => {
        try {
            const response = await axios.post('http://192.168.1.2:8000/api/teachersby', {
                _id: teacherID,
            });
            const teacher = response.data[0];
            setTeacherData(teacher);
        } catch (error) {
            console.error('Error fetching teacher data:', error);
        }
    };


    return (
        <View style={styles.container}>
        <ScrollView>
            <View>

                    <View style={styles.box1}>
                        <View style={styles.left}>
                            <Text style={styles.Header}>Welcome !</Text>
                            {teacherData && (
                            <Text style={styles.Name}>Hi, {teacherData.Name}</Text>
                            )}
                            <Text style={styles.text}>
                                Check the dyscalculia probability level of{"\n"}students
                            </Text>
                            <Button textColor='#ffff' buttonColor='#002060' mode="contained" onPress={() => { navigation.navigate('StudentList') }} >
                                Predict Results
                            </Button>
                        </View>
                        <View style={styles.right}>

                            <Image
                                style={styles.image}
                                source={require('../assets/image/progress-icon.png')}
                            />
                        </View>

                    </View>      
                <View>
                    <Text style={styles.subtitle}>
                        Student Results
                    </Text>
                </View>

                <View style={styles.box2}>


                    <View style={styles.box3}>

                        <Text style={styles.studentSkillLevel}>Student Skill Level</Text>
                            <View style={styles.box4}>
                                {isLoading ? (
                                    <View>
                                        <Text>Loading...</Text>
                                    </View>
                                ) : (
                                    <StudentChart
                                        totalCount={studentCount}
                                        highLevelCount={highLevelStudentCount}
                                        highMediumLevelCount={highMediumLevelStudentCount}
                                        lowLevelCount={lowLevelStudentCount}
                                        lowMediumLevelCount={lowMediumLevelStudentCount}
                                    />
                                )}
                            </View>

                        <Button mode="outlined" textColor='#000'  style={styles.margin} onPress={() => { navigation.navigate('ResultList') }}>
                            View Student List
                        </Button>

                    </View>
                    <View style={styles.box5}>

                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Low level{"\n"} student
                                </Text>
                                    <Text style={styles.smallText21}>{lowLevelStudentCount}</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Low Medium{"\n"} student
                                </Text>
                                    <Text style={styles.smallText22}>{lowMediumLevelStudentCount}</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    High Medium{"\n"} student
                                </Text>
                                    <Text style={styles.smallText24}>{highMediumLevelStudentCount}</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    High level{"\n"} student
                                </Text>
                                    <Text style={styles.smallText23}>{highLevelStudentCount}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    container: {
        flex: 1,
       justifyContent:'center',
       alignItems:'center'

    },
    box1: {
        width: 314,
        height: 187,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,
        marginTop: 23,
        marginLeft: 23,
        flexDirection: "row",
        alignSelf: 'flex-start'

    },
    left: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginTop: 12,
        marginLeft: 14
    },
    right: {
        alignSelf: 'flex-start',
        textAlign: 'right',
        marginTop: 12,
        marginRight: 14
    },
    Header: {
        color: "#121212",
        fontSize: 24,
        marginBottom: 5
    },
    Name: {
        color: "rgba(150,147,147,1)",
        fontSize: 15,
        marginBottom: 15
    },
    text: {
        color: "#121212",
        fontSize: 12,
        marginBottom: 15
    },

    image: {
        width: 120,
        height: 150,
        
        // backgroundColor: "#000",
    },


    subtitle: {
        fontSize: 23,
        marginLeft: 28,
        marginTop: 35,
        marginBottom: 5,
        color: "#121212",
        textAlign: 'left'
    },
    box2: {
        height: 300,
        flexDirection: "row",
        margin: 23,

        alignSelf: 'center'
    },
    box3: {
        width: 213,
        height: 263,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,

    },
    studentSkillLevel: {
        fontSize: 18,
        color: "#121212",
        marginTop: 19,
        marginLeft: 36
    },
    box4: {
        width: 138,
        height: 124,

        marginTop: 28,
        marginLeft: 34
    },

    box5: {
        width: 96,
        height: 263,
        marginLeft: 7,
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'stretch',
        justifyContent: 'space-between'
    },

    group: {
        width: 96,
        height: 54,
        textAlign: 'center',
        alignSelf: 'center'
    },
    box6: {
        width: 96,
        height: 54,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 6,
            height: 6
        },
        elevation: 48,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallText: {
        textAlign: 'center',
        color: "#121212",
        fontSize: 12,
    },
    chartText: {
        textAlign: 'center',
        color: "#121212",
        fontSize: 12,

    },
    smallText21: {
        fontSize: 19,
        color: "#A34040",
        marginTop: 3,

    },
    smallText22: {
        fontSize: 19,
        color: "#5040A3",
        marginTop: 3,

    },
    smallText23: {
        fontSize: 19,
        color: "#DFAA21",
        marginTop: 3,

    },
    smallText24: {
        fontSize: 19,
        color: "#24DA20",
        marginTop: 3,

    },

});
export default THomeScreen;