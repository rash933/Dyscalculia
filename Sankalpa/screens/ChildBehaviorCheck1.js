import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton, Checkbox } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';


const BehaviorCheck1 = () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const navigation = useNavigation();

    const calculateScore = () => {
        let score1 = 0;
        if (checked1) score1 += 15;
        if (checked2) score1 += 15;
        if (checked3) score1 += 15;
        // You can adjust the scoring logic based on your requirements
        return score1;
    };


    const Next = () => {
        // Calculate the score
        const score1 = calculateScore();

        // Update the parentq1 object with the score
        const parentq1 = {  score1 };
        console.log(parentq1);

        // Navigate to the next screen (BehaviorCheck2) with parentq1 as a parameter
        navigation.navigate('BehaviorCheck2', { parentq1 });
    };

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Child behavior'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.2} color='#002060'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Did your child have any of these difficulties in preschool years? </Text>
                    <View style={styles.input} >
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Naming numbers and size of quantities" 
                            status={checked1 ? 'checked' : 'unchecked'} 
                            onPress={() => { setChecked1(!checked1);  }} 
                             />
                        </Card>
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Problems in counting" status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked2(!checked2); }}  />
                        </Card>
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Comparing numbers and quantities" status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked3(!checked3); }}  />
                        </Card>
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
        alignItems: 'center',
        textAlign: 'left',
        height: 250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default BehaviorCheck1;