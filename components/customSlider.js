//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { View, StyleSheet } from 'react-native';
import {
    Text,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { anyTypeAnnotation } from '@babel/types';

class CustomSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3,
            color: "orange",

            puntuacion: 0,
        };
    }

    componentDidMount(){
        
    }

    onStarRatingPress(rating) {
        let color = "orange";

        if(rating == 1 || rating == 2){
            color="red";
        }
        if(rating == 3){
            color="orange";
        }
        if(rating == 5 || rating == 4){
            color="green";
        }
        this.setState({
            starCount: rating,
            color:color,

            puntuacion: rating
        });
    }

    render() {
        return (
            <View>
                
                <View style={styles.labelContainer}>
                    
                    <View style={styles.line}>
                    <Text style={styles.label}>{this.props.text}</Text>

                    </View>
                    
                </View>

                <View style={styles.rating}>

                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starStyle={{color:this.state.color}}
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    rating:{
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        marginTop: 5
    },

    labelContainer: {
        flexDirection: "row",
    },

    label: {
        marginLeft: 4,
        color: "black",
        fontSize: 16,
        marginTop: -10,
        fontFamily: 'arvo',
    },

    line: {
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        height: 20,

        marginLeft: 20,
        borderLeftColor: "red",
        borderBottomColor:'#e61a31',
    }
})

export default CustomSlider;