import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView,Image } from "react-native";
import { Button } from 'react-native-paper';
import PredictResultsBox from '../components/predictResultsBox';
import StudentChart from '../components/donutChart';
import { useNavigation } from '@react-navigation/core';


const THomeScreen = () => {
    const navigation = useNavigation();

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
                            <StudentChart />

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
                                <Text style={styles.smallText21}>10</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Low level{"\n"} student
                                </Text>
                                <Text style={styles.smallText22}>5</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Low level{"\n"} student
                                </Text>
                                <Text style={styles.smallText23}>8</Text>
                            </View>
                        </View>
                        <View style={styles.group}>
                            <View style={styles.box6}>
                                <Text style={styles.smallText}>
                                    Low level{"\n"} student
                                </Text>
                                <Text style={styles.smallText24}>2</Text>
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