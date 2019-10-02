import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../../styles'
class GenderComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", }}>
                <Text style={{ ...styles.subTitleLabel, marginBottom: 40 }}>
                    Select Gender
                        </Text>
                <View style={{ ...styles.submitBtn, marginTop: 20 }}>

                    <TouchableOpacity onPress={() => {
                        // this.props.authenticate(this.state.userName, this.state.password)
                    }} disabled={this.props.authenticating}>
                        <Text style={styles.submitBtnLabel}>
                            Male
                                            </Text>
                    </TouchableOpacity>


                </View>
                <View style={{ ...styles.submitBtn, backgroundColor: this.props.authenticating ? "#b88e72" : "#5e422f" }}>

                    <TouchableOpacity onPress={() => {
                        // this.props.authenticate(this.state.userName, this.state.password)
                    }} disabled={this.props.authenticating}>
                        <Text style={styles.submitBtnLabel}>
                            Female
                                            </Text>
                    </TouchableOpacity>


                </View>
                <View style={{ ...styles.submitBtn, }}>

                    <TouchableOpacity onPress={() => {
                        // this.props.authenticate(this.state.userName, this.state.password)
                    }} disabled={this.props.authenticating}>
                        <Text style={styles.submitBtnLabel}>
                            Prefer not to say
                                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(GenderComponent)
