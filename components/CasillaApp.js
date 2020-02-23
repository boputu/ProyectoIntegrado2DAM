import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';

class CasillaApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      yaVotados:[],
      isVisible: false,
    }
  }

  /*componentDidUpdate(prevProps){
    //alert("didupdtae");
    if (this.props.navigation.getParam("recargado") !== prevProps.navigation.getParam("recargado")) {
      this.yaVotado();
      //this.props.yaVotado(this.yaVotado());
    }
  }*/

  toggleOverlay = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  yaVotado(){
    //alert("ya votado");
    let disabled = false;
    this.state.yaVotados.forEach(yaVotado => {
      if (this.props.equipo == yaVotado) {
        disabled = true;
      }
    });
    this.setState({disabled:disabled});
  }

  componentDidMount(){
    this.yaVotado();
    //this.props.yaVotado(this.yaVotado());
  }

  render() {
    //lert("render casilla");
    //alert("Equipo " + this.props.equipo);

    /*let yaVotados;
    let valoraciones;
    let disabled;*/
    let first = this.props.navigation.getParam("first", true);
    if (first) {
      this.state.yaVotados = [];
      //this.state.valoraciones = [];
    }
    else {
      this.state.yaVotados = this.props.navigation.getParam("yaVotados");
      //this.state.valoraciones = this.props.navigation.getParam("valoraciones");
      //if(this.state.valoraciones[2] != undefined){
      // alert(this.state.valoraciones[2].Implementacion);
      //}
    }

    if(this.state.disabled == true){
      return (
        <View style={styles.mainContainer} style={{opacity:0.3}}>
  
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => alert("Proyecto ya votado")}
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

              <Text style={styles.textDescription}>
                {this.props.descripcion}
              </Text> 
  
            </View>
  
          </TouchableOpacity>
  
        </View>
      );
    }
    else{
      return (
        <View style={styles.mainContainer}>
  
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => this.props.navigation.navigate('Rate', { id: this.props.equipo, yaVotados: this.state.yaVotados, idUsu:this.props.navigation.getParam('qr', 'NO-QR'), valoraciones: this.props.valoraciones })}
          >
  
            <View style={styles.item_LogoContainer}>
              <Image source={require('../images/LogoApp.png')} style={{ width: 100, height: 100 }}></Image>
            </View>
  
          </TouchableOpacity>

            <View style={styles.item_DescriptionContainer}>
  
              <View style={styles.nameContainer}>

                <Text style={styles.textName}>
                  {this.props.nombre}
                </Text>

              </View>

              <TouchableOpacity
                style={styles.overlayButton}
                onPress={this.toggleOverlay}>
                <Ionicons style={styles.icon} name="information-variant" />
              </TouchableOpacity>

              <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={this.toggleOverlay}
                height="auto"
                >
                <View>
                  <Text style={styles.textOverlay}>
                    {this.props.descripcion}
                  </Text>
                </View>
              </Overlay>

            </View>
  
            <View style={styles.teamContainer}>
              <Text style={styles.textTeam}>
                2º Desarrollo de Aplicaciones Multiplataform
              </Text>
            </View>
  
        </View>
      );
    }
    
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
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  item_DescriptionContainer: {
    flex: 1 / 3,
    flexDirection:  "row",
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

    textAlign: "center",

    marginTop: 3
  },

  icon: {
    fontSize: 30,
    color: 'black',
  },

  nameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    marginLeft: 5,
  },

  overlayButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,

    marginRight: 5,
  },

  teamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 10,
  },

  textOverlay: {
    color: "#FF5E60",
    fontSize: 17,
  }
})