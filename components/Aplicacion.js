import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Aplicacion extends Component {
    constructor(props) {
        super(props);
    }

    buscarApp = (e) => {
        let id = e.toLowerCase()
        let apps = this.state.data
        let filteredName = apps.filter((item) => {
          return item.name.toLowerCase().match(id)
        })
        if (id === '1') {
          this.setState({
            
            return:{
              apps: data.id[1]
            }
          })
        }else if (id === '2'){
          this.setState({
            
            return:{
              apps: data.id[2]
            }
          })
        }else if (id === '3'){
          this.setState({
            
            return:{
              apps: data.id[3]
            }
          })
        }else if (id === '4'){
          this.setState({
            
            return:{
              apps: data.id[4]
            }
          })
        }else if (id === '5'){
          this.setState({
            
            return:{
              apps: data.id[5]
            }
          })
        }else if (id === '6'){
          this.setState({
            
            return:{
              apps: data.id[6]
            }
          })
        }else if (id === '7'){
          this.setState({
            
            return:{
              apps: data.id[7]
            }
          })
        }else{
          this.setState({
            
            return:{
              apps: data.id[8]
            }
          })
        }
      }

    render() {
        return (
            <View style={styles.mainContainer}>

              <View style={styles.itemContainer}>

                <View style={styles.item_LogoContainer}>
                  <Image source={require('../images/LogoApp.png')} style={{ width: 100, height: 100 }}></Image>
                </View>
                
                <View style={styles.item_DescriptionContainer}>

                  <Text style={styles.textName}>
                    {this.data.buscarApp(id)}
                  </Text>

                  <Text style={styles.textTeam}>
                    {this.props.equipo[id]}
                  </Text>
                  
                  <Text style={styles.textTeam}>
                    {this.props.equipo[id]}
                  </Text>

                </View>

              </View>
               
            </View>
        );
    }
}

export default Aplicacion;

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