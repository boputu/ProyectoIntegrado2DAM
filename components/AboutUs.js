//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions,

    FlatList,
} from 'react-native';

import { anyTypeAnnotation } from '@babel/types';

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
              <Text style={styles.loginText}><Ionicons name="ios-information-circle" color='white' size={30} /></Text>
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
})



export default AboutUs;