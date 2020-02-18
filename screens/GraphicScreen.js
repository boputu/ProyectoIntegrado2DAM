
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

import Global from '../constants/Global';

export default class GraphicScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true,
      urlValoraciones: Global.url + "Valoraciones",
      valoracionesMarinaBeer: undefined,
      valoracionesRobotic: undefined,
      valoracionesBeeKeen: undefined,
      valoracionesAUCO: undefined,
      valoracionesFlorida: undefined,
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(this.state.urlValoraciones + "?idAplicacion=1")
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error conectando a https://jsonplaceholder.typicode.com");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        this.setState({ valoracionesMarinaBeer: respuestaJSON })
      })
      .catch(error => {
        console.log("Error de red: " + error);
      });



    fetch(this.state.urlValoraciones + "?idAplicacion=2")
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error conectando a https://jsonplaceholder.typicode.com");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        this.setState({ valoracionesRobotic: respuestaJSON })
      })
      .catch(error => {
        console.log("Error de red: " + error);
      });



    fetch(this.state.urlValoraciones + "?idAplicacion=3")
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error conectando a https://jsonplaceholder.typicode.com");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        this.setState({ valoracionesBeeKeen: respuestaJSON })
      })
      .catch(error => {
        console.log("Error de red: " + error);
      });



    fetch(this.state.urlValoraciones + "?idAplicacion=4")
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error conectando a https://jsonplaceholder.typicode.com");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        this.setState({ valoracionesAUCO: respuestaJSON })
      })
      .catch(error => {
        console.log("Error de red: " + error);
      });



    fetch(this.state.urlValoraciones + "?idAplicacion=5")
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error conectando a https://jsonplaceholder.typicode.com");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        this.setState({ valoracionesFlorida: respuestaJSON })
      })
      .catch(error => {
        console.log("Error de red: " + error);
      });
  }

  render() {
    //Robotic
    let ciRobotic = 0;
    if (this.state.valoracionesRobotic != undefined) {
      this.state.valoracionesRobotic.forEach(element => {
        ciRobotic += element.Creatividad;
      });
    }

    let itRobotic = 0;
    if (this.state.valoracionesRobotic != undefined) {
      this.state.valoracionesRobotic.forEach(element => {
        itRobotic += element.Implementacion;
      });
    }

    let cuRobotic = 0;
    if (this.state.valoracionesRobotic != undefined) {
      this.state.valoracionesRobotic.forEach(element => {
        cuRobotic += element.Comunicacion;
      });
    }

    let ciRoboticBar = ciRobotic/100;
    let itRoboticBar = itRobotic/100;
    let cuRoboticBar = cuRobotic/100;

    let mediaRobotic = (ciRobotic+itRobotic+cuRobotic)/3;
    mediaRobotic = mediaRobotic.toFixed(1);
    let totalRobotic = ciRobotic+itRobotic+cuRobotic;

    //BeeKeen
    let ciBeeKeen = 0;
    if (this.state.valoracionesBeeKeen != undefined) {
      this.state.valoracionesBeeKeen.forEach(element => {
        ciBeeKeen += element.Creatividad;
      });
    }

    let itBeeKeen = 0;
    if (this.state.valoracionesBeeKeen != undefined) {
      this.state.valoracionesBeeKeen.forEach(element => {
        itBeeKeen += element.Implementacion;
      });
    }

    let cuBeeKeen = 0;
    if (this.state.valoracionesBeeKeen != undefined) {
      this.state.valoracionesBeeKeen.forEach(element => {
        cuBeeKeen += element.Comunicacion;
      });
    }


    let ciBeeKeenBar = ciBeeKeen/100;
    let itBeeKeenBar = itBeeKeen/100;
    let cuBeeKeenBar = cuBeeKeen/100;
    let mediaBeeKeen = (ciBeeKeen+itBeeKeen+cuBeeKeen)/3;
    mediaBeeKeen = mediaBeeKeen.toFixed(1);
    let totalBeeKeen = ciBeeKeen+itBeeKeen+cuBeeKeen;


    //MarinaBeer
    let ciMarinaBeer = 0;
    if (this.state.valoracionesMarinaBeer != undefined) {
      this.state.valoracionesMarinaBeer.forEach(element => {
        ciMarinaBeer += element.Creatividad;
      });
    }

    let itMarinaBeer = 0;
    if (this.state.valoracionesMarinaBeer != undefined) {
      this.state.valoracionesMarinaBeer.forEach(element => {
        itMarinaBeer += element.Implementacion;
      });
    }

    let cuMarinaBeer = 0;
    if (this.state.valoracionesMarinaBeer != undefined) {
      this.state.valoracionesMarinaBeer.forEach(element => {
        cuMarinaBeer += element.Comunicacion;
      });
    }

    let ciMarinaBeerBar = ciMarinaBeer/100;
    let itMarinaBeerBar = itMarinaBeer/100;
    let cuMarinaBeerBar = cuMarinaBeer/100;

    let mediaMarinaBeer = (ciMarinaBeer+itMarinaBeer+cuMarinaBeer)/3;
    mediaMarinaBeer = mediaMarinaBeer.toFixed(1);
    let totalMarinaBeer = ciMarinaBeer+itMarinaBeer+cuMarinaBeer;

    //Florida
    let ciFlorida = 0;
    if (this.state.valoracionesFlorida != undefined) {
      this.state.valoracionesFlorida.forEach(element => {
        ciFlorida += element.Creatividad;
      });
    }

    let itFlorida = 0;
    if (this.state.valoracionesFlorida != undefined) {
      this.state.valoracionesFlorida.forEach(element => {
        itFlorida += element.Implementacion;
      });
    }

    let cuFlorida = 0;
    if (this.state.valoracionesFlorida != undefined) {
      this.state.valoracionesFlorida.forEach(element => {
        cuFlorida += element.Comunicacion;
      });
    }

    
    let ciFloridaBar = ciFlorida/100;
    let itFloridaBar = itFlorida/100;
    let cuFloridaBar = cuFlorida/100;

    let mediaFlorida = (ciFlorida+itFlorida+cuFlorida)/3;
    mediaFlorida = mediaFlorida.toFixed(1);
    let totalFlorida = ciFlorida+itFlorida+cuFlorida;


    //AUCO
    let ciAUCO = 0;
    if (this.state.valoracionesAUCO != undefined) {
      this.state.valoracionesAUCO.forEach(element => {
        ciAUCO += element.Creatividad;
      });
    }

    let itAUCO = 0;
    if (this.state.valoracionesAUCO != undefined) {
      this.state.valoracionesAUCO.forEach(element => {
        itAUCO += element.Implementacion;
      });
    }

    let cuAUCO = 0;
    if (this.state.valoracionesAUCO != undefined) {
      this.state.valoracionesAUCO.forEach(element => {
        cuAUCO += element.Comunicacion;
      });
    }

    let ciAUCOBar = ciAUCO/100;
    let itAUCOBar = itAUCO/100;
    let cuAUCOBar = cuAUCO/100;

    let mediaAUCO = (ciAUCO+itAUCO+cuAUCO)/3;
    mediaAUCO = mediaAUCO.toFixed(1);
    let totalAUCO = ciAUCO+itAUCO+cuAUCO;


    const colors = {
      Robotic: '#1b4f72',
      BeeKeen: '#70E2F3',
      MareenaBeerFestival: 'orange',
      FloridaRatings: '#e61a31',
      AppAUCO: '#111BB0'
    };

    if (this.state.valoracionesMarinaBeer != undefined && this.state.valoracionesRobotic != undefined && this.state.valoracionesBeeKeen != undefined && this.state.valoracionesAUCO != undefined && this.state.valoracionesFlorida != undefined) {

      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Media General  <Ionicons name="ios-stats" color='black' size={25} /></Text>

          <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

              <Text style={styles.label}>Robotic  <Ionicons name="ios-speedometer" color={colors.Robotic} size={25} /></Text>
              <View style={styles.StatsContainer}>
                <Text style={styles.label3}>Creatividad e innovación</Text>
                <Text style={styles.totalRate}>{ciRobotic}</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.Robotic}
                width={null}
                height={15}
                progress={ciRoboticBar}
              />

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Implementación y transferibilidad</Text>
                  <Text style={styles.totalRate}>{itRobotic}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.Robotic}
                  width={null}
                  height={15}
                  progress={itRoboticBar}
                />
              </View>


              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Comunicación y usabilidad</Text>
                  <Text style={styles.totalRate}>{cuRobotic}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.Robotic}
                  width={null}
                  height={15}
                  progress={cuRoboticBar}
                />
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Total de votos:</Text>
      <Text style={styles.totalRate}>{totalRobotic}</Text>
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Media de votos:</Text>
      <Text style={styles.totalRate}>{mediaRobotic}</Text>
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
                <Text style={styles.label3}>Creatividad e innovación</Text>
                <Text style={styles.totalRate}>{ciBeeKeen}</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.BeeKeen}
                width={null}
                height={15}
                progress={ciBeeKeenBar}
              />

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Implementación y transferibilidad</Text>
                  <Text style={styles.totalRate}>{itBeeKeen}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.BeeKeen}
                  width={null}
                  height={15}
                  progress={itBeeKeenBar}
                />
              </View>

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Comunicación y usabilidad</Text>
                  <Text style={styles.totalRate}>{cuBeeKeen}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.BeeKeen}
                  width={null}
                  height={15}
                  progress={cuBeeKeenBar}
                />
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Total de votos:</Text>
                <Text style={styles.totalRate}>{totalBeeKeen}</Text>
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Media de votos:</Text>
                <Text style={styles.totalRate}>{mediaBeeKeen}</Text>
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
                <Text style={styles.label3}>Creatividad e innovación</Text>
                <Text style={styles.totalRate}>{ciMarinaBeer}</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.MareenaBeerFestival}
                width={null}
                height={15}
                progress={ciMarinaBeerBar}
              />

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Implementación y transferibilidad</Text>
                  <Text style={styles.totalRate}>{itMarinaBeer}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.MareenaBeerFestival}
                  width={null}
                  height={15}
                  progress={itMarinaBeerBar}
                />
              </View>

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Comunicación y usabilidad</Text>
                  <Text style={styles.totalRate}>{cuMarinaBeer}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.MareenaBeerFestival}
                  width={null}
                  height={15}
                  progress={cuMarinaBeerBar}
                />
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Total de votos:</Text>
                <Text style={styles.totalRate}>{totalMarinaBeer}</Text>
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Media de votos:</Text>
                <Text style={styles.totalRate}>{mediaMarinaBeer}</Text>
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
                <Text style={styles.label3}>Creatividad e innovación</Text>
                <Text style={styles.totalRate}>{ciFlorida}</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.FloridaRatings}
                width={null}
                height={15}
                progress={ciFloridaBar}
              />

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Implementación y transferibilidad</Text>
                  <Text style={styles.totalRate}>{itFlorida}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.FloridaRatings}
                  width={null}
                  height={15}
                  progress={itFloridaBar}
                />
              </View>

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Comunicación y usabilidad</Text>
                  <Text style={styles.totalRate}>{cuFlorida}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.FloridaRatings}
                  width={null}
                  height={15}
                  progress={cuFloridaBar}
                />
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Total de votos:</Text>
                <Text style={styles.totalRate}>{totalFlorida}</Text>
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Media de votos:</Text>
                <Text style={styles.totalRate}>{mediaFlorida}</Text>
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
                <Text style={styles.label3}>Creatividad e innovación</Text>
                <Text style={styles.totalRate}>{ciAUCO}</Text>
              </View>
              <Progress.Bar
                styles={{ margin: 10 }}
                color={colors.AppAUCO}
                width={null}
                height={15}
                progress={ciAUCOBar}
              />

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Implementación y transferibilidad</Text>
                  <Text style={styles.totalRate}>{itAUCO}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.AppAUCO}
                  width={null}
                  height={15}
                  progress={itAUCOBar}
                />
              </View>

              <View style={styles.margin}>
                <View style={styles.StatsContainer}>
                  <Text style={styles.label3}>Comunicación y usabilidad</Text>
                  <Text style={styles.totalRate}>{cuAUCO}</Text>
                </View>
                <Progress.Bar
                  styles={{ margin: 10 }}
                  color={colors.AppAUCO}
                  width={null}
                  height={15}
                  progress={cuAUCOBar}
                />
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
              <Text style={styles.label2}>Total de votos:</Text>
                <Text style={styles.totalRate}>{totalAUCO}</Text>
              </View>
              <View style={[styles.StatsContainer, styles.margin]}>
                <Text style={styles.label2}>Media de votos:</Text>
                <Text style={styles.totalRate}>{mediaAUCO}</Text>
              </View>
            </ScrollView>
          </SafeAreaView>

        </View>
      );
    }
    else {
      return (
        <View>
          <Text>Cargando...</Text>
        </View>
      );
    }
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

  label2:{
    fontWeight:'bold'
  },

  label3:{
    fontFamily:'arvo'
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
