
import React, { Component } from 'react';
import 'react-native-gesture-handler';

import * as Progress from 'react-native-progress';

import { Ionicons } from '@expo/vector-icons';

import Graphics from '../components/Graphics';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Global from '../constants/Global';
import { element } from 'prop-types';
import { addOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class GraphicScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true,
      urlValoraciones: Global.url + "Valoraciones",
      urlAplicaciones: Global.url + "Aplicaciones",
      countUsers: 1,
      valoraciones: undefined,
    }
  }

  UNSAFE_componentWillMount() {
    this.getData();
  }

  getData() {
    fetch(this.state.urlAplicaciones)
      .then(respuesta => {
        if (respuesta.ok) {
          return respuesta.json();
        }
        else {
          console.log("Error")
        }
      })
      .then(respuestaJSON => {
        this.setState({ aplicaciones: respuestaJSON })
      })
      .catch(error => console.log(error))


    fetch(this.state.urlValoraciones)
      .then(respuesta => {
        if (respuesta.ok) {
          return respuesta.json();
        }
        else {
          console.log("Error")
        }
      })
      .then(respuestaJSON => {
        respuestaJSON.forEach(valoracion => {
          if (this.state.valoraciones == undefined) {
            let nombreApp = "";
            this.state.aplicaciones.forEach(aplicacion => {
              if (aplicacion.id == valoracion.idAplicacion) {
                nombreApp = aplicacion.nombreApp;
              }
            });
            this.setState({ valoraciones: [{ idApp: valoracion.idAplicacion, nombreApp: nombreApp, creatividad: valoracion.Creatividad, implementacion: valoracion.Implementacion, comunicacion: valoracion.Comunicacion }] })
          }
          else {
            let appRegistrada = false;
            this.state.valoraciones.forEach(element => {
              if (valoracion.idAplicacion == element.idApp) {
                appRegistrada = true;
              }
            });

            if (appRegistrada == true) {
              let pos = 0;
              let posActual = 0;
              this.state.valoraciones.forEach(element => {
                if (element.idAplicacion == element.idApp) {
                  pos = posActual;
                }
                posActual++;
              });

              this.state.valoraciones[pos].creatividad = (this.state.valoraciones[pos].creatividad + valoracion.Creatividad) / 2;
              this.state.valoraciones[pos].implementacion = (this.state.valoraciones[pos].implementacion + valoracion.Implementacion) / 2;
              this.state.valoraciones[pos].comunicacion = (this.state.valoraciones[pos].comunicacion + valoracion.Comunicacion) / 2;
              this.forceUpdate();
            }
            else {
              let nombreApp = "";
              this.state.aplicaciones.forEach(aplicacion => {
                if (aplicacion.id == valoracion.idAplicacion) {
                  nombreApp = aplicacion.nombreApp;
                }
              });
              this.state.valoraciones.push({ idApp: valoracion.idAplicacion, nombreApp: nombreApp, creatividad: valoracion.Creatividad, implementacion: valoracion.Implementacion, comunicacion: valoracion.Comunicacion });
            }
          }
        });
        console.log(this.state.valoraciones);

      })
      .catch(error => console.log(error))

  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Estadísticas',
      headerStyle: {
        backgroundColor: '#e61a31',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
    }
  };

  render() {


    if (this.state.valoraciones != undefined) {

      return (

        <View style={styles.mainContainer}>
          <Text style={styles.title}>Media General  <Ionicons name="ios-stats" color='black' size={25} /></Text>

          <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>

              <FlatList
                data={this.state.valoraciones}
                keyExtractor={item => item.nombreApp}
                renderItem={({ item }) => {

                  let colorCi;

                  if (item.creatividad.toFixed(1) == 1 || item.creatividad.toFixed(1) == 2) {
                    colorCi = "red";
                  }
                  if (item.creatividad.toFixed(1) == 3) {
                    colorCi = "orange";
                  }
                  if (item.creatividad.toFixed(1) == 5 || item.creatividad.toFixed(1) == 4) {
                    colorCi = "green";
                  }


                  let colorIt;

                  if (item.implementacion.toFixed(1) == 1 || item.implementacion.toFixed(1) == 2) {
                    colorIt = "red";
                  }
                  if (item.implementacion.toFixed(1) == 3) {
                    colorIt = "orange";
                  }
                  if (item.implementacion.toFixed(1) == 5 || item.implementacion.toFixed(1) == 4) {
                    colorIt = "green";
                  }


                  let colorCu;

                  if (item.comunicacion.toFixed(1) == 1 || item.comunicacion.toFixed(1) == 2) {
                    colorCu = "red";
                  }
                  if (item.comunicacion.toFixed(1) == 3) {
                    colorCu = "orange";
                  }
                  if (item.comunicacion.toFixed(1) == 5 || item.comunicacion.toFixed(1) == 4) {
                    colorCu = "green";
                  }

                  return (

                    <Graphics
                      //Nombre de todas las apps
                      nombreApp={item.nombreApp}

                      //Color barra CI
                      colorBarCi={colorCi}

                      //Color barra IT
                      colorBarIt={colorIt}

                      //Color barra CU
                      colorBarCu={colorCu}

                      //Puntuación creatividad e innovacion
                      ci={item.creatividad.toFixed(1)}

                      //Barra progreso creatividad e innovación / 100
                      ciBar={item.creatividad / 5}

                      //Puntuación implementación y transferibilidad
                      it={item.implementacion.toFixed(1)}

                      //Barra progreso implementación y transferibilidad / 100
                      itBar={item.implementacion / 5}

                      //Puntuación comunicación y usabilidad
                      cu={item.comunicacion.toFixed(1)}

                      //Barra progreso comunicación y usabilidad / 100
                      cuBar={item.comunicacion / 5}

                      //Suma de ci,it,cu
                      //total={this.state.valoraciones.creatividad+this.state.valoraciones.implementacion+this.state.valoraciones.comunicacion}

                      //Suma de ci,it,cu / 3
                      media={((item.creatividad + item.implementacion + item.comunicacion) / 3).toFixed(1)}
                    />
                  )
                }}
              />

            </ScrollView>
          </SafeAreaView>

        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
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
    marginTop: 10,
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

  scanContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 20,
  },

  loginButton: {
    backgroundColor: "#2f95dc",
    borderRightColor: '#2577b0',
    borderRightWidth: 5,
    borderLeftColor: '#2577b0',
    borderLeftWidth: 5,
  },

  countUsers: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'arvo',
    opacity: 0.5
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

  label2: {
    fontWeight: 'bold'
  },

  label3: {
    fontFamily: 'arvo'
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
