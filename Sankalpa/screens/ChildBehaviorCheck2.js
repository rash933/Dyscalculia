import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton, TextInput, RadioButton,Checkbox } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const BehaviorCheck2 = () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Child behavior'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.6} color='#21005D' />
                </View>

                <View style={styles.box3}>

                    <Text style={{ textAlign: 'center' }} variant="headlineLarge">Do your child have any of these difficulties with school mathematics?</Text>
                    <View style={styles.input} >
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Place-value system and transcoding"
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1(!checked1); }}
                                />
                        </Card>
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Understanding arithmetical operations" status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked2(!checked2); }}  />
                        </Card>
                        <Card mode='outlined' style={{ width: 250, }}>
                            <Checkbox.Item label="Knowledge & rapid recall of multiplication table" status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked3(!checked3); }} />
                        </Card>
                    </View>


                    <View style={styles.note}>

                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' onPress={() => { navigation.navigate('BehaviorCheck3') }} mode='contained'>CONTINUE</Button>
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
        alignItems:'center',
        textAlign: 'left',
        height:250,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor:'#000'  

    },

});

export default BehaviorCheck2;