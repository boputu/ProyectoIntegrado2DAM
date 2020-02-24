//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    FlatList,
} from 'react-native';

import { anyTypeAnnotation } from '@babel/types';

class Graphics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (



            <View>

                <Text style={styles.label}>{this.props.nombreApp}  <Ionicons name="md-stats" color='grey' size={25} /></Text>
                <View style={styles.StatsContainer}>
                    <Text style={styles.label3}>Creatividad e innovación</Text>
                    <Text style={styles.totalRate}>{this.props.ci} <Ionicons name="ios-star" color='black' size={15} /></Text>
                </View>
                <Progress.Bar
                    styles={{ margin: 10 }}
                    color={this.props.colorBarCi}
                    width={null}
                    height={15}
                    progress={this.props.ciBar}
                />

                <View style={styles.margin}>
                    <View style={styles.StatsContainer}>
                        <Text style={styles.label3}>Implementación y transferibilidad</Text>
                        <Text style={styles.totalRate}>{this.props.it} <Ionicons name="ios-star" color='black' size={15} /></Text>
                    </View>
                    <Progress.Bar
                        styles={{ margin: 10 }}
                        color={this.props.colorBarIt}
                        width={null}
                        height={15}
                        progress={this.props.itBar}
                    />
                </View>


                <View style={styles.margin}>
                    <View style={styles.StatsContainer}>
                        <Text style={styles.label3}>Comunicación y usabilidad</Text>
                        <Text style={styles.totalRate}>{this.props.cu} <Ionicons name="ios-star" color='black' size={15} /></Text>
                    </View>
                    <Progress.Bar
                        styles={{ margin: 10 }}
                        color={this.props.colorBarCu}
                        width={null}
                        height={15}
                        progress={this.props.cuBar}
                    />
                </View>
                {/*<View style={[styles.StatsContainer, styles.margin]}>
                    <Text style={styles.label2}>Total de votos:</Text>
                    <Text style={styles.totalRate}>{this.props.total}</Text>
                </View>*/}
                <View style={[styles.StatsContainer, styles.margin]}>
                    <Text style={styles.label2}>Media de votos:</Text>
                    <Text style={styles.totalRate}>{this.props.media}</Text>
                </View>

                <View
                    style={{
                        marginTop: 15,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        paddingBottom: 50
    },
    app: {
        borderBottomWidth: 2,
        borderBottomColor: '#e61a31',
    },
    container: {
        flex: 3,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        borderTopWidth: 2,
        borderTopColor: '#e61a31',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    StatsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'arvo',
    },

    countUsers: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'arvo',
        opacity: 0.5
    },
    bar: {
        flexDirection: 'row',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        fontFamily: 'arvo',
        marginBottom: 10
    },

    label2: {
        fontWeight: 'bold'
    },

    label3: {
        fontFamily: 'arvo'
    },

    totalRate: {
        fontSize: 15,
        opacity: 0.3,
        fontFamily: 'arvo',
        color: "black"
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    margin: {
        marginTop: 15
    }
})



export default Graphics;