import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {   Avatar,Button ,Divider ,IconButton,TextInput} from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const StudentList = () => {

    const navigation = useNavigation();
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Student List '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <TextInput
                  
                        placeholder="Search student name here"
                        right={<TextInput.Icon icon="close" onPress={() => { }} />}
                        left={<TextInput.Icon icon="account-search" onPress={() => { }}   />}
                    />
                </View>
                <View style={styles.box3}>
                    <ScrollView>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title 
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Text {...props} label="A" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />
                            <Divider />
                            <Card.Content>
                                <Text variant="headlineMedium">Card title</Text>
                                <Text variant="titleMedium">content</Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>
                           
                            <Card.Actions>
                                
                                <Button textColor='#ffff' mode='contained' onPress={() => { navigation.navigate('GetStartedPage') }}>Predict Skill Level </Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card} >
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Text {...props} label="A" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />
                            <Divider />
                            <Card.Content>
                                <Text variant="headlineMedium">Card title</Text>
                                <Text variant="titleMedium">content</Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>Predict Skill Level </Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card} >
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Text {...props} label="A" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />
                            <Divider />
                            <Card.Content>
                                <Text variant="headlineMedium">Card title</Text>
                                <Text variant="titleMedium">content</Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>Predict Skill Level </Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card} >
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Text {...props} label="A" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />
                            <Divider />
                            <Card.Content>
                                <Text variant="headlineMedium">Card title</Text>
                                <Text variant="titleMedium">content</Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>Predict Skill Level </Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Text {...props} label="A" />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                            />
                            <Divider />
                            <Card.Content>
                                <Text variant="headlineMedium">Card title</Text>
                                <Text variant="titleMedium">content</Text>
                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>Predict Skill Level </Button>
                            </Card.Actions>
                        </Card>

                    </ScrollView>
                </View>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    card:{ marginTop:15},
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 18,
        marginLeft: 23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
    },
    box2: {
        marginTop:20,
        height: 50,
        backgroundColor:'#ECE6F0'
        ,borderRadius:20
    },
    box3: {
        marginTop: 30,

        height: 550

    },
    Headding: {
        fontSize: 19,

    },



});

export default StudentList;