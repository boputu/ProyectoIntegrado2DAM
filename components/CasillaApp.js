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
    this.state={yaVotados:[]}
  }

  /*componentDidUpdate(prevProps){
    //alert("didupdtae");
    if (this.props.navigation.getParam("recargado") !== prevProps.navigation.getParam("recargado")) {
      this.yaVotado();
      //this.props.yaVotado(this.yaVotado());
    }
  }*/

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

    let yaVotados;
    let disabled;
    let first = this.props.navigation.getParam("first", true);
    if (first) {
      this.state.yaVotados = [];
    }
    else {
      this.state.yaVotados = this.props.navigation.getParam("yaVotados");
    }

    if(this.state.disabled == true){
      return (
        <View style={styles.mainContainer} style={{opacity:0.5}}>
  
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
            onPress={() => this.props.navigation.navigate('Rate', { id: this.props.equipo, yaVotados: this.state.yaVotados, idUsu:this.props.navigation.getParam('qr', 'NO-QR') })}
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

              <Text style={styles.textDescripcion}>
                {this.props.descripcion}
              </Text>
  
            </View>
  
          </TouchableOpacity>
  
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