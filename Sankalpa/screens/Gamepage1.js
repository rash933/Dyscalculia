import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';
import { BackHandler } from 'react-native';

const GamePage1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
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
  }, []); 



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
            <Button style={styles.margin} textColor="#ffff" onPress={() => { navigation.navigate('GamePage2') }} mode="contained">
              PLAY
            </Button>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={styles.card}>
          <Card.Cover style={styles.cardCover} source={require('../assets/image/Other/box3.png')} />
          <Card.Content style={styles.margin}>
            <Text variant="bodyMedium">Test your math knowledge... Try this now...</Text>
            <Button style={styles.margin} textColor="#ffff" onPress={() => { navigation.navigate('QuizResult') }} mode="contained">
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
