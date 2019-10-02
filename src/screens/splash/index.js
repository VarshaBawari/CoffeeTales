import React, { Component } from 'react';
import { ImageBackground, NativeModules, View, Text, SafeAreaView, StatusBar, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import { loadAppData, appLoadingComplete } from './redux/dispatcher'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnimText1: new Animated.Value(0),  // Initial value for opacity: 0
            fadeAnimText2: new Animated.Value(0),  // Initial value for opacity: 1
            fadeAnimText3: new Animated.Value(0),  // Initial value for opacity: 1
        }
    }
    appLoaded() {
        var that = this
        setTimeout(function () {
            that.props.appLoadingComplete()
        }, 3500);

    }
    startAnimation() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnimText1,
                {
                    toValue: 1,
                    duration: 800,
                    delay: 0
                }
            ),
            Animated.timing(
                this.state.fadeAnimText2,
                {
                    toValue: 1,
                    duration: 1000,
                    delay: 100
                }
            ),
            Animated.timing(
                this.state.fadeAnimText3,
                {
                    toValue: 1,
                    duration: 800,
                    delay: 200
                }
            )
        ]).start(this.appLoaded()); // start the sequence group

    }
    componentDidMount() {
        this.props.loadAppData();
        this.startAnimation()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.loadingAppData) {
            if (this.props.loggedIn) {
                this.props.navigation.replace('Dashboard')
            } else {
                this.props.navigation.replace('Login')
            }

        }
    }

    render() {

        let { fadeAnimText1, fadeAnimText2, fadeAnimText3 } = this.state;

        return (
            <ImageBackground source={require('../../assets/coffee_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                    <View style={styles.textContainer}>
                        <Animated.View style={{ opacity: fadeAnimText1 }}>
                            <Text style={styles.subTitleLabel}>
                                Let's brew some
                        </Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: fadeAnimText2 }}>
                            <Text style={styles.titleLabel}>
                                CoffeeTales
                        </Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: fadeAnimText3 }}>
                            <Text style={styles.subTitleLabel}>
                                together...
                        </Text>
                        </Animated.View>
                    </View>
                </SafeAreaView>
            </ImageBackground>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        loadingAppData: state.splashReducer.loadingAppData,
        loggedIn: state.authReducer.loadingAppData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadAppData, appLoadingComplete }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
