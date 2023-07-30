import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';

const TTermsScreen = () => {


    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.box}>
            <Text style={{ textAlign: 'center',color:'#000' }} variant="displaySmall">Terms and Conditions </Text>
                
                <View style={{ marginTop:30 }}>
                    <Text style={styles.subtitle} variant="displaySmall">01.Data Privacy and Consent:</Text>
                    <Text style={styles.smallText} variant="displaySmall">MathMaster collects and stores quiz results and user performance data to personalize the learning experience and track progress over time.
                        By creating an account and using MathMaster, users consent to the collection, storage, and use of their data as outlined in the app's Privacy Policy.</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.textBox}>
                        <Text style={styles.subtitle} variant="displaySmall">02.Disclaimer and Educational Use:</Text>
                        <Text style={styles.smallText} variant="displaySmall">The app does not provide medical advice or diagnose dyscalculia or any other learning disability. It is not a substitute for professional educational or medical evaluations.</Text>
                    </View>

                </View>
                <View style={{  marginTop: 20,marginBottom:40 }}>
                    <View style={styles.textBox}>
                        <Text style={styles.subtitle} variant="displaySmall">
                            03.Future Updates and Pro Version:</Text>
                        <Text style={styles.smallText} variant="displaySmall">If MathMaster Pro is introduced, users will have the option to upgrade through an in-app purchase, but it will not impact the availability or quality of the basic MathMaster experience..</Text>
                    </View>

                </View>
           </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    margin: {
        margin: 18
    },
    container: {
        flex: 1,
       justifyContent:'center',
       alignItems:'center',

    },
    subtitle: {
        fontSize: 23,
       
       
        marginBottom: 5,
        color: "#121212",
        textAlign: 'left'
    },
    smallText: {
        textAlign: 'left',
        color: "#121212",
        fontSize:17,
        lineHeight:22
    },
    textBox:{
        height:110,
        marginTop:20
    },
    box: {
        height:550,
        marginBottom:28,
        marginRight:23,
        marginLeft:23,
        marginTop:28,
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'stretch',
        justifyContent: 'space-around'
        ,
        // backgroundColor:'#000'
    },
});
export default TTermsScreen;