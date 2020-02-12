
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import CustomSlider from '../components/customSlider';

import Global from '../constants/Global';

export default class RateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataEquipo: null,
      isLoading: true,
      integrantes: ""
    }
  }


  getIntegrantes(id) {
    fetch(Global.url + "Equipos/" + id)
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataEquipo: res,
          isLoading: false,
        });
        let integrantes = "\n";
        this.state.dataEquipo.integrantes.forEach(integrante => {
          integrantes += integrante + ", ";
        });
        this.setState({ integrantes: integrantes });
      });
  }

  componentWillMount() {
    let id = this.props.navigation.getParam("id");
    this.getIntegrantes(id);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View><Text>Cargando</Text></View>
      );
    }
    else {

      return (
        <View style={styles.mainContainer}>

          <View style={styles.appContainer}>

            <View style={styles.app_LogoContainer}>
              <Image source={require('../images/LogoApp.png')} style={styles.image}></Image>
            </View>

            <View style={styles.app_DescriptionContainer}>

              <View style={styles.nameContainer}>
                <Text style={styles.name}>Cervezas</Text>
              </View>

              <View style={styles.teamContainer}>
                <Text style={styles.team}>Equipo {this.props.navigation.getParam("id")}</Text>
                <Text style={{opacity:0.5, color:"#e61a31"}}> {this.state.integrantes} </Text>
              </View>

            </View>

          </View>

          <View style={styles.ratingsContainer}>

            <View style={styles.rating}>
              <CustomSlider text="Creatividad e innovación" linea={2000}></CustomSlider>
            </View>

            <View style={styles.rating}>
              <CustomSlider text="Implementación y transferibilidad"></CustomSlider>
            </View>

            <View style={styles.rating}>
              <CustomSlider text="Comunicación y usabilidad"></CustomSlider>
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

            <TouchableOpacity>
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
    flex: 2,
    flexDirection: "row",
    marginBottom: 20,
  },

  app_LogoContainer: {
    flex: 1 / 2,
    marginLeft: 30,
    marginRight: 15,

    justifyContent: 'center',
    alignItems: "center",
  },

  image: {
    width: "80%",
    resizeMode: "contain"
  },

  app_DescriptionContainer: {
    flex: 1 / 2,
    marginRight: 30,
    marginLeft: 15,

    alignItems: "center"
  },

  nameContainer: {
    flex: 1 / 2,
    justifyContent: "flex-end"
  },

  teamContainer: {
    flex: 1 / 2,

    marginTop: 5,
  },

  name: {
    color: "black",
    fontSize: 30,
    fontFamily: 'arvo',
  },

  team: {
    color: "black",
    opacity: 0.5,
    fontSize: 15,
    fontFamily: 'arvo',
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
