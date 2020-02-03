
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

import Producto from '../components/Producto';

export default class LinksScreen extends Component {

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



  render() {

    const { navigate } = this.props.navigation;
    let data = [{
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    }, {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    }, {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    },
    {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    }, {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    }, {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    },
    {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    }, {
      "nombre": "nf",
      "descripcion": "dfasljfadlñsdfañj"
    },
    ]

    return (
      <View>
        <TouchableOpacity><Text>Volver a intruducir usuario</Text></TouchableOpacity>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <Producto nombre={item.nombre} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: 'black',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#2f95dc",
    borderRightColor: '#2577b0',
    borderRightWidth: 5,
    borderLeftColor: '#2577b0',
    borderLeftWidth: 5,
  },
  loginText: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFDFDF',
    padding: 10
  },
})
