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
        // Fetch all students with TeacherID: "0"
        async function fetchData() {
            try {
                const storedTID = await AsyncStorage.getItem('CurrentTeacherID');
                if (storedTID) {
                    fetchStudentData(storedTID);
                    fetchTeacherData(storedTID);
                } else {
                    console.error('No teacher ID found in AsyncStorage.');
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching teacher ID from AsyncStorage:', error);
                setIsLoading(false);
            }
        }

        fetchData();
       
  
    }, []);



    const fetchStudentData = async (teacherID) => {
        try {
            const response = await axios.post("http://192.168.1.3:8000/api/markby", {
                TeacherId: teacherID,
            });

            const students = response.data;

            // Create a set to store unique student IDs
            const uniqueStudentIds = new Set();

            // Iterate through students to collect unique student IDs
            students.forEach((student) => {
                uniqueStudentIds.add(student.StudentId);
            });

            const uniqueStudentCount = uniqueStudentIds.size;

            // Create a map to store counts for each prediction level
            const predictionLevelCounts = {
                "High Level": 0,
                "High Medium": 0,
                "Low Level": 0,
                "Low Medium": 0,
            };

            // Iterate through students to count based on prediction levels
            students.forEach((student) => {
                if (predictionLevelCounts[student.Prediction] === 0) {
                    predictionLevelCounts[student.Prediction] += 1; // Count only once for each prediction level
                }
            });

            setStudentCount(uniqueStudentCount); // Set the count of unique student IDs
            setHighLevelStudentCount(predictionLevelCounts["High Level"]);
            setHighMediumLevelStudentCount(predictionLevelCounts["High Medium"]);
            setLowLevelStudentCount(predictionLevelCounts["Low Level"]);
            setLowMediumLevelStudentCount(predictionLevelCounts["Low Medium"]);

            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching student data:", error);
            setIsLoading(false);
        }
    };


    const fetchTeacherData = async (teacherID) => {
        try {
            const response = await axios.post('http://192.168.1.3:8000/api/teachersby', {
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
                            <Text style={styles.Name}>Hi, Choudary Aoun</Text>
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
                                    High level{"\n"} student
                                </Text>
                                    <Text style={styles.smallText23}>{highLevelStudentCount}</Text>
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
        width: 100,
        height: 100,

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