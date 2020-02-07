
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class GraphicScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "test"
    }
  }

  render() {

    const star = <Ionicons name="ios-qr-scanner" size={26} />
    const config = {
      // data needed to calculate the number of lines to render
      data: [3,4,5,6],
      // width of your chart
      width: 100,
      // height of your chart
      height: 20,
    }



    return (
      <View style={styles.mainContainer}>
        <View style={styles.chart1}>
          <LineChart
            data={{
              labels: ["P1", "P2", "P3", "P4", "P5"],
              datasets: [
                {
                  data: [1,2,3,4,2]
                }
              ]         }}
            width={Dimensions.get("window").width - 40} // from react-native
            height={220}
            yAxisLabel={star}
            renderVerticalLabels={config}
            chartConfig={{
              //backgroundColor: "blue",
              backgroundGradientFrom: "#e61a31",
              backgroundGradientTo: "white",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },

  flatlistContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: "rgba(255,0,0,1)"
  },

  buttonContainer: {
    flex: 1 / 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonComplete: {
    width: 350,
    height: 40,
    backgroundColor: "rgba(255,0,0,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
  },

  textButton: {
    color: "white",
    fontSize: 25,
  },
  chart1: {
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
  }
})
