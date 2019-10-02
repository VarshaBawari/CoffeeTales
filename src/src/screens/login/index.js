import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import styles from './styles'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     this.props.loadAppData();
    // }

    render() {
        let deviceHeight = Dimensions.get('window').height
        return (
            <View style={[styles.container, { marginTop: deviceHeight / 4 }]}>
                <Text style={styles.welcome}>WELCOME to</Text>
                <Text style={styles.tabline}>Login Screen</Text>
            </View>
        );
    }
}

// const mapStateToProps = (state) => {
//     return { splashReducer: state.splashReducer }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ loadAppData }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', },
    welcome: { fontSize: 56, color: '#363636', },
    tabline: { fontSize: 28, color: '#363636', },
});