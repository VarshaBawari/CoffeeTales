
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { COLORS } from "../../constants"

export default class ProgressiveImage extends Component {
    state = { showDefault: true, error: false };

    render() {
        var image = this.state.showDefault ? require("../../assets/coffee_default.png") : (this.state.error ? require("../../assets/default_coffee.jpg") : { uri: this.props.uri });
        if (this.state.showDefault) {
            return (
                <View style={{ ...this.props.style, backgroundColor: COLORS.LIGHT_GRAY, alignItems: "center", justifyContent: "center", }}>
                    <Image style={{ ...this.props.style, tintColor: COLORS.DARK_GRAY, height: 80, width: 80 }}
                        source={image}
                        onLoadEnd={() => this.setState({ showDefault: false })}
                        onError={() => this.setState({ error: true })}
                        resizeMode={this.props.resizeMode} />
                </View >
            )
        } else {
            return (
                <Image style={{ ...this.props.style, }}
                    source={image}
                    resizeMode={this.props.resizeMode} />
            )
        }

    }
}