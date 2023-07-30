import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, } from 'react-native';
import { Text, Button, ProgressBar, Avatar, IconButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const VerifyStudent = () => {
    const navigation = useNavigation();
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Verify student details'} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ProgressBar progress={0.1} color='#21005D'  />
                </View>

                <View style={styles.box3}>

                    <Card mode='outlined' style={styles.card}>
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Text {...props} label="A" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                        />

                        <Card.Content>
                            <Text variant="headlineMedium">Card title</Text>
                            <Text variant="titleMedium">content</Text>
                            <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                        </Card.Content>

                      
                    </Card>
                    <View style={styles.note}>
                        <Text variant="titleMedium">** Please confirm the student details before start the predication</Text>
                    </View>


                </View>

                <View style={styles.box4}>
                    <Button textColor='#ffff' mode='contained' onPress={() => { navigation.navigate('StudentMarks') }}>Confirm Details </Button>
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
       marginBottom:20

    },


});

export default VerifyStudent;