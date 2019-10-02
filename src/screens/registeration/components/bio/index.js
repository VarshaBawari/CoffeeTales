import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, FlatList, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles'

class BioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bio: ""
        };
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ ...styles.subTitleLabel, marginBottom: 40 }}>
                    Tell something about yourself
                        </Text>
                <TextInput
                    style={{ ...styles.input, marginVertical: 0, height: 100 }}
                    // placeholder={"Enter username/email/phonenumber"}
                    onChangeText={text => this.setState({ bio: text })}
                    value={this.state.bio}
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

export default connect(mapStateToProps, mapDispatchToProps)(BioComponent)
