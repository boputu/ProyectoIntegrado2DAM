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
            starCount: 3
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
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
                />
            </View>
        );
    }
}

export default CustomSlider;