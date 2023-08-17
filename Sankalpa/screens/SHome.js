import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Button, FAB, Portal, PaperProvider } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StdHomeScreen = () => {
    const navigation = useNavigation();
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
   
    
    const [name, setName] = useState(null);


    useEffect(() => {
        fetchData();
    }, []);

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
                const name = studentData.Name;
               

                // Set the extracted values to the state
               
                setName(name);
               
            } else {
                console.log('Student ID not found in AsyncStorage.');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    return (
        <PaperProvider>
            <View style={styles.container}>
                <View>
                    <View style={styles.box2}>
                        <ScrollView>
                            <View style={styles.box}>
                                <View style={styles.left}>
                                    <Text style={styles.Header}>Welcome !</Text>
                                    <Text style={styles.Name}>Hi, {name}</Text>
                                    <Text style={styles.text}>
                                        Check the dyscalculia probability level of{"\n"}students
                                    </Text>
                                    <Button textColor='#ffff' buttonColor='#002060' mode="contained" onPress={() => { navigation.navigate('Onboardk') }}>
                                        Take a Test
                                    </Button>
                                </View>
                                <View style={styles.right}>

                                    <Image
                                        style={styles.image}
                                        source={require('../assets/image/Other/Student_Dashboard.png')}
                                    />
                                </View>

                            </View>
                            <View>
                                <Text style={styles.subtitle}>
                                    Practice math operations with your fingers
                                </Text>
                            </View>


                            <View style={styles.box0}>

                                <View style={styles.box1}>
                                    <View style={styles.left}>
                                        <Image
                                            style={styles.image1}
                                            source={require('../assets/image/Other/Fingerimage.png')}
                                        />

                                    </View>
                                    <View style={styles.right1}>

                                        <Text style={styles.Header}>Train Your Skill </Text>

                                        <Text style={styles.text1}>
                                            Enhance your mathematical operational {"\n"}Skill using this feature
                                        </Text>

                                    </View>

                                </View>
                                <Button textColor='#ffff' buttonColor='#002060' style={{ width: 270 }} mode="contained" onPress={() => {  }}>
                                    Train  Skill
                                </Button>
                            </View>
                        </ScrollView>
                        <Portal>
                            <FAB.Group style={styles.fab}
                                open={open}
                                visible
                                variant='secondary'
                                icon={open ? 'arrow-collapse-all' : 'pencil'}
                                actions={[
                                    // { icon: 'pencil', onPress: () => console.log('Pressed expanded') },
                                    {
                                        icon: 'google-assistant',
                                        label: 'Voice Assistant',
                                        onPress: () => console.log('Voice Assistant'),
                                    },

                                    {
                                        icon: 'bell',
                                        label: 'Notifications ',
                                        onPress: () => { navigation.navigate('Notifi') },
                                    },
                                ]}
                                onStateChange={onStateChange}
                                onPress={() => {
                                    if (open) {
                                        // do something if the speed dial is open
                                    }
                                }}
                            />
                        </Portal>
                    </View>
                </View>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    fab: {},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    box0: {

        height: 187,
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "rgba(255,255,255,1)",
        elevation: 5,
        margin: 5,
        borderRadius: 9,
        marginTop: 25,
        marginBottom:10

    },
    box1: {

        height: 100,
        textAlign: 'right',
        flexDirection: "row",
        alignItems: 'center'

    },
    box: {

        height: 187,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 13,
        borderRadius: 9,
        elevation: 5,
        justifyContent: 'center',
        margin: 5,
        flexDirection: "row",
        alignItems: 'center'

    },
    left: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        marginTop: 12,
        marginLeft: 14
    },
    right: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        textAlign: 'right',
        marginTop: 12,
        marginRight: 14,
        //  backgroundColor:'#000',

    },
    right1: {
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        textAlign: 'right',
        marginTop: 12,
        marginRight: 14,
        //  backgroundColor:'#000',

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
    text1: {
        textAlign: 'right',
        color: "#121212",
        fontSize: 12,
        marginBottom: 15
    },

    image: {
        width: 120,
        height: 120,

    },
    image1: {
        width: 90,
        height: 110,

    },


    subtitle: {
        fontSize: 20,

        marginTop: 35,
        marginBottom: 5,
        color: "#121212",
        textAlign: 'left'
    },
    box2: {
        height: 550,
        flexDirection: "column",
        margin: 23,
        // backgroundColor: '#000',
        justifyContent: 'space-around',
        alignContent: 'center',
        textAlign: 'left'
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
    smallText2: {
        fontSize: 17,
        color: "#121212",
        marginTop: 3,

    },

});

export default StdHomeScreen;