
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import CustomSlider from '../components/customSlider';


import Global from '../constants/Global';

export default class RateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataEquipo: null,
      urlImagen: "",
      isLoading: true,
      integrantes: "",
      valoracion: {},
    }
  }

  getData(id) {
    this.setState({isLoading: true})
    fetch(Global.url + "Equipos/" + id)
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataEquipo: res,
          isLoading: false,
        });
        let integrantes = "";
        this.state.dataEquipo.integrantes.forEach(integrante => {
          integrantes += integrante + "\n";
        });
        this.setState({ integrantes: integrantes });
      });
  }

  getImagen(id){
    this.setState({isLoading: true})
    fetch(Global.url + "Imagenes?idEquipo=" + id)
      .then(res => res.json())
      .then(res => {
        this.setState({
          urlImagen: res,
          isLoading: false,
        });
      });
  }

  componentWillMount() {
    let id = this.props.navigation.getParam("id");
    this.getData(id);
    this.getImagen(id);
  }

  valorateApp(id) {
    //let first = this.props.navigation.getParam("first");
    let yaVotados = this.props.navigation.getParam("yaVotados");
    let valoraciones = this.props.navigation.getParam("valoraciones");
    yaVotados.push(id);
    //alert("Despues de push" + yaVotados);
    let valoracion = {id:this.props.navigation.getParam("idUsu"), Creatividad:this.state.valoracionCre, Implementacion:this.state.valoracionImp, Comunicacion:this.state.valoracionCom, idAplicacion:id};
    valoraciones.push(valoracion);
    this.props.navigation.navigate('Home', { yaVotados: yaVotados, first: false, recargado: false, valoracion:this.state.valoracion, valoraciones: valoraciones});
    //alert(this.state.valoracion.Implementacion);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
        </View>
      )
    }
    else {
      return (
        <View style={styles.mainContainer}>

          <View style={styles.appContainer}>

            <Image source={{uri: this.state.urlImagen.url}}
            style={styles.image}></Image>

            <View style={styles.app_DescriptionContainer}>

              <Text style={styles.name}>{this.props.navigation.getParam("nombre")}</Text>

              <View style={styles.teamContainer}>
                
                <ScrollView>
                  <Text style={styles.team}>{this.state.integrantes}</Text>
                </ScrollView>
                
              </View>

            </View>

          </View>

          <View style={styles.ratingsContainer}>

            <View style={styles.rating}>
              <CustomSlider setValoracion={(valoracionCre) => this.setState({valoracionCre: valoracionCre})} text="Creatividad e innovación" linea={2000}></CustomSlider>
            </View>

            <View style={styles.rating}>
              <CustomSlider setValoracion={(valoracionImp) => this.setState({valoracionImp: valoracionImp})} text="Implementación y transferibilidad"></CustomSlider>
            </View>

            <View style={styles.rating}>
              <CustomSlider setValoracion={(valoracionCom) => this.setState({valoracionCom: valoracionCom})} text="Comunicación y usabilidad"></CustomSlider>
            </View>

          </View>

          <View style={styles.labelContainer}>

            <View style={styles.line}>
              <Text style={styles.label}>Feedback  <Ionicons style={styles.inputIcon} name="ios-thumbs-up" color="grey" size={25} /></Text>

            </View>

          </View>

          <View style={styles.feedbackContainer}>

            <TextInput
              placeholder="¿Hay algún comentario extra que quieras hacer?"
              placeholderTextColor="red"
              style={styles.text}>
            </TextInput>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={() => this.valorateApp(this.props.navigation.getParam("id"))}>
              <LinearGradient
                start={[0, 0.5]}
                end={[1, 0.5]}
                colors={['orange', 'red']}
                style={{ borderRadius: 5 }}>
                <View style={styles.circleGradient}>
                  <Text style={styles.visit}>Valorar Aplicación   <Ionicons style={styles.inputIcon} name="ios-star" color="green" size={25} /></Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>


          </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#DCDCDC"
  },

  appContainer: {
    flex: 3,
    flexDirection: "row",
    marginBottom: 30,
    borderWidth: 1
  },

  app_LogoContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 10,

    justifyContent: 'center',
    alignItems: "center",

    borderWidth: 1
  },

  image: {
    width: "40%",
    resizeMode: "contain",
    padding: 20

  },

  app_DescriptionContainer: {
    flex: 2,
    marginRight: 10,

    borderWidth: 1
  },

  teamContainer: {
    flex: 1,
    marginTop: 5,
  },

  name: {
    color: "black",
    fontSize: 30,
    fontFamily: 'arvo',
    textAlign: "center",

    marginVertical: 10,
  },

  team: {
    color: "black",
    opacity: 0.5,
    fontSize: 15,
    fontFamily: 'arvo',
    textAlign: "center",
  },

  ratingsContainer: {
    flex: 4,
  },

  feedbackContainer: {
    flex: 1.5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },

  text: {
    color: "#e61a31",
    opacity: 0.3,
    fontFamily: 'arvo',
  },

  labelContainer: {
    flexDirection: "row",
    marginTop: 40
  },

  label: {
    marginLeft: 4,
    color: "black",
    fontSize: 20,
    marginTop: -10,
    fontFamily: 'arvo',
    opacity: 0.6
  },


  line: {
    borderLeftWidth: 1,
    borderBottomWidth: 3,
    height: 20,

    marginLeft: 20,
    borderLeftColor: "red",
    borderBottomColor: '#e61a31',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonComplete: {
    width: 350,
    height: 40,
    alignItems: "center",
    justifyContent: "center",

  },

  textButton: {
    color: "white",
    fontSize: 25,
    fontFamily: 'arvo',
  },

  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "#DCDCDC",
    color: 'black',
    fontSize: 25,
    fontFamily: 'arvo',
  },

  circleGradient: {
    width: 350,
    height: 40,
    margin: 1,
    borderRadius: 5
  },

})
