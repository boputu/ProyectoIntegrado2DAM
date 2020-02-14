
import React, { Component } from 'react';
import 'react-native-gesture-handler';

import * as Progress from 'react-native-progress';

import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';


export default class GraphicScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true,
    }
  }

  render() {

    const colors = {
      Robotic: '#1b4f72',
      BeeKeen: '#70E2F3',
      MareenaBeerFestival: '#f6e8cb',
      FloridaRatings: '#e61a31',
      AppAUCO: '#111BB0'
    };


    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Media general</Text>

        <SafeAreaView style={styles.container}>
          
          <ScrollView style={styles.scrollView}>
              <Text style={styles.label}>Robotic</Text>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.Robotic}
                width={null}
                progress={0.5}
              />
              <View style={styles.ratings}>
                <Text >Número de votos: </Text>
                <Text>Media: </Text>
              </View>

              <Text style={styles.label}>BeeKeen</Text>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.BeeKeen}
                width={null}
                progress={0.5}
              />
              <View style={styles.ratings}>
                <Text >Número de votos: </Text>
                <Text>Media: </Text>
              </View>

              <Text style={styles.label}>MareenaBeerFestival</Text>
              <View style={styles.bar}>
              <Progress.Bar
                styles={{ margin: 10}}
                color={colors.MareenaBeerFestival}
                width={275}
                height= {15}
                progress={0.9}
              />
              <Text style={{paddingLeft:10}}>50</Text>
              </View>
              <View style={styles.ratings}>
                <Text >Número de votos: </Text>
                <Text>Media: </Text>
              </View>

              <Text style={styles.label}>FloridaRatings</Text>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.FloridaRatings}
                width={null}
                progress={0.5}
              />
              <View style={styles.ratings}>
                <Text >Número de votos: </Text>
                <Text>Media: </Text>
              </View>

              <Text style={styles.label}>APP AUCO</Text>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.AppAUCO}
                width={null}
                progress={0.9}
              />
              <View style={styles.ratings}>
                <Text >Número de votos: </Text>
                <Text>Media: </Text>
              </View>
          </ScrollView>
        </SafeAreaView>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingBottom: 50
  },
  container: {
    flex: 3,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'arvo',
  },
  bar: {
    flexDirection:'row',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'arvo',
  },
  ratings: {
    marginTop: 20,
  }
})
