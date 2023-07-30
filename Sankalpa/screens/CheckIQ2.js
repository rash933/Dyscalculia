import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
//s3
const CheckIQ2 = () => {
    const navigation = useNavigation();
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Check IQ level'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.9} color='#21005D'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Let your child to solve this</Text>
                    <Text style={{ textAlign: 'center' }} variant="titleMedium">choose the correct shape to fill the blank square</Text>
                    <Image
                        style={styles.Image}
                        source={require('../assets/image/Puzzles/Q3_secondary/Ques3.png')}
                    />

                    <View style={styles.input} >

                        <View style={styles.group} >
                            <TouchableOpacity>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_secondary/Ans1.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_secondary/Ans2.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.group} >
                            <TouchableOpacity>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_secondary/Ans3.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ImageBackground
                                    source={require('../assets/image/Puzzles/Q3_secondary/Ans4.png')} // Replace this with the path to your image
                                    style={styles.imageBackground}
                                    resizeMode="cover">

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        


                    </View>





                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={() => { navigation.navigate('BehaviorCheck1') }} mode='contained'>CONTINUE</Button>
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
    group: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
        width: 200,
        justifyContent: 'space-between',
        alignContent: 'space-around'
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
        alignItems: 'center',
        textAlign: 'left',
        height: 250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },
    Image: {

        justifyContent: 'center',
        width: 250,
        height: 100,
        resizeMode: 'contain'

    },
    imageBackground: {
        marginBottom: 10,
        justifyContent: 'center',
        width:80,
        height: 50,
        resizeMode: 'contain'

    },

});

export default CheckIQ2;