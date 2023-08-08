import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TProfileScreen = () => {
    const CurrentTeacherID =  AsyncStorage.getItem('CurrentTeacherID');
    const [teacherData, setTeacherData] = useState(null);
    const [studentCount, setStudentCount] = useState(0);
    const [highLevelStudentCount, setHighLevelStudentCount] = useState(0);

    useEffect(() => {
        axios.post('http://192.168.1.2:8000/api/studentby', {
            TeacherID: "CurrentTeacherID"
        })
            .then(response => {
                const students = response.data;
                setStudentCount(students.length);
                const highLevelStudents = students.filter(student => student.LevelStatus === "high");
                setHighLevelStudentCount(highLevelStudents.length);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });

        fetchTeacherData();
    }, []);

    const fetchTeacherData = async () => {
        try {
            const CurrentTeacherID = await AsyncStorage.getItem('CurrentTeacherID');
            if (CurrentTeacherID) {
                const response = await axios.post('http://192.168.1.2:8000/api/teachersby', {
                    _id: CurrentTeacherID,
                });
                const teacher = response.data[0];
                setTeacherData(teacher);
                // Now set the TID state with the CurrentTeacherID
                
            } else {
                console.error('CurrentTeacherID not found in cache.');
            }
        } catch (error) {
            console.error('Error fetching teacher data:', error);
        }
    };

    return (
        <View style={styles.container}>
            {teacherData && (
                <View>
                    <View style={styles.box0}>
                        <Image
                            source={require("../assets/image/person.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                        <View>
                            <Text style={styles.Name}>{teacherData.Name}</Text>
                            <Text style={styles.subtitle}>
                                {teacherData.StageStatus ? 'Middle School' : 'Primary School'} Teacher
                            </Text>
                            <View style={styles.Row}>
                                <View style={styles.left}>
                                    <Text style={styles.Email}>E mail: </Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.EmailADDress}>{teacherData.Email}</Text>
                                </View>
                            </View>

                            <View style={styles.Row}>
                                <View style={styles.left}>
                                    <Text style={styles.SmallText}>Total No.Of dyscalculia student </Text>
                                </View>
                                <View style={styles.right}>
                                    <View style={styles.group}>
                                        <View style={styles.box6}>
                                            <Text style={styles.smallText1}>{studentCount}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Row}>
                                <View style={styles.left}>
                                    <Text style={styles.SmallText}>Total No.Of assigned dyscalculia student </Text>
                                </View>
                                <View style={styles.right}>
                                    <View style={styles.group}>
                                        <View style={styles.box6}>
                                            <Text style={styles.smallText2}>{highLevelStudentCount}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    box0: {
        width: 300,
        height: 500,
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
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
    Row: {

        height: 80,
        textAlign: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
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
        marginTop: 25,

        textAlign: 'right',
        flexDirection: "row",
        alignItems: 'center'

    },
    left: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',


    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',


    },

    image: {
        width: 150,
        height: 150,

    },

    Name: {
        textAlign: 'center',

        color: "#121212",
        fontSize: 28,
    },
    subtitle: {
        textAlign: 'center',

        color: "#969393",
        fontSize: 18,
    },
    Email: {
        textAlign: 'center',
        width: 100,
        color: "#121212",
        fontSize: 20,
    },
    SmallText: {
        textAlign: 'center',
width:150,
        color: "#002060",
        fontSize: 14,
    },
    smallText1: {
        textAlign: 'center',
       
        color: "#002060",
        fontSize: 22,
    },
    smallText2: {
        textAlign: 'center',

        color: "#A34040",
        fontSize: 22,
    },
    EmailADDress: {
        textAlign: 'center',
       overflow:'hidden',
        color: "#121212",
        width: 180,
       
    },

    box2: {

        flexDirection: "column",
        margin: 23,

        justifyContent: 'space-around',
        alignContent: 'center',
        textAlign: 'center'
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

    group: {
      
        width: 96,
        height: 54,
        textAlign: 'center',
        alignSelf: 'center'
    },

});


export default TProfileScreen;