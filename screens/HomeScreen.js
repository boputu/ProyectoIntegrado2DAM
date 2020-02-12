
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/cartman';

import CasillaApp from '../components/CasillaApp';

import Global from '../constants/Global';

export default class LinksScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataAplicaciones: [],
      dataEquipos: [],
      isLoading: false,
      urlAplicaciones: Global.url + "Aplicaciones",
      urlEquipos: Global.url + "Equipos",
    }
  }

  UNSAFE_componentWillMount(){
    this.getDataAplicaciones();
    this.getDataEquipos();
  }

  getDataAplicaciones = () => {
    this.setState({isLoading: true});

    fetch(this.state.urlAplicaciones)
    .then(res => res.json())
    .then(res => {

      this.setState({
        dataAplicaciones: res,
        isLoading: false,

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
        isLoading: false,
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
          height: 3,
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
    }else{
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
                  equipo={item.idEquipo}
                  nombre={item.nombreApp}
                  navigation={this.props.navigation}
                ></CasillaApp>
              </View>
              }
  
              keyExtractor={item => item.equipo}
            />
  
          </View>
          
          <View style={styles.buttonContainer}>
            
          <AwesomeButtonRick
          type="secondary"
      progress
      onPress={next => {
        /** Do Something **/
        next();
      }}
    >
    Completar Valoraciones
    </AwesomeButtonRick>
  
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
    backgroundColor: "#DCDCDC",
  },

  buttonContainer: {
    flex: 1/5,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#DCDCDC'
  },

})
