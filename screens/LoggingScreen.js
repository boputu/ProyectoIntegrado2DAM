
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import Global from '../constants/Global';

import AboutUs from '../components/AboutUs';

const { width } = Dimensions.get('screen');

export default class LoggingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      qrData: "",
      rendered: false,
      urlValoraciones: Global.url + "Valoraciones",
    }
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  renderCamera() {
    this.setState({ rendered: true });
  }

  aceptar(url,tel,data) {
    fetch(this.state.urlValoraciones)
      .then(res => res.json())
      .then(res => {

        if (url == "www.floridauniversitaria.es" || data.length == 23) {
            const { navigate } = this.props.navigation;
            if (tel == undefined) {
              let eventBrite = data.substr(data.length - 9);
              navigate('Home', { qr: eventBrite });
            } else {
              navigate('Home', { qr: tel });
            }
        }
        else {
          //this.props.navigation.navigate('Home', { qr: tel });
          alert("Escanea un QR de la Florida");
          //Comprobar aqui con los codigos que nos dara manel

        }
      });
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Rate it!',
      headerRight: (<AboutUs />),
      headerStyle: {
        backgroundColor: '#e61a31',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
    }
  };

  render() {

    const { hasCameraPermission, scanned } = this.state;

    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding" enabled>

        <View style={styles.container}>

          <Image
            style={{ width: 300, height: 150, marginBottom: 50, resizeMode: "contain" }}
            source={require('../images/florida.png')}
          />
          <TouchableOpacity style={[styles.scanContainer, styles.loginButton]}
            onPress={() => { this.renderCamera() }}>
            <Text style={styles.loginText}>Escanear QR   <Ionicons name="ios-barcode" color='white' size={25} /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.scanContainer, styles.graphicButton]}
            onPress={() => { this.props.navigation.navigate('Graphic') }}>
            <Text style={styles.loginText}>Consultar gráficos   <Ionicons name="ios-stats" color='white' size={25} /></Text>
          </TouchableOpacity>

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
  handleBarCodeScanned = ({ data }) => {
    const { navigate } = this.props.navigation;
    this.setState({ scanned: true });
    this.setState({ rendered: false });
    //navigate('Home', { qr: data });


    let dataSplit = data.split("\n");
    
    this.state.qrURL = undefined;
    this.state.qrTEL = undefined;
    if(dataSplit[6] != undefined){
      this.state.qrTEL = dataSplit[2].split(":")[1];
      this.state.qrURL = dataSplit[6].split(":")[1];
      this.state.qrURL = this.state.qrURL.slice(0, this.state.qrURL.length-1);
      this.state.qrTEL = this.state.qrTEL.slice(0, this.state.qrTEL.length-1);
    }

    

    this.aceptar(this.state.qrURL, this.state.qrTEL, data);
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
    borderRadius: 20,
    borderBottomWidth: 1,
    borderRightWidth: 3,
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
    borderRadius: 20,
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

  graphicButton: {
    backgroundColor: "grey",
    borderRightColor: '#e61a31',
    borderRightWidth: 5,
    borderLeftColor: '#e61a31',
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
    fontSize: 18,
    fontFamily: 'arvo'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFDFDF',
    padding: 10
  },
})
