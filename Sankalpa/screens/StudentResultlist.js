import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import AppBa2 from '../components/appBar2';


import { SegmentedButtons } from 'react-native-paper';
const ResultList = () => {
    const [value, setValue] = React.useState('');

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <AppBa2 title={'Student Results List '} />
            <View style={styles.box1}>
                <View style={styles.box2}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <SegmentedButtons
                            style={styles.segmentedButtonsContainer}
                            value={value}
                            onValueChange={setValue}
                            buttons={[
                                {
                                    icon: '',
                                    value: 'Low Level',
                                    label: "Low  Level",
                                    labelStyle: {
                                        width: 100,

                                    }
                                },
                                {
                                    icon: '',
                                    value: 'Low medium',
                                    label: 'Low medium', 
                                    labelStyle:{
                                        width:100,
                                                           
                                    }
                                },
                                { 
                                icon: '', 
                                value: 'High medium ',
                                label: 'High medium ',
                                labelStyle: {
                                        width: 100,

                                    } }, 
                                { 
                                icon: '', 
                                value: 'High level', 
                                label: 'High level',
                                labelStyle: {
                                        width: 100,

                                    } },
                            ]}
                         
                        />
                    </ScrollView>
                </View>
                <View style={styles.box3}>
                    <ScrollView>
                        {value === 'Low Level' && (
                            <List.Section>
                                <List.Subheader style={styles.Headding}>Low Level</List.Subheader>
                                {/* Render the items for 'Low Level' */}
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                {/* Add other List.Item elements as needed */}
                            </List.Section>
                        )}
                        {value === 'Low medium' && (
                            <List.Section>
                                <List.Subheader style={styles.Headding}>Low medium</List.Subheader>
                                {/* Render the items for 'Low medium' */}
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />


                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                {/* Add other List.Item elements as needed */}
                            </List.Section>
                        )}
                        {value === 'High medium ' && (
                            <List.Section>
                                <List.Subheader style={styles.Headding}>High medium</List.Subheader>
                                {/* Render the items for 'High medium' */}
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                {/* Add other List.Item elements as needed */}
                            </List.Section>
                        )}
                        {value === 'High level' && (
                            <List.Section>
                                <List.Subheader style={styles.Headding}>High level</List.Subheader>
                                {/* Render the items for 'High level' */}
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />

                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />

                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                <List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                /><List.Item
                                    title="First Item"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                                    left={() => <Avatar.Text size={36} label="A" />}
                                />
                                {/* Add other List.Item elements as needed */}
                            </List.Section>
                        )}
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
    container: {
        flex: 1,


    },
    box1: {
        marginTop: 18,
        marginLeft:23,
        marginRight: 23,
        justifyContent: 'center',
        alignContent: 'center',
    },
    box2: {

    },
    box3: {
        marginTop:30,
      
        height:550

    },
    Headding:{
        fontSize: 19,
       
    },
    segmentedButtonsContainer: {
     marginTop:23
    },
    segmentedButton: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    segmentedButtonSelected: {
        backgroundColor: '#f0f0f0',
        borderColor: '#000',
    },
    segmentedButtonText: {
        fontSize: 14,
        textAlign: 'center',
    },
  
    
    
});

export default ResultList;