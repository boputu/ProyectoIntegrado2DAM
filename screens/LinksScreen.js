
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



export default class LinksScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
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
          width: "100%",
        }}
      />
    );
  }

  render() {

    const { navigation } = this.props;
    const qr = JSON.stringify(navigation.getParam('qr', 'NO-QR'));

    let data = [{
      "equipo": "Equipo 1",
      "nombre": "App de cervezas"
    }, 
    {
      "equipo": "Equipo 2",
      "nombre": "Base de datos"
    }, 
    {
      "equipo": "Equipo 3",
      "nombre": "Anti-bullying"
    },
    {
      "equipo": "Equipo 4",
      "nombre": "No lo se"
    }, {
      "equipo": "Equipo 5",
      "nombre": "Valoracion de apps"
    }, {
      "equipo": "Equipo 6",
      "nombre": "Upcoming"
    },
    {
      "equipo": "Equipo 7",
      "nombre": "Upcoming"
    }, {
      "equipo": "Equipo 8",
      "nombre": "Upcoming"
    },
    ]

    return (
      <View style={styles.mainContainer}>
        <Text>{qr}</Text>
        <View style={styles.flatlistContainer}>

          <FlatList
            data={data}
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
