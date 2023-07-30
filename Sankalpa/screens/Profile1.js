import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
const Profile1 = () => {
    const navigation = useNavigation();
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Complete Profile'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.2} color='#21005D'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Name of Your Child</Text>
                    <View style={styles.input} >
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Name </Text>
                        <TextInput style={{ width: 250 }}
                            mode="outlined"
                            outlineColor='#000'
                            label=""
                            // placeholder="Type something"
                           
                        />
                        <Text style={{ textAlign: 'left', color: '#ec0b43' }} variant="titleMedium">Add both first and last name</Text>
                    </View>


                    <View style={styles.note}>
                       
                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={() => { navigation.navigate('Profile2') }} mode='contained'>CONTINUE</Button>
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

export default Profile1;