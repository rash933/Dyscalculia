import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation} from '@react-navigation/core';
import StudentList from '../screens/StudentList';
const PredictResultsBox = () => {
    const navigation = useNavigation();

  
    return (       
                <View style={styles.box1}>
                    <View style={styles.left}>
                        <Text style={styles.Header}>Welcome !</Text>
                        <Text style={styles.Name}>Hi, Choudary Aoun</Text>
                        <Text style={styles.text}>
                            Check the dyscalculia probability level of{"\n"}students
                        </Text>
                <Button textColor='#ffff' buttonColor='#002060' mode="contained" onPress={() => { navigation.navigate('StudentList')}} >
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        alignSelf:'flex-start'

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


});
export default PredictResultsBox;