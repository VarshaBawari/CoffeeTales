import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNearByCafes } from './redux/dispatcher'
class CoffeeLocator extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getNearByCafes()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <Text>
                    CoffeeLocator
                </Text>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        loadingNearByCafes: state.nearByCafeReducer.loadingNearByCafes,
        nearByCafes: state.nearByCafeReducer.nearByCafes,
        errorMessageNearByCafes: state.nearByCafeReducer.errorMessageNearByCafes,
        isSearchingNearByCafes: state.nearByCafeReducer.isSearchingNearByCafes,
        loadingNearByCafeSearch: state.nearByCafeReducer.loadingNearByCafeSearch,
        searchedNearByCafes: state.nearByCafeReducer.searchedNearByCafes,
        errorMessageNearByCafeSearch: state.nearByCafeReducer.errorMessageNearByCafeSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNearByCafes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeLocator)