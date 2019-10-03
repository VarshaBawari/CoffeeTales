import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import { authenticate, clearPreviousAuthError } from './redux/dispatcher'

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
                    <View style={{ width: "100%" }}>
                        <Text style={{ ...styles.titleLabel }}>
                            CoffeeTales
                        </Text>
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
                            placeholder={"Password same as Username"}
                            onChangeText={(text) => {
                                this.setState({ password: text })
                            }}
                            value={this.state.password} />
                        <View style={{ ...styles.submitBtn, backgroundColor: this.props.authenticating ? "#b88e72" : "#5e422f" }}>

                            <TouchableOpacity onPress={() => {
                                // this.props.navigation.navigate('Info')
                                this.props.navigation.navigate('Dashboard')

                                // this.props.authenticate(this.state.userName, this.state.password)
                            }} disabled={this.props.authenticating}>
                                <Text style={styles.submitBtnLabel}>
                                    Login
                                            </Text>
                            </TouchableOpacity>


                        </View>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Registeration')
                        }} >
                            <Text style={styles.submitBtnLabel}>
                                New User? Register now
                                            </Text>
                        </TouchableOpacity>
                        {
                            this.props.authenticating &&
                            <Text style={styles.submitBtnLabel}> ...</Text>

                        }
                        {/* <Text style={{ ...styles.submitBtnLabel, color: "red", fontSize: 12 }}>
                            {this.state.authErrorMessage}
                        </Text> */}
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
