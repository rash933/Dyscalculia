import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import * as ScreenOrientation from 'expo-screen-orientation';
import AppBa3 from '../components/appBa3';
import { useNavigation } from '@react-navigation/core';

const GamePage1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Lock the orientation to landscape mode when the component is mounted
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    // Clean up the orientation lock when the component is unmounted
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handleGoBack = () => {
    // Unlock the orientation before leaving the page
    ScreenOrientation.lockAsync();

    // You can implement your custom logic to go back or exit the current screen here
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
            <Button style={styles.margin} textColor="#ffff" onPress={() => { navigation.navigate('GamePage21') }} mode="contained">
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
