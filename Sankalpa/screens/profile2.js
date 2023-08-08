import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const Profile2 = ({ navigation, route }) => {

    const { IQCheck1 } = route.params;
    

    const [dobError, setDobError] = useState(false);
    const [dob, setdob] = useState('');

    const Next = () => {
        const IQCheck2 = { ...IQCheck1, dob };

        console.log(IQCheck2);
        // Navigate to the next screen (InputScreen2)
        navigation.navigate('Profile3', { IQCheck2 });
    };

    const handleDOBChange = (text) => {
        setdob(text);
        // Check for the correct format using a regular expression
        const dobFormat = /^\d{4}-\d{2}-\d{2}$/;
        setDobError(!dobFormat.test(text));
    };
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Complete Profile'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.6} color='#002060'/>
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Say us the age of your Child..</Text>
                    <View style={styles.input} >
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Date Of Birth </Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            value={dob}
                            onChangeText={handleDOBChange}
                        // placeholder="Type something"

                        />
                        {dobError && (
                            <Text style={{ textAlign: 'left', color: '#ec0b43' }}>
                                Incorrect format ("xxxx-xx-xx")
                            </Text>
                        )}
                          
                      
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
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default Profile2;