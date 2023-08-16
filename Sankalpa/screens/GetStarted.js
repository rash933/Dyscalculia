import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import {Text,Button} from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const GetStartedPage = ({ navigation, route }) => {

    const { studentId } = route.params;

 
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Get Started '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <Text style={{textAlign:'center'}} variant="headlineLarge">Follow following steps to predicate Skill Level </Text>
                </View>
               
                <View style={styles.box3}>
                    <View style={styles.box8}>
                        <Text style={{ textAlign: 'left' }} variant="titleMedium">Provide ability predict the Skill level performance and provide study teaching tips </Text>
                    </View>
                    <View style={styles.box5}>
                        <View style={styles.box6}>

                            {/* <View style={styles.rect}></View> */}
                            <Image
                                style={styles.Image}
                                source={require('../assets/image/Other/number1.png')}
                            />
                            <Image
                                style={styles.Image}
                                source={require('../assets/image/Other/number2.png')}
                            />
                            <Image
                                style={styles.Image}
                                source={require('../assets/image/Other/number3.png')}
                            />
                        </View>
                        <View style={styles.box7}>

                            <Text variant="titleLarge">Verify student details</Text>
                            <Text variant="titleLarge">In-class activity details </Text>
                            <Text variant="titleLarge">Predict Skill Level </Text>
                        </View>
                    </View>
                    
                    
                </View>
               
                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={() => { navigation.navigate('VerifyStudent', { studentId }) }} mode='contained'>Start Process</Button>
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
        marginTop: 18,
        marginLeft: 23,
        marginRight: 23,
        marginBottom:10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign:'center',
        height:600,
        //  backgroundColor: '#000'  
    },
    box2: {
        
      
    },
    box8: {
        // height:45
         marginBottom:15,

    },
    box3: {
        marginTop: 5,
        display: 'flex',
        flexdirection: 'column',
        justifyContent:'center',
       alignItems:'center',
        textAlign: 'center',
        height:450 ,
        marginLeft:10,
        marginRight:10,
        // backgroundColor:'#000'  

    },
    Image:{
        marginBottom:10,
       marginRight:20,
        width:90,
        height: 80,
       resizeMode:'contain'
       
    },
    box4: { marginLeft:15,
    marginRight:15,
        marginTop: 10, 
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        position:'relative'

    },
    box6: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'stretch',
        justifyContent: 'space-around'
},
    box7: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'stretch',
        justifyContent: 'space-around'
},
    box5: {
        flexDirection: "row",
       justifyContent:"space-around",
     
    },
    Headding: {
        fontSize: 19,

    },
rect:{
    zIndex:-1,
    width: 44,
    height: 280,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 35
}


});

export default GetStartedPage;