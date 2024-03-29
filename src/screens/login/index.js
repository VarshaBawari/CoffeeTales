import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import { authenticate, clearPreviousAuthError } from './redux/dispatcher'
import { COLORS } from '../../constants'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            authErrorMessage: ""
        }
    }
    componentWillMount() {
        this.props.clearPreviousAuthError()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.loggedIn) {
            this.props.navigation.replace('Dashboard')
        }
        if (nextProps && nextProps.authErrorMessage) {
            alert(nextProps.authErrorMessage)
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/coffee_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                    <View style={styles.subContainer}>
                        <Text style={{ ...styles.titleLabel }}>CoffeeTales</Text>
                        <Text style={{ ...styles.subTitleLabel }}>
                            Celebrating the Joy of Coffee
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={"Username/Email/PhoneNumber"}
                            onChangeText={(text) => {
                                this.setState({ userName: text })
                            }}
                            value={this.state.userName} />
                        <TextInput
                            style={styles.input}
                            placeholder={"Password"}
                            onChangeText={(text) => {
                                this.setState({ password: text })
                            }}
                            value={this.state.password} />
                        <View style={{ ...styles.submitBtn, backgroundColor: this.props.authenticating ? COLORS.LIGHT_COFFEE_BROWN : COLORS.COFFEE_BROWN }}>

                            <TouchableOpacity onPress={() => {
                                this.props.navigation.replace('AddressComponent')


                                // this.props.navigation.replace('Dashboard')
                                // this.props.authenticate(this.state.userName, this.state.password)
                            }} disabled={this.props.authenticating}>
                                <Text style={styles.submitBtnLabel}>Login</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.replace('AddressComponent')
                            // this.props.navigation.replace('Dashboard')
                        }} >
                            <Text style={styles.submitBtnLabel}>New User? Register now</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </ImageBackground>
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
    return bindActionCreators({ authenticate, clearPreviousAuthError }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
