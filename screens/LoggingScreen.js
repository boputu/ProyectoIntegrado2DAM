
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

const { width } = Dimensions.get('screen');

export default class LoggingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      qrData: "",
      rendered: false,
      urlValoraciones: "http://34.239.146.234:3000/Valoraciones",
      accepted: undefined
    }
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  renderCamera() {
    this.setState({ rendered: true });
  }

  aceptar() {
    fetch(this.state.urlValoraciones)
      .then(res => res.json())
      .then(res => {

        alert(this.state.qrURL);
        if (this.state.qrURL == "www.floridauniversitaria.es") {
          this.state.accepted = true;
          res.forEach(valoracion => {
            if (valoracion[0] != undefined) {
              if (valoracion[0].id == this.state.qrTEL) {
                this.state.accepted = false;
              }
            }
          });
  
  
          if (this.state.accepted) {
            const { navigate } = this.props.navigation;
            if (this.state.qrTEL == "") {
              Alert.alert("Introduce o escanea un código QR")
            } else {
              navigate('Home', { qr: this.state.qrTEL });
            }
          }
          else {
            alert("Ya ha votado");
          }
        }
        else{
          this.props.navigation.navigate('Home', { qr: this.state.qrTEL });
          //alert("No permiso");
          //Comprobar aqui con los codigos que nos dara manel

        }        
      });
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
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

    const { hasCameraPermission, scanned } = this.state;

    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding" enabled>

        <View style={styles.container}>

          <Image
            style={{ width: 150, height: 150, marginBottom: 50 }}
            source={require('../images/florida.png')}
          />

          <View style={styles.inputContainer}>
            <Ionicons style={styles.inputIcon} name="ios-qr-scanner" size={26} />
            <TextInput style={styles.inputs}
              placeholder="Escriba un código"
              value={this.state.qrData}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(qrData) => this.setState({ qrData })} />
          </View>

          <TouchableHighlight style={[styles.scanContainer, styles.loginButton]}
            onPress={() => { this.renderCamera() }}>
            <Text style={styles.loginText}>Scanear QR</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.aceptarContainer, styles.aceptarButton]}
            onPress={() => { this.aceptar() }}>
            <Text><Ionicons style={styles.inputIcon} name="md-checkmark" color="#a8f748" size={40} /></Text>
          </TouchableHighlight>

          {this.state.rendered && (
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={[StyleSheet.absoluteFill, styles.containerCamera]}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            >
              <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: width / 2, height: width / 2 }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.leftTop} />
                    <View style={{ flex: 1 }} />
                    <View style={styles.rightTop} />
                  </View>
                  <View style={{ flex: 1 }} />
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.leftBottom} />
                    <View style={{ flex: 1 }} />
                    <View style={styles.rightBottom} />
                  </View>
                </View>
              </View>
            </BarCodeScanner>
          )}

        </View>

      </KeyboardAvoidingView>
    );

  }
  handleBarCodeScanned = ({ type, data }) => {
    const { navigate } = this.props.navigation;
    this.setState({ scanned: true });
    this.setState({ rendered: false });
    //navigate('Home', { qr: data });

    this.state.qrURL = data.substring(154, 181);
    this.state.qrTEL = data.substring(42, 51);


    this.aceptar();

    /*let url = "";
    let corretoCount = 0;
    let correcto = false;
    let dosP = false;
    let cuentaLetras = 27;
    let letra = "";
    for (let i = 0; i <= data.length; i++) {
      letra = data[i];
      alert(letra);
      if (letra == "U") {
        corretoCount++;
      }
      else {
        corretoCount = 0;
      }
      if (letra == "R" && corretoCount == 1) {
        corretoCount++;
      }
      else {
        corretoCount = 0;
      }
      if (letra == "L" && corretoCount == 2) {
        correcto = true;
      }
      else {
        corretoCount = 0;
      }
      if (correcto == true) {
        if (dosP == false) {
          dosP = true;
        }
        else {
          if (cuentaLetras >= 0) {
            url += letra;
          }
        }
      }
      letra = "";
    }*/
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  },

  leftTop: {
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white',
    flex: 1,
  },
  leftBottom: {
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'white',
    flex: 1,
  },
  rightTop: {
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white',
    flex: 1,
  },
  rightBottom: {
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'white',
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },

  inputContainer: {
    borderBottomColor: 'black',
    borderRightColor: '#e61a31',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    borderRightWidth: 5,
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
  scanContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  aceptarContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#2f95dc",
    borderRightColor: '#2577b0',
    borderRightWidth: 5,
    borderLeftColor: '#2577b0',
    borderLeftWidth: 5,
  },
  aceptarButton: {
    backgroundColor: "#818285",
    borderRightColor: '#a8f748',
    borderRightWidth: 5,
    borderLeftColor: '#a8f748',
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
