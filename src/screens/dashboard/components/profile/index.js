import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../../styles'
export default class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.tabContainer}/>
        )
    }
}