import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Ellipse } from "react-native-svg";
import { Text } from 'react-native-paper';


const Background2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ellipse1Stack}>
                <Svg viewBox="0 0 503 496.8" style={styles.ellipse1}>
                    <Ellipse
                        cx={252}
                        cy={248}
                        rx={252}
                        ry={248}
                        fill="rgba(0,32,96,1)"
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                    />
                </Svg>
                <View style={styles.logo}>
                    <Text variant="displayMedium" style={styles.logoText1}  >සංකල්ප</Text>
                    <Text variant="displayMedium" style={styles.logoText2}>Masths Master</Text>
                    {/* <View style={styles.ellipse2Stack}>
                        <Svg viewBox="0 0 150.4 150.06" style={styles.ellipse2}>
                            <Ellipse
                                cx={75}
                                cy={75}
                                rx={75}
                                ry={75}
                                fill="rgba(255,255,255,1)"
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                            />
                        </Svg>
                        <Image
                            source={require("../assets/logo.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ellipse1: {
        top: 0,
        position: "absolute",
        left: 0
    },
    logoText1: {
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: 90,
        //   backgroundColor:'#000',
    },
    logoText2: {
        color: '#1488F2',
        fontWeight: 'bold',
        lineHeight: 68,
        // backgroundColor: '#000',
    },
    logo: {
        top: 297,
        width: 400,
        height: 200,
        alignSelf: "center",
        position: "absolute"
        ,
        color: '#fff',
        // backgroundColor:'#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ellipse2: {
        top: 21,
        left: 24,
        width: 150,
        height: 150,
        position: "absolute"
    },
    image: {
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        position: "absolute"

    },
    ellipse2Stack: {
        width: 200,
        height: 200
    },
    ellipse1Stack: {
        width: 503,
        height: 497,
        marginTop: -236,
      
    },
});

export default Background2;
