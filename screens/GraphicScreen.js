
import React, { Component } from 'react';
import 'react-native-gesture-handler';
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




    return (
      <View style={styles.mainContainer}>
        <Text>test</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
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
    );

  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
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
})
