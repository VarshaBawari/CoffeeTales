import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, FlatList, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles'

class UsernameComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""

        };
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ ...styles.subTitleLabel, marginBottom: 40 }}>
                    Enter username/email/phonenumber and password
                        </Text>
                <TextInput
                    style={{ ...styles.input, marginVertical: 0, }}
                    placeholder={"Enter username/email/phonenumber"}
                    onChangeText={text => this.setState({ username: text })}
                    value={this.state.username}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <TextInput
                    style={{ ...styles.input, marginVertical: 30, }}
                    placeholder={"Enter password"}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                    autoCorrect={false}
                    autoCapitalize="none"
                />

            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer.loadingAppData,
        authenticating: state.authReducer.authenticating,
        authErrorMessage: state.authReducer.authErrorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({ authenticate, clearPreviousAuthError }, dispatch)
    return bindActionCreators({}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(UsernameComponent)
