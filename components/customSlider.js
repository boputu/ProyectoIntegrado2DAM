//Imports de react-native
import * as React from 'react';
import 'react-native-gesture-handler';

import { View, StyleSheet } from 'react-native';
import {
    Text,
} from 'react-native';
import StarRating from 'react-native-star-rating';

class CustomSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3,
            color: "orange"
        };
    }

    componentDidMount(){
        this.props.pulsado(this.state.starCount);
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
            color:color
        });
    }

    render() {
        return (
            <View>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    starStyle={{color:this.state.color}}
                />
            </View>
        );
    }
}

export default CustomSlider;