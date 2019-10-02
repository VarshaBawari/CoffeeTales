import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import GenderComponent from './components/gender'
import AgeComponent from './components/age'
import AddressComponent from './components/address'
import UsernameComponent from './components/usernamePassword'
import BioComponent from './components/bio'

// import { authenticate, clearPreviousAuthError } from './redux/dispatcher'

class RegisterationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            authErrorMessage: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.loggedIn) {
            this.props.navigation.replace('Dashboard')
        }
        if (nextProps && nextProps.authErrorMessage) {
            alert(nextProps.authErrorMessage)
        }
    }

    genderSelected(gender) {
        // this.props.navigation.navigate('Registeration')

    }

    render() {
        return (
            <ImageBackground source={require('../../assets/coffee_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                    <View style={{ height: 120, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, }}>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }}>
                                <Image source={require("../../assets/icon_back.png")} style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ ...styles.titleLabel, textAlign: "left", marginLeft: 16 }}>
                            CoffeeTales
                        </Text>
                    </View>
                    <ScrollView>
                        <View>
                            <UsernameComponent />
                            {/* <GenderComponent /> */}
                            {/* <AgeComponent /> */}
                            {/* <AddressComponent /> */}

                            {/* <BioComponent /> */}
                        </View>
                    </ScrollView>

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
    // return bindActionCreators({ authenticate, clearPreviousAuthError }, dispatch)
    return bindActionCreators({}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterationScreen)
