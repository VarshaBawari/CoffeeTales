import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';

export default class CoffeeLocator extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Text>
                    CoffeeLocator
                </Text>
            </View>
        )
    }
}