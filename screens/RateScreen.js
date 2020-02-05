
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomSlider from '../components/customSlider';

export default class RateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

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
              <Text style={styles.team}>Equipo 1</Text>
            </View>

          </View>

        </View>

        <View style={styles.ratingsContainer}>

          <View style={styles.rating}>
            <CustomSlider></CustomSlider>
          </View>

          <View style={styles.rating}>
            <CustomSlider></CustomSlider>
          </View>

          <View style={styles.rating}>
            <CustomSlider></CustomSlider>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          
          <TouchableOpacity style={styles.buttonComplete}>
            <Text style={styles.textButton}>Completar valoraciones</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  appContainer: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 60,

    borderWidth: 1
  },

  app_LogoContainer: {
    flex: 1/2,
    marginLeft: 30,
    marginRight: 15,

    justifyContent: 'center',
    alignItems: "center",

    borderWidth: 1,
  },

  image: {
    width: 150,
    resizeMode: "contain"
  },

  app_DescriptionContainer: {
    flex: 1/2,
    marginRight: 30,
    marginLeft: 15,

    alignItems: "center"
  },

  nameContainer: {
    flex: 1/2,
    justifyContent: "flex-end"
  },

  teamContainer: {
    flex: 1/2,

    marginTop: 5,
  },

  name:{
    color: "#FF5E60",
    fontSize: 30,
  },

  team:{
    color: "#FF5E60",
    fontSize: 15,
  },

  ratingsContainer: {
    flex: 4,
  },

  rating:{
    marginTop: -50,
  },

  buttonContainer: {
    flex: 1/3,
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
