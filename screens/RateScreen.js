
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CasillaApp from '../components/CasillaApp';

export default class RateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <View style={styles.mainContainer}>

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

  flatlistContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: "rgba(255,0,0,1)"
  },

  buttonContainer: {
    flex: 1/5,
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
