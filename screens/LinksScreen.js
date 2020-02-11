
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CasillaApp from '../components/CasillaApp';

export default class LinksScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataAplicaciones: [],
      dataEquipos: [],
      isLoading: false,
      urlAplicaciones: "http://999eb9b4.ngrok.io/Aplicaciones",
      urlEquipos: "http://999eb9b4.ngrok.io/Equipos",
    }
  }

  UNSAFE_componentWillMount(){
    this.getDataAplicaciones();

  }

  getDataAplicaciones = () => {
    this.setState({isLoading: true});

    fetch(this.state.urlAplicaciones)
    .then(res => res.json())
    .then(res => {

      this.setState({
        dataAplicaciones: res,

      });
    });
  }

  getDataEquipos = () => {
    this.setState({isLoading: true});

    fetch(this.state.urlEquipos)
    .then(res => res.json())
    .then(res => {

      this.setState({
        dataEquipos: res,

      });
    });
  }

  static navigationOptions = {
    title: "",
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
          width: "80%",
        }}
      />
    );
  }

  render() {

    const { navigation } = this.props;
    const qr = JSON.stringify(navigation.getParam('qr', 'NO-QR'));

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, alignItems:"center", justifyContent: 'center'}}>
          <ActivityIndicator size="large" animating></ActivityIndicator>
        </View>
      )
    }
    return (
      <View style={styles.mainContainer}>
        <Text>{qr}</Text>
        <View style={styles.flatlistContainer}>

          <FlatList
            data={this.state.dataAplicaciones}
            numColumns={2}
            ItemSeparatorComponent={this.itemSeparator}

            renderItem={({ item, index }) => 

            <View style={[{ flex: 1, backgroundColor: "white" }, index%2==0 ? { marginRight: 0.5 } : { marginLeft: 0.5 } ]}>
              <CasillaApp 
                equipo={item.equipo}
                nombre={item.nombre}
              ></CasillaApp>
            </View>
            }

            keyExtractor={item => item.equipo}
          />

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
