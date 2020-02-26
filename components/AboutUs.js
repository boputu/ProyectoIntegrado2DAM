//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          isVisible: false,
        }
    }

    toggleOverlay = () => {
      this.setState({isVisible: !this.state.isVisible});
    };

    render() {
        return (

          <View>            
            <TouchableOpacity style={styles.scanContainer}
              onPress={this.toggleOverlay}>
              <Text style={styles.loginText}><Ionicons name="ios-people" color='white' size={50} /></Text>
            </TouchableOpacity>

            <Overlay
              isVisible={this.state.isVisible}
              onBackdropPress={this.toggleOverlay}
              height="auto"
              >

              <View>
                <Text style={styles.textoBody}>
                  Ésta aplicación está diseñada para permitir a los usuarios valorar los distintos proyectos de Florida Expo. También puede mostrar mediante gráficos qué aplicación es la mejor valorada ya sea por su innovación, por su comunicación o por su transferibilidad.
                </Text>

                <Text style={styles.textoBottom}>
                  Desarrolladores de la aplicación:
                  {'\n'}
                  {'\n'}Aldimir Aleksandrov Stanizarov
                  {'\n'}aldimirprincipal@gmail.com
                  {'\n'}
                  {'\n'}Borja Pulido Tudela
                  {'\n'}borjabussiness@gmail.com
                  {'\n'}
                  {'\n'}Carlos Tamarit Martínez
                  {'\n'}carlostamarit18@gmail.com
                  {'\n'}
                  {'\n'}Javier Botía Castillo
                  {'\n'}javibc13@gmail.com
                  {'\n'}
                  {'\n'}Rubén Martínez Lozano
                  {'\n'}Rubenmartinezlozano@gmail.com
                  {'\n'}
                  {'\n'}Sergio Quesada Ochovo
                  {'\n'}sergio.qo000@gmail.com
                  {'\n'}
                </Text>
              </View>

            </Overlay>

          </View>

        );
    }
}

const styles = StyleSheet.create({
    scanContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginRight: 10,
      },
      loginText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'arvo'
      },
      textoTitle: {
        padding: 10,
        color: '#1B4F72',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '800',
        fontFamily: 'arvo'
      },
      textoBody: {
        padding: 15,
        color: '#1B4F72',
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'arvo'
      },
      textoBottom: {
        padding: 12,
        color: '#1B4F72',
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
        fontFamily: 'arvo'
      },
})



export default AboutUs;