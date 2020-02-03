import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    FlatList,
} from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';


class Producto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 150, height: 150, marginBottom: 50 }}
                    source={require('../images/florida.png')}
                />
                <Text>{this.props.nombre}</Text>
            </View>
        );
    }
}

export default Producto;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
      borderBottomColor: 'black',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
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
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
    },
    loginButton: {
      backgroundColor: "#2f95dc",
      borderRightColor: '#2577b0',
      borderRightWidth: 5,
      borderLeftColor: '#2577b0',
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