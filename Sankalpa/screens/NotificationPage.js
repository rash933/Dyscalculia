import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Divider, IconButton } from 'react-native-paper';
import AppBa2 from '../components/appBar2';
import { Card } from 'react-native-paper';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';

const Notifi = () => {
    const navigation = useNavigation();
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Notification 1'} />
            <View style={styles.box1}>

                <View style={styles.box3}>
                    <ScrollView>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' onPress={() => { navigation.navigate('NotifiView') }} mode='contained'>View More</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>View More</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>View More</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>View More</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>View More</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title="Card Title"


                            />
                            <Divider />
                            <Card.Content>

                                <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
                            </Card.Content>

                            <Card.Actions>

                                <Button textColor='#ffff' mode='contained'>View More</Button>
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
    card: { marginTop: 15 },
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
        height: 50
    },
    box3: {
        marginTop: 30,

        height: 550

    },
    Headding: {
        fontSize: 19,

    },



});

export default Notifi;