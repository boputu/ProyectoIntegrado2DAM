import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Aplicacion from '../components/Aplicacion';

export default class CarlosScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#e61a31',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
  };

  itemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
        }}
      />
    );
  }

  render() {

    const { navigate } = this.props.navigation;
    let data = [{
      "id":1,
      "equipo": "Equipo 1",
      "nombre": "App de cervezas",
      "descripcion": "wefdfwefwefwer"
    }, 
    {
      "id":2,
      "equipo": "Equipo 2",
      "nombre": "Base de datos",
      "descripcion": "wefdfwefwefwer"
    }, 
    {
      "id":3,
      "equipo": "Equipo 3",
      "nombre": "Anti-bullying",
      "descripcion": "wefdfwefwefwer"
    },
    {
      "id":4,
      "equipo": "Equipo 4",
      "nombre": "No lo se",
      "descripcion": "wefdfwefwefwer"
    },
    {
      "id":5,
      "equipo": "Equipo 5",
      "nombre": "Valoracion de apps",
      "descripcion": "wefdfwefwefwer"
    },
    {
      "id":6,
      "equipo": "Equipo 6",
      "nombre": "Upcoming",
      "descripcion": "wefdfwefwefwer"
    },
    {
      "id":7,
      "equipo": "Equipo 7",
      "nombre": "Upcoming",
      "descripcion": "wefdfwefwefwer"
    },
    {
      "id":8,
      "equipo": "Equipo 8",
      "nombre": "Upcoming",
      "descripcion": "wefdfwefwefwer"
    },
    ]

    return (
      <View style={styles.mainContainer}>
        
        <View style={[{ flex: 1, backgroundColor: "white" }, index%2==0 ? { marginRight: 0.5 } : { marginLeft: 0.5 } ]}>
              <Aplicacion equipo={item.equipo} nombre={item.nombre} descripcion={item.descripcion}></Aplicacion>
        </View>
        
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity style={styles.buttonComplete}>
            <Text style={styles.textButton}>VOTAR</Text>
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
