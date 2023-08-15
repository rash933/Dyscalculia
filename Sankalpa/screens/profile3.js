import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile3 = ({ navigation, route }) => {

    const { IQCheck2 } = route.params;


    const [tname, settname] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [tnameError, settNameError] = useState(false);
    const [suggestedtNames, setSuggestedtNames] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.1.3:8000/api/teachers');
            const teachers = response.data;

            // Extract names from the response data and set the state
            const names = teachers.map(teacher => teacher.Name);
            setSuggestedtNames(names);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const Next = async () => {
        console.log(IQCheck2);
        // get teacher id
        try {
            const sentTeachername = { Name: tname };
            const response = await axios.post('http://192.168.1.3:8000/api/teachersby', sentTeachername);

            // Check if the response contains at least one teacher object
            if (response.data && response.data.length > 0) {
                const teacher = response.data[0]; // Assuming the first element is the teacher object
                const TeacherID = {teacherid:teacher._id};
                console.log('Success: Teacher ID:', TeacherID);

                

                try {
                    // Get the student ID from AsyncStorage
                    const studentID = await AsyncStorage.getItem('CurrentstudentID');

                    // Check if studentID is available in AsyncStorage
                    if (studentID) {
                        const apiUrl = `http://192.168.1.3:8000/api/student/update/${studentID}`;
                        const response = await axios.put(apiUrl, TeacherID);

                        console.log('Success updated TeacherID to student:', response.data);

                        // Get stage status for navigation
                        navigation.navigate('Profile4', { IQCheck2 });
                    } else {
                        console.log('Student ID not found in AsyncStorage.');
                    }
                } catch (error) {
                    console.error('Error posting data:', error);
                }
            } else {
                console.log('Teacher not found');
            }
        } catch (error) {
            console.error('Error fetching teacher data:', error);
        }
    };


    const handleNameChange = (text) => {
        settname(text);
        settNameError(false); // Reset name error state
    };

    const handleBlur = () => {
        // Check if the entered name is in the suggested names list
        if (!suggestedtNames.includes(tname.trim())) {
            settNameError(true);
        }
    };

    const handleSuggestedNamePress = (name) => {
        settname(name);
    };

    

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Complete Profile'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.8} color='#002060' />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Say us the name of the responsible teacher..</Text>
                    <View style={styles.input}>
                        <Text style={{ textAlign: 'left' }}>Name of Teacher</Text>
                        <TextInput
                            style={{ width: 250 }}
                            mode="outlined"
                            outlineColor="#000"
                            label=""
                            value={tname}
                            onChangeText={handleNameChange}
                            onBlur={handleBlur}
                        />
                        {tnameError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>
                                Name not in the list
                            </Text>
                        )}
                        <ScrollView style={{ width: 250 ,marginTop:12, backgroundColor:'#0011'}} >
                            {suggestedtNames.map((name, index) => (
                                <TouchableOpacity key={index} onPress={() => handleSuggestedNamePress(name)}>
                                    <Text  style={{ textAlign: 'center',height:20 }}>{name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        {/* Show suggested names */}

                    </View>

                    <View style={styles.note}>

                    </View>

                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={Next} mode='contained'>CONTINUE</Button>
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
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        textAlign: 'left',
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default Profile3;