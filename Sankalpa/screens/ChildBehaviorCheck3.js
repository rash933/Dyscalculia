import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
const BehaviorCheck3 = () => {
    const navigation = useNavigation();
    const [value, setValue] = React.useState('Yes');
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Child behavior'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.9} color='#21005D'  />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Any of your family members have/had dyscalculia?</Text>
                    <View style={styles.input} >
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <Card mode='outlined' style={{ width: 250, margin: 18 }}>
                                <RadioButton.Item label="  Yes" labelStyle='titleMedium'  value="Yes" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18, }}>
                                <RadioButton.Item label="   No" labelStyle='titleMedium'  value="No" />
                            </Card>
                            <Card mode='outlined' style={{ width: 250, margin: 18, }}>
                                <RadioButton.Item label="  May be" labelStyle='titleMedium'  value="Maybe" />
                            </Card>

                        </RadioButton.Group>
                    </View>


                    <View style={styles.note}>

                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={() => { navigation.navigate('SNavBar') }} mode='contained'>CONTINUE</Button>
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

export default BehaviorCheck3;