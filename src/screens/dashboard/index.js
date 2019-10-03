import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { TabContainer } from './components/TabContainer'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <ImageBackground source={require('../../assets/home_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

                    <View style={{ flex: 1, marginTop: 20 }}>
                        {/* 123346 */}
                        <View style={{ height: 70, backgroundColor: "#335569", justifyContent: "center" }}>
                            <Text style={{ color: "white", fontSize: 20, marginLeft: 20 }}>
                                Welcome to CoffeeTales Varsha..!!
                       </Text>
                        </View>
                        <TabContainer />
                    </View>
                </SafeAreaView>

            </ImageBackground>
        );
    }
}


