import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import loadAppData from './redux/dispatcher'
class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadAppData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.loadingAppData) {
            this.props.navigation.replace('LoginScreen')
        }
    }


    render() {
        let deviceHeight = Dimensions.get('window').height
        return (
            <View style={[styles.container, { marginTop: deviceHeight / 4 }]}>
                <Text style={styles.welcome}>WELCOME to</Text>
                <Text style={styles.tabline}>Splash Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { splashReducer: state.splashReducer }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadAppData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
