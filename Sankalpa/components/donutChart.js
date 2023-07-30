import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class StudentChart extends Component {
    render() {
        const widthAndHeight = 140;
        const series = [8,2, 5, 10];
        const sliceColor = ['#DFAA21', '#24DA20', '#5040A3', '#A34040'];

        return (
            <View style={styles.container}>
                <View style={styles.chartContainer}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.75}
                        coverFill={'transparent'}
                    />
                    <Text style={styles.chartText}>Total No. of
                        {"\n"}Student{"\n"}25</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent:'center'
    },
    chartText: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});
