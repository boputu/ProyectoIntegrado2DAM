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
        this.state={}
        
    }

    buscarApp = (e) => {
        let id = e;
        let apps = this.state.data;
        apps.filter((item) => {
          return item.name.match(id);
        })
        if (id === '1') {
          this.setState({apps: data.item.where(id === 1)})
        }else if (id === '2'){
          this.setState({apps: data.item.where(id === 2)})
        }else if (id === '3'){
          this.setState({apps: data.item.where(id === 3)})
        }else if (id === '4'){
          this.setState({apps: data.item.where(id === 4)})
        }else if (id === '5'){
          this.setState({apps: data.item.where(id === 5)})
        }else if (id === '6'){
          this.setState({apps: data.item.where(id === 6)})
        }else if (id === '7'){
          this.setState({apps: data.item.where(id === 7)})
        }else{
          this.setState({apps: data.item.where(id === 8)})
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
                  
                <Text style={styles.textName}>ID App</Text>
                  <Text style={styles.textName}>
                    {this.buscarApp(this.id)}
                  </Text>
                
                <Text style={styles.textName}>Nombre del equipo:</Text>
                  <Text style={styles.textTeam}>
                    {this.props.equipo[this.id]}
                  </Text>
                <Text style={styles.textName}>Descripcion:</Text>
                  <Text style={styles.textTeam}>
                    {this.props.descripcion[this.id]}
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
    flex: 1
  },

  appContainer: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 20,
  },

  app_LogoContainer: {
    flex: 1/2,
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

  feedbackContainer:{
    flex: 1.5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },

  text: {
    color: "red",
    opacity: 0.6
  },

  labelContainer: {
    flexDirection: "row",
    marginTop: 40
  },

  label: {
      marginLeft: 4,
      color: "#FF0004",
      fontSize: 25,
      marginTop: -10
  },

  line: {
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    height: 20,

    marginLeft: 5,
    borderColor: "#FF5E60"
  },

  buttonContainer: {
    flex: 1,
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