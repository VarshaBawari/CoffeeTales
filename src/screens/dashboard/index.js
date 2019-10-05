import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { TabContainer } from './components/TabContainer'
export default class Dashboard extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/home_bg.jpg')} style={styles.backgroundImage}>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                    <View style={styles.subContainer}>
                        <View style={styles.topBar} />
                        <TabContainer />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}


