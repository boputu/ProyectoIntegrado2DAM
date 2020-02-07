import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CasillaApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainContainer}>

              <TouchableOpacity style={styles.itemContainer}
                
              >

                <View style={styles.item_LogoContainer}>
                  <Image source={require('../images/LogoApp.png')} style={{ width: 100, height: 100 }}></Image>
                </View>
                
                <View style={styles.item_DescriptionContainer}>

                  <Text style={styles.textName}>
                    {this.props.nombre}
                  </Text>

                  <Text style={styles.textTeam}>
                    {this.props.equipo}
                  </Text>

                </View>

              </TouchableOpacity>
               
            </View>
        );
    }
}

export default CasillaApp;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },

    itemContainer: {
      justifyContent: "center",
      alignItems: "center",

      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },

    item_LogoContainer: {
      flex: 1/2,
      justifyContent: "center",
      alignItems: "center",
    },

    item_DescriptionContainer: {
      flex: 1/3,
      justifyContent: 'center',
      alignItems: "center",

      marginTop: 5,
      marginBottom: 5,
    },

    textName: {
      color: "#FF5E60",
      fontSize: 20,
      fontWeight: "bold",
    },

    textTeam: {
      color: "#FF5E60",
      fontSize: 15,

      marginTop: 3
    },
  })