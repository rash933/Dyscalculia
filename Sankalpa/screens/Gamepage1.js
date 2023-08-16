import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';
import { BackHandler } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GamePage1 = ({ navigation, route }) => {
  const parentqp = route.params;

  const lockOrientationToLandscape = () => {
    // Lock the screen orientation to landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // Handle back button press
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Exit the app when the back button is pressed
      BackHandler.exitApp();
      return true; // Prevent default behavior (going back to the previous screen)
    });

    return () => {
      // Remove the back button event listener when the component unmounts
      backHandler.remove();
    };
  };

  useEffect(() => {
    // Start a loop to repeatedly lock the orientation to landscape
    const orientationLoop = setInterval(() => {
      lockOrientationToLandscape();
    }, 100); // Check every 1 second

    // Clean up the loop when the component is unmounted
    return () => {
      clearInterval(orientationLoop);
    };
  }, []);

  
  const getStageStatus = async (id) => {
    try {
      // Prepare the request data with the student ID
      const requestData = {
        _id: id,
      };

      // Send the POST request to get student data
      const response = await axios.post('http://192.168.1.2:8000/api/studentby', requestData);

      // Extract the StageStatus property from the response data
      const studentData = response.data[0];
      const stageStatus = studentData.StageStatus;

      // Return the StageStatus
      return stageStatus;
    } catch (error) {
      console.error('Error fetching student data:', error);
      return null; // or handle the error in an appropriate way
    }
  };

  const Next = async () => {
    
    try {
      // Get the cached current student ID from AsyncStorage
      const StudentID = await AsyncStorage.getItem('CurrentstudentID');

      // Check if the currentStudentID is available in AsyncStorage
      if (StudentID) {
        // Use the currentStudentID in the API URL for updating parentq
        const updateApiUrl = `http://192.168.1.2:8000/api/student/update/${StudentID}`;
        const response = await axios.put(updateApiUrl, parentqp);
        console.log('Success updated parentq to student:', response.data);

        // Get stage status for navigation
        const stageStatus = await getStageStatus(StudentID);

        if (stageStatus !== null) {
          console.log('StageStatus:', stageStatus);

          if (stageStatus === false) {
            navigation.navigate('GamePage4');
          } else {
            navigation.navigate('GamePage12');
          }
        }
      } else {
        console.log('Current student ID not found in AsyncStorage.');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const showAlert = () => {
    Alert.alert(
      '! Warning',
      'Take a test for get resutls',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <AppBa3 title={'Quiz Zone '} />

      <ScrollView horizontal={true}>
        <Card mode="outlined" style={styles.card}>
          <Card.Cover style={styles.cardCover} source={require('../assets/image/Other/box1.png')} />
          <Card.Content style={styles.margin}>
            <Text variant="bodyMedium">Go through these instructions before starting</Text>
            <Button style={styles.margin} textColor="#ffff" onPress={() => { navigation.navigate('Instruction') }} mode="contained">
              GET STARTED
            </Button>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Card.Cover style={styles.cardCover} source={require('../assets/image/Other/box2.png')} />
          <Card.Content style={styles.margin}>
            <Text variant="bodyMedium">Test your math knowledge... Try this now...</Text>
            <Button style={styles.margin} textColor="#ffff" onPress={Next} mode="contained">
              PLAY
            </Button>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Card.Cover style={styles.cardCover} source={require('../assets/image/Other/box3.png')} />
          <Card.Content style={styles.margin}>
            <Text variant="bodyMedium">Test your math knowledge... Try this now...</Text>
            <Button style={styles.margin} textColor="#ffff" onPress={showAlert} mode="contained">
              Results
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    margin: 7
  },
  container: {
    flex: 1,
   
  },
  cardCover: {
    height: 150,
    resizeMode: 'center'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin:12,
    backgroundColor: '#ffff',
    width: 250
  }
});

export default GamePage1;
