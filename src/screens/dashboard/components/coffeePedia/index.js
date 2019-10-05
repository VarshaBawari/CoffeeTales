import React, { Component } from 'react';
import { ImageBackground, View, Text, FlatList, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFacts } from './redux/dispatcher'
import styles from './styles'

class CoffeePedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            factsList: this.props.facts
        }
    }

    componentDidMount() {
        this.props.getFacts()
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps && nextProps.facts) {
            return true
        }
        return false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.facts) {
            this.setState({
                factsList: nextProps.facts
            })
        }

    }
    _keyExtractor = (item, index) => { "facts+" + index + "-" };


    render() {
        return (
            <View style={{ ...styles.tabContainer, }}>
                <FlatList
                    style={{ ...styles.listContainer }}
                    data={this.state.factsList}
                    keyExtractor={(this._keyExtractor.bind(this))}
                    initialNumToRender={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ ...styles.itemContainer }}>
                                <Image source={{ uri: item.url }} style={{ ...styles.bannerImage }} />
                                <Text
                                    numberOfLines={2}
                                    style={{ ...styles.title }}>
                                    {item.title}
                                </Text>

                                <View style={{ ...styles.descriptionComponent }}>
                                    <Text>
                                        {item.description}
                                    </Text>
                                </View>

                            </View>
                        )
                    }
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { facts: state.coffeePediaReducer.facts }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFacts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeePedia)