import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class StudentChart extends Component {
    render() {
        const widthAndHeight = 140;
        const { totalCount, highLevelCount, highMediumLevelCount, lowLevelCount, lowMediumLevelCount } = this.props;
        const series = [highLevelCount, highMediumLevelCount, lowLevelCount, lowMediumLevelCount];
        const sliceColor = ['#DFAA21', '#24DA20', '#5040A3', '#A34040'];

        // Calculate the sum of the series
        const sumSeries = series.reduce((total, value) => total + value, 0);

        return (
            <View style={styles.container}>
                <View style={styles.chartContainer}>
                    {sumSeries !== 0 ? (
                        <PieChart
                            widthAndHeight={widthAndHeight}
                            series={series}
                            sliceColor={sliceColor}
                            coverRadius={0.75}
                            coverFill={'transparent'}
                        />
                    ) : null}
                    {sumSeries !== 0 ? (
                        <Text style={styles.chartText}>Total No. of{"\n"}Student{"\n"}{totalCount}</Text>
                    ) : (
                        <Text style={styles.noStudentsText}>No students</Text>
                    )}
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
