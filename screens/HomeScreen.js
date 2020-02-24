
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

import CasillaApp from '../components/CasillaApp';

import Global from '../constants/Global';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataAplicaciones: [],
      isLoading: false,
      urlAplicaciones: Global.url + "Aplicaciones",
      urlValoraciones: Global.url + "Valoraciones",
      modalVisible: false,
    }
  }
  componentDidUpdate(prevProps) {
    //alert("didupdtae");
    if (this.props.navigation.getParam("recargado") !== prevProps.navigation.getParam("recargado")) {
      this.props.navigation.setParams({ recargado: undefined });
      this.getDataAplicaciones();
    }
  }


  UNSAFE_componentWillMount() {
    //alert("willmount home");
    this.getDataAplicaciones();
  }

  getDataAplicaciones = () => {
    this.setState({ isLoading: true });

    fetch(this.state.urlAplicaciones)
      .then(res => res.json())
      .then(res => {

        this.setState({
          dataAplicaciones: res,
          isLoading: false,
        });
      });
  }

  sendValoration() {
    fetch(this.state.urlValoraciones, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.state.valoraciones), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error haciendo POST");
        }
      })
      .then(respuestaJSON => {
        console.log(respuestaJSON);
        alert("Post insertado correctamente " + this.valoraciones.id + " " + this.valoraciones.Implementacion);

      })
      .catch(error => {
        console.log("Error de red: " + error);
      });

  }


  itemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
        }}
      />
    );
  }

  static navigationOptions = ({ navigation }) => {
    let qr = navigation.state.params.qr;
    return {
      title: qr,
      headerRight: (<Ionicons style={{ paddingRight: 100 }} name="ios-qr-scanner" color='yellow' size={30} />),
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
    //alert("render home");

    let first = this.props.navigation.getParam("first", true);
    if (first) {
      this.state.valoraciones = [];
    }
    else {
      this.state.valoraciones = this.props.navigation.getParam("valoraciones");
      //alert(this.state.dataAplicaciones.length);

      if (this.state.valoraciones.length >= this.state.dataAplicaciones.length) {
        //alert("Enviar");
      }
    }

    const { navigation } = this.props;
    const qr = JSON.stringify(navigation.getParam('qr', 'NO-QR'));


    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.flatlistContainer}>

            <FlatList
              data={this.state.dataAplicaciones}
              numColumns={2}
              ItemSeparatorComponent={this.itemSeparator}

              renderItem={({ item, index }) =>

                <View style={[{ flex: 1, backgroundColor: "white" }, index % 2 == 0 ? { marginRight: 0.5 } : { marginLeft: 0.5 }]}>
                  <CasillaApp
                    nombre={item.nombreApp}
                    idEquipo={item.idEquipo}
                    familia={item.familiaProfesional}
                    descripcion={item.descripcion}
                    navigation={this.props.navigation}
                    valoraciones={this.state.valoraciones}
                  //yaVotado={funcion => this.state.yaVotado = funcion}
                  ></CasillaApp>
                </View>
              }

              keyExtractor={item => item.equipo}
            />

          </View>

          <View style={styles.buttonContainer}>

            <AwesomeButtonCartman
              type="secondary"
              stretch="true"
              progress
              onPress={next => {
                if (!first) {
                  if (this.state.valoraciones.length >= this.state.dataAplicaciones.length) {
                    this.sendValoration();
                  }
                  else {
                    alert("Aun no has votado todos los proyectos");
                  }
                }
                next();
              }}
            >
              Completar Valoraciones
            </AwesomeButtonCartman>

          </View>

        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  flatlistContainer: {
    flex: 1,
    backgroundColor: 'red',
  },

  buttonContainer: {
    flex: 1/6,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ebebeb",
  },

})
