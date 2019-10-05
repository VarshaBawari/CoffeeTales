import React, { Component } from 'react';
import { ImageBackground, View, Text, FlatList, StatusBar, Animated, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFacts } from './redux/dispatcher'

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
            <View style={{ flex: 1, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }}>


                <FlatList
                    style={{ backgroundColor: "transparent", marginVertical: 20 }}
                    data={this.state.factsList}
                    keyExtractor={(this._keyExtractor.bind(this))}
                    initialNumToRender={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ backgroundColor: "white", marginBottom: 20, borderRadius: 10, marginHorizontal: 20 }}>
                                <Image source={{ uri: item.url }} style={{ height: 200, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <Text
                                    numberOfLines={2}
                                    style={{ paddingHorizontal: 15, paddingTop: 15, fontWeight: "bold", fontSize: 16 }}>
                                    {item.title}
                                </Text>

                                <View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 15 }}>
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