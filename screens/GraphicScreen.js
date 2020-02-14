
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
      MareenaBeerFestival: 'orange',
      FloridaRatings: '#e61a31',
      AppAUCO: '#111BB0'
    };


    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Media General  <Ionicons name="ios-stats" color='black' size={25} /></Text>

        <SafeAreaView style={styles.container}>

          <ScrollView style={styles.scrollView}>

            <Text style={styles.label}>Robotic  <Ionicons name="ios-speedometer" color={colors.Robotic} size={25} /></Text>
            <View style={styles.StatsContainer}>
              <Text>Creatividad e innovación</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <Progress.Bar
              styles={{ margin: 10 }}
              color={colors.Robotic}
              width={null}
              height={15}
              progress={0.2}
            />

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Implementación y transferibilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.Robotic}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>


            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Comunicación y usabilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.Robotic}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Total de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Media de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />



            <Text style={styles.label}>BeeKeen  <Ionicons name="ios-people" color={colors.BeeKeen} size={25} /></Text>
            <View style={styles.StatsContainer}>
              <Text>Creatividad e innovación</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <Progress.Bar
              styles={{ margin: 10 }}
              color={colors.BeeKeen}
              width={null}
              height={15}
              progress={0.2}
            />

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Implementación y transferibilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.BeeKeen}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Comunicación y usabilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.BeeKeen}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Total de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Media de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />

            <Text style={styles.label}>MareenaBeerFestival  <Ionicons name="ios-beer" color={colors.MareenaBeerFestival} size={25} /></Text>
            <View style={styles.StatsContainer}>
              <Text>Creatividad e innovación</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <Progress.Bar
              styles={{ margin: 10 }}
              color={colors.MareenaBeerFestival}
              width={null}
              height={15}
              progress={0.2}
            />

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Implementación y transferibilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.MareenaBeerFestival}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Comunicación y usabilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.MareenaBeerFestival}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Total de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Media de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />

            <Text style={styles.label}>FloridaRatings  <Ionicons name="ios-star" color={colors.FloridaRatings} size={25} /></Text>
            <View style={styles.StatsContainer}>
              <Text>Creatividad e innovación</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <Progress.Bar
              styles={{ margin: 10 }}
              color={colors.FloridaRatings}
              width={null}
              height={15}
              progress={0.2}
            />

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Implementación y transferibilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.FloridaRatings}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Comunicación y usabilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.FloridaRatings}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Total de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Media de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>

            <View
              style={{
                marginTop: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />


            <Text style={styles.label}>App AUCO  <Ionicons name="ios-hand" color={colors.AppAUCO} size={25} /></Text>
            <View style={styles.StatsContainer}>
              <Text>Creatividad e innovación</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <Progress.Bar
              styles={{ margin: 10 }}
              color={colors.AppAUCO}
              width={null}
              height={15}
              progress={0.2}
            />

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Implementación y transferibilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.AppAUCO}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>

            <View style={styles.margin}>
              <View style={styles.StatsContainer}>
                <Text>Comunicación y usabilidad</Text>
                <Text style={styles.totalRate}>50</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.AppAUCO}
                width={null}
                height={15}
                progress={0.2}
              />
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Total de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
            </View>
            <View style={[styles.StatsContainer, styles.margin]}>
              <Text>Media de votos:</Text>
              <Text style={styles.totalRate}>50</Text>
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
  app: {
    borderBottomWidth: 2,
    borderBottomColor: '#e61a31',
  },
  container: {
    flex: 3,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderTopWidth: 2,
    borderTopColor: '#e61a31',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  StatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'arvo',
  },
  bar: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'arvo',
    marginBottom: 10
  },
  totalRate: {
    fontSize: 15,
    opacity: 0.3,
    fontFamily: 'arvo',
    color: "black"
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  margin: {
    marginTop: 15
  }
})
