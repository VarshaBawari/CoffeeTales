
import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ProgressiveImage extends Component {
    state = { showDefault: true, error: false };

    render() {
        var image = this.state.showDefault ? require("../../assets/coffee_default.png") : (this.state.error ? require("../../assets/default_coffee.jpg") : { uri: this.props.uri });
        if (this.state.showDefault) {
            return (
                <View style={{ ...this.props.style, backgroundColor: "#e7e8e9", alignItems: "center", justifyContent: "center", }}>
                    <Image style={{ ...this.props.style, tintColor: "#bbbcbf", height: 80, width: 80 }}
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