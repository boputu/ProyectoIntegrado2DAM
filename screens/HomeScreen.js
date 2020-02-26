
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Picker
} from 'react-native';

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';
import AboutUs from '../components/AboutUs';

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
      urlImagenes: Global.url + "Imagenes",
      modalVisible: false,
      valoracionesJSON: "",
      pickerFilter: "Todos"
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


  filter(selected) {

    this.setState({ isLoading: true });
    this.setState({ pickerFilter: selected })

    if (selected == 'Todos') {
      fetch(this.state.urlAplicaciones)
        .then(res => res.json())
        .then(res => {
          this.setState({
            dataAplicaciones: res,
            isLoading: false,
          });
        });

    } else {

      fetch(this.state.urlAplicaciones + '?familiaProfesional=' + selected)
        .then(res => res.json())
        .then(res => {
          this.setState({
            dataAplicaciones: res,
            isLoading: false,
          });
        });
    }
  }

  async sendValoration() {

    /*this.state.valoraciones.forEach(valoracion => {
      let objeto = '{"id":' + '"' + valoracion.id + '"' + ',"Creatividad":' + valoracion.Creatividad + ',"Implementacion":' + valoracion.Implementacion + ',"Comunicacion":' + valoracion.Comunicacion + ',"idAplicacion":' + valoracion.idAplicacion +"},";
      this.state.valoracionesJSON+=objeto;

    });
    this.state.valoracionesJSON = this.state.valoracionesJSON.substring(0, this.state.valoracionesJSON.length-1);
    this.state.valoracionesJSON = Object.assign({}, this.state.valoraciones);
    //alert(this.state.valoraciones[0].Creatividad);
    //alert(this.state.valoracionesJSON.Creatividad);
    alert(this.state.valoracionesJSON);*/

    await fetch(this.state.urlValoraciones)
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error haciendo GET");
        }
      })
      .then(respuestaJSON => {
        this.setState({ respuestaJSON: respuestaJSON })
        console.log(respuestaJSON);
        //alert("Post insertado correctamente " + this.valoraciones.id + " " + this.valoraciones.Implementacion);

      })
      .catch(error => {
        console.log("Error de red: " + error);
      });

    let votado = false;

    await this.state.valoraciones.forEach(valoracion => {
      votado = false;
      this.state.respuestaJSON.forEach(element => {
        if (element.idUsu == valoracion.idUsu && element.idAplicacion == valoracion.idAplicacion) {
          votado = true;
        }
      });

      if (votado == false) {
        fetch(this.state.urlValoraciones, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(valoracion), // data can be `string` or {object}!
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
            //alert("Post insertado correctamente " + this.valoraciones.id + " " + this.valoraciones.Implementacion);

          })
          .catch(error => {
            console.log("Error de red: " + error);
          });
      }
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
      headerRight: (
      <View style={styles.topBar}>
      <Ionicons style={{ paddingRight: 85 }} name="ios-qr-scanner" color='yellow' size={30} />
      <AboutUs/>
      </View>
      ),
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
    console.log(this.state.dataAplicaciones);

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
          <View style={styles.search}>
            <Text style={{ color: "white", fontFamily: "arvo", fontSize: 17}}>     Filtrar por ciclo: <Ionicons name="ios-search" color='black' size={15}/>   </Text>
            <Picker
              selectedValue={this.state.pickerFilter}
              style={{ height: 35, width: 200, opacity: 0.5, fontFamily: "arvo", backgroundColor: "black", color: "white",}}
              onValueChange={(itemValue, itemIndex) =>
                this.filter(itemValue)
              }>
              <Picker.Item label="Todos" value="Todos" />
              <Picker.Item label="DAM" value="DAM" />
              <Picker.Item label="Mecatrónica" value="Mecatrónica" />
              <Picker.Item label="Automatización y Robótica industrial" value="Automatización y Robótica industrial" />
              <Picker.Item label="ASIR" value="ASIR" />
              <Picker.Item label="Animación 3D y Videojuegos" value="Animación 3D y Videojuegos" />
              <Picker.Item label="GVEC" value="GVEC" />
              <Picker.Item label="Turismo" value="Turismo" />
              <Picker.Item label="AFI" value="AFI" />
              <Picker.Item label="Animación 3D, juegos y entornos interactivos" value="Animación 3D, juegos y entornos interactivos" />
              <Picker.Item label="Educación Infantil" value="Educación Infantil" />
              <Picker.Item label="MKyP" value="MKyP" />
            </Picker>
          </View>
          <View style={styles.flatlistContainer}>

            <FlatList
              data={this.state.dataAplicaciones}
              numColumns={2}
              ItemSeparatorComponent={this.itemSeparator}

              renderItem={({ item, index }) =>

                <View style={[{ flex: 1, backgroundColor: "white" }, index % 2 == 0 ? { marginRight: 0.5 } : { marginLeft: 0.5 }]}>
                  <CasillaApp
                    nombre={item.nombreApp}
                    equipo={item.idEquipo}
                    familia={item.familiaProfesional}
                    descripcion={item.descripcion}
                    navigation={this.props.navigation}
                    valoraciones={this.state.valoraciones}
                  //yaVotado={funcion => this.state.yaVotado = funcion}
                  ></CasillaApp>
                </View>
              }

              keyExtractor={item => item.id}
            />

          </View>

          <View style={styles.buttonContainer}>

            <AwesomeButtonCartman
              type="secondary"
              stretch="true"
              progress
              onPress={next => {
                if (!first) {
                  //if (this.state.valoraciones.length >= this.state.dataAplicaciones.length) {
                  this.sendValoration();
                  //}
                  /*else {
                    alert("Aun no has votado todos los proyectos");
                  }*/
                }
                next();
              }}
            >
              <Text style={{fontFamily: 'arvo', color: 'white', fontSize: 20}}>
                Completar Valoraciones
              </Text> 
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

  topBar: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },

  flatlistContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },

  search: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },

  buttonContainer: {
    flex: 1 / 6,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ebebeb",
  },

})
