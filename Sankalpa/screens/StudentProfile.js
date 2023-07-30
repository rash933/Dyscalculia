import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Button,Text } from 'react-native-paper';
import PredictResultsBox from '../components/predictResultsBox';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';


const StuProfile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
       <ScrollView>
            <View>

                <View style={styles.box1}>
                    <View style={styles.left}>
                        <Text style={styles.Header}>My Profile</Text>
                        <Text style={styles.Name}>Hi, Choudary Aoun</Text>
                        <Text style={styles.text}>
                            Age: 8{"\n"}Responsible Teacher: Duwasha Abenayaka
                        </Text>
                        <Button textColor='#ffff' mode="contained" buttonColor='#21005D' onPress={() => console.log('Pressed')}>
                            Edit Profile
                        </Button>
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
                                <Text variant="displayMedium" style={{textAlign:'center'}}>  HIGH</Text>

                        </View>
                        <Button mode="outlined" textColor='#21005D' style={styles.margin} onPress={() => { navigation.navigate('Notifi') }}>
                            View Notifications
                        </Button>

                    </View>
                    <View style={styles.box5}>

                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    IQ Quiz{"\n"}marks
                                </Text>
                                <Text style={styles.smallText21}>10</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Child{"\n"}behavior marks
                                </Text>
                                <Text style={styles.smallText22}>10</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Math Quiz{"\n"}Math Quiz
                                </Text>
                                <Text style={styles.smallText23}>10</Text>
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
        height: 187,
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
        marginTop: 12,
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