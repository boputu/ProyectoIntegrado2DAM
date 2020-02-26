//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

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
    }

    render() {
        return (

            <View>            
          <TouchableOpacity style={styles.scanContainer}
            onPress={() => { /*poner aqui para abrir el popover*/ }}>
            <Text style={styles.loginText}><Ionicons name="ios-information-circle" color='white' size={30} /></Text>
          </TouchableOpacity>
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