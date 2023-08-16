import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button,Text } from 'react-native-paper';
import PredictResultsBox from '../components/predictResultsBox';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StuProfile = () => {
    const navigation = useNavigation();
    const [iq, setIq] = useState(null);
    const [quiz, setQuiz] = useState(null);
    const [levelStatus, setLevelStatus] = useState(null);
    const [parentQ, setParentQ] = useState(null);
    const [dob, setDob] = useState(null);
    const [age, setAge] = useState(null);
    const [name, setName] = useState(null);
    const [teachername, setteacherName] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const fetchData = async () => {
        const apiUrl = 'http://192.168.1.2:8000/api/studentby';

        try {
            // Get the student ID from AsyncStorage
            const studentID = await AsyncStorage.getItem('CurrentstudentID');

            // Check if studentID is available in AsyncStorage
            if (studentID) {
                const requestData = {
                    _id: studentID,
                };

                const response = await axios.post(apiUrl, requestData);
                const studentData = response.data[0];

                // Extract the values you are interested in
                const iq = studentData.Iq;
                const quiz = studentData.Quiz;
                const levelStatus = studentData.LevelStatus;
                const parentQ = studentData.ParentQ;
                const name = studentData.Name;
                const dob = studentData.Dob;
                const teacherID = studentData.TeacherID;

                // Set the extracted values to the state
                setIq(iq);
                setQuiz(quiz);
                setLevelStatus(levelStatus);
                setParentQ(parentQ);
                setDob(dob);
                setName(name);
                const age = calculateAge(dob);
                setAge(age);

                // Fetch teacher data based on teacherID
                const teacherApiUrl = 'http://192.168.1.2:8000/api/teachersby';
                const teacherResponse = await axios.post(teacherApiUrl, { _id: teacherID });

                if (teacherResponse.data.length > 0) {
                    const teacherName = teacherResponse.data[0].Name;
                    setteacherName(teacherName);
                } else {
                    console.log('Teacher not found.');
                }
            } else {
                console.log('Student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };



    return (
        <View style={styles.container}>
       <ScrollView>
            <View>

                <View style={styles.box1}>
                    <View style={styles.left}>
                        <Text style={styles.Header}>My Profile</Text>
                            <Text style={styles.Name}>Hi, {name}</Text>
                            {teachername && (
                                <Text style={styles.text}>
                                    Age: {age}
                                    {"\n"}
                                    Responsible Teacher: {teachername}
                                </Text>
                            )}
                       
                    </View>
                    <View style={styles.right}>

                        <Image
                            style={styles.image}
                            source={require('../assets/image/person.png')}
                        />
                    </View>
                 

                </View>    
                <View>
                    <Text style={styles.subtitle}>
                        Probability Results
                    </Text>
                </View>

                <View style={styles.box2}>


                    <View style={styles.box3}>

                        <Text style={styles.studentSkillLevel}>PROBABILITY RESULT</Text>
                        <View style={styles.box4}>
                                <Text variant="displayMedium" style={{ textAlign: 'center' }}>{levelStatus}</Text>

                        </View>
                        <Button mode="outlined" textColor='#002060' style={styles.margin} onPress={() => { navigation.navigate('Notifi') }}>
                            View Notifications
                        </Button>

                    </View>
                    <View style={styles.box5}>

                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    IQ Quiz{"\n"}marks
                                </Text>
                                    <Text style={styles.smallText21}>{iq}</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Child{"\n"}behavior marks
                                </Text>
                                    <Text style={styles.smallText22}>{parentQ}</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Math Quiz
                                </Text>
                                    <Text style={styles.smallText23}>{quiz}</Text>
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
        margin: 5
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'

    },

    subtitle: {
        fontSize: 23,
        marginLeft: 28,
        
        marginBottom: 5,
        color: "#121212",
        textAlign: 'left'
    },
    box2: {
        height: 280,
        flexDirection: "row",
        margin: 23,

       justifyContent:'space-around',
       alignContent:'center'
    },
    box3: {
        width: 213,
        height: 263,
        backgroundColor: "rgba(255,255,255,1)",
        elevation: 2,
     
        borderRadius: 9,
        justifyContent: 'space-around',
        alignItems:'center'
       
    },
    studentSkillLevel: {
        fontSize: 18,
        color: "#121212",
        marginTop: 19,
       
    },
    box4: {
        width: 138,
        height: 124,
        // backgroundColor: "rgba(255,255,255,1)",

       
        
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center'

    },

    box5: {
        width: 96,
        height: 200,
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
    elevation: 5,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallText: {
        textAlign: 'center',
        color: "#121212",
        fontSize: 12,
    },
    smallText21: {
        fontSize: 17,
        color: "#A34040",
        marginTop: 3,

    },
    smallText22: {
        fontSize: 17,
        color: "#5040A3",
        marginTop: 3,

    },
    smallText23: {
        fontSize: 17,
        color: "#DFAA21",
        marginTop: 3,

    },
    box1: {
        width: 314,
        height: 160,
        backgroundColor: "rgba(255,255,255,1)",
      
        elevation: 5,
      
        borderRadius: 9,
        margin: 23,

        flexDirection: "row",
       justifyContent:'center',
       alignItems:'center'
    },
    left: {
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginTop: 18,
        marginLeft: 14,
        width:180
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
        // backgroundColor:'#000'

    },


});
export default StuProfile;